import { styles } from '@/styles/styles'
import React from 'react'
import LogoIcon1 from '@/assets/icons/brand-assets/logo-icon1.svg'
import LogoIcon2 from '@/assets/icons/brand-assets/logo-icon2.svg'
import LogoIcon3 from '@/assets/icons/brand-assets/logo-icon3.svg'
import LogoIcon4 from '@/assets/icons/brand-assets/logo-icon4.svg'
import LogoIcon5 from '@/assets/icons/brand-assets/logo-icon5.svg'
import LogoIcon6 from '@/assets/icons/brand-assets/logo-icon6.svg'
import LogoIcon7 from '@/assets/icons/brand-assets/logo-icon7.svg'
import LogoIcon8 from '@/assets/icons/brand-assets/logo-icon8.svg'
import BrandCart from './BrandCart'
import { BoxIcon } from '@/ui/BoxIcon'

interface IMisuseBlockData {
	id: number
	image: string
	text: string
}

const MisuseBlockData: IMisuseBlockData[] = [
	{
		id: 1,
		image: LogoIcon1,
		text: `Don't use the wordmark without the symbol`,
	},
	{
		id: 2,
		image: LogoIcon2,
		text: `Don't use a color or gradient on the logo`,
	},
	{
		id: 3,
		image: LogoIcon3,
		text: `Don't change proportions or spacings`,
	},
	{
		id: 4,
		image: LogoIcon4,
		text: `Don't change proportions or spacings`,
	},
	{
		id: 5,
		image: LogoIcon5,
		text: `Don’t use the symbol as a mask`,
	},
	{
		id: 6,
		image: LogoIcon6,
		text: `Don’t rotate or flip the symbol`,
	},
	{
		id: 7,
		image: LogoIcon7,
		text: `Don’t rotate or flip the symbol`,
	},
	{
		id: 8,
		image: LogoIcon8,
		text: `Don’t squeeze or transform`,
	},
]

const MisuseBlock: React.FC = () => {
	return (
		<div id='misuse'>
			<h4 data-aos='fade-right' data-aos-delay='500' className={`${styles.titleH4} sm:mb-7 md:mb-10`}>Misuse</h4>
			<div className='flex items-stretch justify-between gap-3 flex-wrap'>
				{
					MisuseBlockData?.map((item) => (
						<BrandCart id={item.id} customStyle='sm:p-7 md:p-10' wrapperStyle='sm:w-full lg:w-1/2-custom sm:h-[13.375rem] md:h-64'>
							<BoxIcon customStyle='size-11 rounded-full bg-darkAccentRed absolute sm:left-2 sm:top-2 xsm:left-7 xsm:top-7'>
								<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M1 1L7 7M13 13L7 7M7 7L13 1L1 13" stroke="white" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</BoxIcon>
							<div className='flex flex-col h-full justify-end sm:gap-y-7 md:gap-y-10'>
								<div className='flex justify-center'>
									<img src={item.image} alt="icon" />
								</div>
								<p className='text-darkTextMuted text-sm leading-5'>{item.text}</p>
							</div>

						</BrandCart>
					))
				}

			</div>
		</div>
	)
}

export default MisuseBlock