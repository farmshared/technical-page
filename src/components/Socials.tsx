import React from 'react'
import { Link } from 'react-router-dom'
import Twitter from '@/components/svg/SocialTwitterIcon'
import Telegram from '@/components/svg/SocialTelegramIcon'
import MediumIcon from '@/components/svg/SocialMediumIcon'
import GitBookIcon from './svg/GitBookIcon'
import GitlabIcon from '@/components/svg/GitlabIcon'

interface SocialsProps {
	customStyle?: string
}

interface ISocial {
	id: number
	path: string
	icon: React.ReactNode
}

const socialData: ISocial[] = [
	{ id: 1, path: 'https://docs.lqg.io/', icon: <GitBookIcon /> },
	{ id: 2, path: 'https://github.com/LiquidityGate/', icon: <GitlabIcon pathStyle='fill-lightTextMuted group-hover:fill-white' /> },
	{ id: 3, path: 'https://x.com/LiquidityGate', icon: <Twitter /> },
	{ id: 4, path: 'https://t.me/LiquidityGate', icon: <Telegram /> },
	{ id: 5, path: 'https://medium.com/@liquiditygate', icon: <MediumIcon /> },
]

const Socials: React.FC<SocialsProps> = ({ customStyle }) => {
	return (
		<div className={`flex items-center justify-between gap-x-[1.15rem] w-max ${customStyle}`}>
			{socialData.map(({ id, path, icon }) => <Link className='group' to={path} key={id}>{icon}</Link>)}
		</div>
	)
}

export default Socials