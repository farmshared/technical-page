import { styles } from '@/styles/styles'
import React from 'react'
import BrandCart from './BrandCart'
import LinkMore from '@/components/ui/LinkMore'
import Banner1 from '@/assets/banners/banner1.png'
import Banner2 from '@/assets/banners/banner2.png'
import Banner3 from '@/assets/banners/banner3.png'
import Banner4 from '@/assets/banners/banner4.png'
import Banner5 from '@/assets/banners/banner5.png'
import Banner6 from '@/assets/banners/banner6.png'
import Banner7 from '@/assets/banners/banner7.png'
import Banner8 from '@/assets/banners/banner8.png'
import Banner9 from '@/assets/banners/banner9.png'
import Banner10 from '@/assets/banners/banner10.png'
import Banner11 from '@/assets/banners/banner11.png'
import Banner12 from '@/assets/banners/banner12.png'
import Banner13 from '@/assets/banners/banner13.png'
import Banner14 from '@/assets/banners/banner14.png'
import Banner15 from '@/assets/banners/banner15.png'
import Banner16 from '@/assets/banners/banner16.png'
import Banner17 from '@/assets/banners/banner17.png'
import Banner18 from '@/assets/banners/banner18.png'

interface IBannersData {
	id: number
	image: string
	text: string
}

const BannersData: IBannersData[] = [
	{
		id: 1,
		image: Banner1,
		text: `Facebook post`,
	},
	{
		id: 2,
		image: Banner2,
		text: `Instagram post`,
	},
	{
		id: 3,
		image: Banner3,
		text: `Twitter post`,
	},
	{
		id: 4,
		image: Banner4,
		text: `Facebook post`,
	},
	{
		id: 5,
		image: Banner5,
		text: `Instagram post`,
	},
	{
		id: 6,
		image: Banner6,
		text: `Twitter post`,
	},
	{
		id: 7,
		image: Banner7,
		text: `Facebook post`,
	},
	{
		id: 8,
		image: Banner8,
		text: `Instagram post`,
	},
	{
		id: 9,
		image: Banner9,
		text: `Twitter post`,
	},
	{
		id: 10,
		image: Banner10,
		text: `Facebook post`,
	},
	{
		id: 11,
		image: Banner11,
		text: `Instagram post`,
	},
	{
		id: 12,
		image: Banner12,
		text: `Twitter post`,
	},
	{
		id: 13,
		image: Banner13,
		text: `Facebook post`,
	},
	{
		id: 14,
		image: Banner14,
		text: `Instagram post`,
	},
	{
		id: 15,
		image: Banner15,
		text: `Twitter post`,
	},
	{
		id: 16,
		image: Banner16,
		text: `Facebook post`,
	},
	{
		id: 17,
		image: Banner17,
		text: `Instagram post`,
	},
	{
		id: 18,
		image: Banner18,
		text: `Twitter post`,
	}
]

const BannersBlock: React.FC = () => {
	return (
		<div id='banners'>
			<h4 data-aos='fade-right' data-aos-delay='100' className={`${styles.titleH4} sm:mb-7 md:mb-10`}>Banners</h4>
			<div className='flex flex-wrap justify-between items-stretch gap-x-3 sm:gap-y-3 lg:gap-y-10'>
				{
					BannersData?.map((item) => (
						<BrandCart data-aos='fade-up' data-aos-delay={`${100 + item.id * 100}`} id={item.id} customStyle='p-7' wrapperStyle='sm:w-full lg:w-1/3-custom'>
							<div className='flex flex-col h-full justify-between'>
								<div className='flex justify-center items-center overflow-hidden rounded-[0.625rem] box-content h-60 backdrop-blur-sm pb-5'>
									<img className='w-full max-w-60 mx-auto block rounded-[0.625rem] shadow-custom' src={item.image} alt="icon" />
								</div>
								<div className='p-3 flex flex-col items-start gap-y-4'>
									<h5 className={`text-[1.125rem] text-white font-semibold`}>{item.text}</h5>
									<div className='pt-3 mt-auto flex gap-x-6'>
										<LinkMore customStyle='link-more-rotate' text='PNG' link={''} />
									</div>
								</div>

							</div>

						</BrandCart>
					))
				}

			</div>
		</div>
	)
}

export default BannersBlock
