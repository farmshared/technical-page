import React from 'react'
import { Logo } from '@/ui/Logo'
import CloseIcon from './svg/CloseIcon'
import { Navigation } from './Navigation'
import { INavigationData } from '@/types/types'
import MobMenuBg from '@/assets/mob-menu-bg.png'
import { Link } from 'react-router-dom'
import { styles } from '@/styles/styles'
import { SocialMediaData } from '@/mockData/mockData'


interface MobMenuProps {
	customStyle?: string
	handleClose: () => void
	open: boolean
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
	}
]


const MobMenu: React.FC<MobMenuProps> = ({ customStyle, handleClose, open }) => {
	return (
		<div className={`${customStyle} transition-all duration-300 fixed z-50 bg-dark-gradient top-0 right-0 bottom-0 left-0 ${open ? 'translate-x-0' : 'translate-x-full'}  md:hidden flex flex-col gap-y-5 justify-between p-7 pb-10`}>
			<div className='absolute top-0 left-0 right-0 bottom-[5.135rem] z-0 flex justify-center'>
				<img src={MobMenuBg} className='w-full' alt="bg mob" />
			</div>
			<div className='flex flex-col gap-y-14 items-end relative z-10'>
				<div className='flex items-center justify-between w-full'>
					<Logo customStyle="w-[4.5625rem]" />
					<button onClick={handleClose} className='flex justify-center items-center'>
						<CloseIcon />
					</button>
				</div>
				<Navigation isMob={true} handleClose={handleClose} customStyle="flex flex-col gap-y-7 mobile-menu" navigationData={navigationData} />
			</div>
			<div className='flex flex-col gap-y-10 relative z-10'>
				<div className='flex items-stretch justify-center gap-x-2'>
					{
						SocialMediaData?.map((item) => (
							<Link onClick={handleClose} to={item.link} key={item.id} className='social-link relative sm:size-20 2sm:size-28 flex items-center justify-center border-2 border-transparent rounded-2xl customBorderLink'>
								{item.icon}
							</Link>
						))

					}
				</div>
				<div className='flex items-center gap-3 flex-wrap justify-center'>
					<Link onClick={handleClose} to='support' className={`${styles.baseText} text-darkTextMuted cursor-pointer`}>Support</Link>
					<span className='w-[1px] h-5 bg-darkTextMuted'></span>
					<Link onClick={handleClose} to='privacy-policy' className={`${styles.baseText} text-darkTextMuted cursor-pointer`}>Privacy Policy</Link>
					<span className='w-[1px] h-5 bg-darkTextMuted'></span>
					<Link onClick={handleClose} to='terms-of-service' className={`${styles.baseText} text-darkTextMuted cursor-pointer`}>Terms of Service</Link>
				</div>
			</div>
		</div>
	)
}

export default MobMenu