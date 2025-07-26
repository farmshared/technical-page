import { styles } from '@/styles/styles'
import React from 'react'
import LogoMarkIcon from '@/assets/icons/brand-assets/logomark-icon.svg'
import MainLogoIcon from '@/assets/icons/brand-assets/main-logo-icon.svg'
import GrayscaleLogo from '@/assets/icons/brand-assets/grayscaleLogo.svg'
import VerticalLogo from '@/assets/icons/brand-assets/verticalLogo.svg'
import BrandCart from './BrandCart'
import LinkMore from '@/components/ui/LinkMore'

interface ILogoAssetsData {
	id: number
	image: string
	title: string
	text: string
	pngUrl: string
	svgUrl: string
}

const LogoAssetsData: ILogoAssetsData[] = [
	{
		id: 1,
		image: LogoMarkIcon,
		title: 'LQG Logomark',
		text: 'Our symbol is our mark of authenticity. Galxe’s comets represent pioneering innovation and confident leadership, guiding the path to onboarding the world to web3.',
		pngUrl: '',
		svgUrl: ''
	},
	{
		id: 2,
		image: MainLogoIcon,
		title: 'LQG Main logo',
		text: 'Our logo combines our symbol with a custom wordmark. It is confident and dynamic and should be used in all communications outside the immediate Galxe ecosystem.',
		pngUrl: '',
		svgUrl: ''
	},
	{
		id: 3,
		image: VerticalLogo,
		title: 'LQG Vertical logo',
		text: 'Our symbol is our mark of authenticity. Galxe’s comets represent pioneering innovation and confident leadership, guiding the path to onboarding the world to web3.',
		pngUrl: '',
		svgUrl: ''
	},
	{
		id: 4,
		image: GrayscaleLogo,
		title: 'LQG Grayscale logo',
		text: 'Our logo combines our symbol with a custom wordmark. It is confident and dynamic and should be used in all communications outside the immediate Galxe ecosystem.',
		pngUrl: '',
		svgUrl: ''
	},
]

const LogoAssetsBlock: React.FC = () => {
	return (
		<div id='logo'>
			<h4 data-aos='fade-right' data-aos-delay='500' className={`${styles.titleH4} sm:mb-7 md:mb-10`}>LQG logo assets</h4>
			<div className='flex items-stretch justify-between gap-3 flex-wrap'>
				{
					LogoAssetsData?.map((item) => (
						<BrandCart id={item.id} customStyle='sm:p-7 md:p-10' wrapperStyle='sm:w-full lg:w-1/2-custom'>
							<div className='flex flex-col h-full'>
								<div className='flex justify-center sm:pt-12 sm:pb-14 md:pt-14 md:pb-20'>
									<img className={`${item.id === 3 ? 'h-20 scale-[1.6375]' : ''} ${item.id === 1 ? 'scale-[1.425]' : ''}`} src={item.image} alt="icon" />
								</div>
								<h5 className={`text-[1.125rem] text-white font-semibold mb-4`}>{item.title}</h5>
								<p className='text-darkTextMuted text-sm leading-5 mb-4'>{item.text}</p>
								<div className='flex items-center gap-x-6 mt-auto'>
									<LinkMore customStyle='link-more-rotate' text='PNG' link={item.pngUrl} />
									<LinkMore customStyle='link-more-rotate' text='SVG' link={item.svgUrl} />
								</div>
							</div>

						</BrandCart>
					))
				}

			</div>
		</div>
	)
}

export default LogoAssetsBlock