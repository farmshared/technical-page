import React, { useState } from 'react'
import { styles } from '../styles/styles';
import { Logo } from '../ui/Logo';
import { Navigation } from './Navigation';
import { INavigationData } from '../types/types';
import { Link } from 'react-router-dom';
import { Button } from '@/ui/Button';
import ModalSubscribe from './modals/ModalSubscribe';
import GooglePlay from '@/assets/icons/google-play.svg';
import AppStore from '@/assets/icons/app-store.svg';
import DNVIcon from '@/assets/icons/DNV-Light.svg'
import Tg from '@/assets/icons/tg.svg';
import Socials from './Socials';

interface FooterProps {
	customStyle?: string
}

const navigationData: INavigationData[] = [
	{
		id: 1,
		path: '/faq',
		label: 'FAQ'
	},
	{
		id: 2,
		path: 'support',
		label: 'Help & Support'
	},
	{
		id: 3,
		path: 'brand',
		label: 'Brand'
	},
	{
		id: 4,
		path: 'legal',
		label: 'Legal'
	},
	{
		id: 5,
		path: 'open-app',
		label: 'Open App'
	},
	{
		id: 6,
		path: 'bug-bounty',
		label: 'Bug Bounty'
	},
	{
		id: 7,
		path: 'partner-program',
		label: 'Partner Program'
	},
	{
		id: 8,
		path: 'https://docs.lqg.io/',
		label: 'Docs'
	},
	{
		id: 9,
		path: '',
		label: 'FSG'
	}
]

export const Footer: React.FC<FooterProps> = React.memo(({ customStyle }) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<footer id='footer' className={`${customStyle} sm:py-[1.875rem] lg:py-14 relative z-10`}>
			<div className={`${styles.container} flex flex-col sm:gap-y-5 lg:gap-y-10`}>
				<div className='footer-nav-wrapper flex items-center justify-between sm:flex-col gap-x-5 gap-y-7 lg:flex-row'>
					<Logo />
					<div className='flex gap-x-7  gap-y-7 flex-wra sm:flex-col md:flex-row flex-wrap sm:justify-center lg:justify-end'>
						<Navigation customStyle="footer-nav gap-x-5 gap-y-7 sm:flex-col md:flex-row flex-wrap justify-center" navigationData={navigationData} />
						<Button onClick={() => setIsOpen(true)} customStyle={`${styles.buttonStyleBase} px-5 py-3.5`} variant='primary' link={false} type="button">Sign up to newsletter</Button>
					</div>
				</div>
				<div className='flex sm:items-center lg:items-end justify-between gap-x-6 gap-y-7  sm:flex-col-reverse lg:flex-row'>
					<div className='flex flex-col gap-y-7 sm:items-center lg:items-start'>
						<p className={`text-[0.6875rem] leading-3 text-darkTextMuted sm:text-center lg:text-left max-w-md`}>Lqg.io is a pioneering platform that connects private investors with professional market makers across a wide range of digital assets. We provide a seamless and transparent way to earn through liquidity provision, helping enhance market efficiency and support the growth of the broader crypto ecosystem.</p>
						<Socials />
						<div className='flex sm:gap-x-10 lg:gap-x-14 items-center  gap-y-7  sm:flex-col xs:flex-row'>
							<p className={`text-[0.6875rem] leading-3 text-darkTextMuted text-center`}>© LQG Pty Ltd, 2025. All rights reserved.</p>
							<div className='flex items-center gap-x-5 justify-center gap-y-7'>
								<Link to='privacy-policy' className={`text-[0.6875rem] leading-3 transition-all duration-300 hover:text-white text-darkTextMuted cursor-pointer`}>Privacy Policy</Link>
								<span className='w-[1px] h-5 bg-darkTextMuted'></span>
								<Link to='terms-of-service' className={`text-[0.6875rem] leading-3 transition-all duration-300 hover:text-white text-darkTextMuted cursor-pointer`}>Terms of Service</Link>
							</div>
						</div>
					</div>
					<div className='flex flex-col gap-y-7 items-center lg:items-end'>
						<Link target='_blank' to={'https://github.com/LiquidityGate/lqg-docs/blob/main/ISO-IEC_27001-ENG_10000584279-MSC-JAS-ANZ-20250128-20250114893428.pdf'} className='flex max-w-20'>
							<img className='w-full' src={DNVIcon} alt="dnv icon" />
						</Link>
						<div className='flex items-center gap-x-3.5 sm:flex-col gap-y-7 xs:flex-row'>
							<Link to={'/'} className='inline-block sm:max-w-[8.5rem] xs:min-w-36 '>
								<img className='w-full' src={GooglePlay} alt="icon" />
							</Link>
							<Link to={'/'} className='inline-block min-w-32'>
								<img className='w-full' src={AppStore} alt="icon" />
							</Link>
							<Link to={'/'} className='inline-block min-w-32'>
								<img className='w-full' src={Tg} alt="icon" />
							</Link>
						</div>
					</div>

				</div>
			</div>
			<ModalSubscribe isOpen={isOpen} setIsOpen={setIsOpen} />
		</footer>
	)
})

Footer.displayName = 'Footer';