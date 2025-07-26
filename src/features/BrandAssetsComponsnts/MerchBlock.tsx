import { styles } from '@/styles/styles'
import React from 'react'
import BrandCart from './BrandCart'
import Merch1 from '@/assets/banners/merch1.png'
import Merch2 from '@/assets/banners/merch2.png'
import Merch3 from '@/assets/banners/merch3.png'
import Merch4 from '@/assets/banners/merch4.png'
import Merch5 from '@/assets/banners/merch5.png'
import Merch6 from '@/assets/banners/merch6.png'

interface IMerchData {
	id: number
	image: string
	text: string
}

const MerchData: IMerchData[] = [
	{
		id: 1,
		image: Merch1,
		text: `T-Shirt White`,
	},
	{
		id: 2,
		image: Merch2,
		text: `T-Shirt Black`,
	},
	{
		id: 3,
		image: Merch3,
		text: `Сap`,
	},
	{
		id: 4,
		image: Merch4,
		text: `Notebook`,
	},
	{
		id: 5,
		image: Merch5,
		text: `Notebook`,
	},
	{
		id: 6,
		image: Merch6,
		text: `Backpack`,
	},
]

const MerchBlock: React.FC = () => {
	return (
		<div id='merch'>
			<h4 data-aos='fade-right' data-aos-delay='100' className={`${styles.titleH4} sm:mb-7 md:mb-10`}>Merch</h4>
			<div className='flex flex-wrap justify-between items-stretch gap-x-3 sm:gap-y-3 lg:gap-y-10'>
				{
					MerchData?.map((item) => (
						<BrandCart data-aos='fade-up' data-aos-delay={`${100 + item.id * 100}`} id={item.id} customStyle='p-7' wrapperStyle='sm:w-full lg:w-1/3-custom'>
							<div className='flex flex-col h-full justify-between gap-5'>
								<div className='flex justify-center items-center overflow-hidden rounded-[1.25rem] bg-[#050505] h-60 backdrop-blur-sm'>
									<img className='w-auto mx-auto block' src={item.image} alt="icon" />
								</div>
								<div className='p-3'>
									<h5 className={`text-[1.125rem] text-white font-semibold`}>{item.text}</h5>
								</div>

							</div>

						</BrandCart>
					))
				}

			</div>
		</div>
	)
}

export default MerchBlock
