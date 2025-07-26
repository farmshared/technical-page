import { styles } from '@/styles/styles'
import React from 'react'
import LogoMarkIcon from '@/assets/icons/brand-assets/symbol-clearspace-icon.svg'
import MainLogoIcon from '@/assets/icons/brand-assets/logo-clearspace-icon.svg'
import BrandCart from './BrandCart'

interface IClearspaceBlockData {
	id: number
	image: string
	title: string
	text: string
}

const LogoAssetsData: IClearspaceBlockData[] = [
	{
		id: 1,
		image: LogoMarkIcon,
		title: 'Symbol clearspace',
		text: 'x = height / 3',
	},
	{
		id: 2,
		image: MainLogoIcon,
		title: 'Logo clearspace',
		text: 'x = height / 3',
	},
]

const ClearspaceBlock: React.FC = () => {
	return (
		<div id='clearspace'>
			<h4 data-aos='fade-right' data-aos-delay='500' className={`${styles.titleH4} sm:mb-7 md:mb-10`}>Clearspace</h4>
			<div className='flex items-stretch justify-between gap-3 sm:flex-col  md:flex-col lg:flex-row'>
				{
					LogoAssetsData?.map((item) => (
						<BrandCart id={item.id} customStyle='sm:p-7 md:p-10' wrapperStyle='flex-1'>
							<div className='flex flex-col h-full justify-between'>
								<p className='text-darkTextMuted text-sm leading-5 uppercase'>{item.text}</p>
								<div className='flex justify-center sm:py-7 md:py-10'>
									<img src={item.image} alt="icon" />
								</div>
								<h5 className={`text-[1.125rem] text-white font-semibold`}>{item.title}</h5>

							</div>

						</BrandCart>
					))
				}

			</div>
		</div>
	)
}

export default ClearspaceBlock