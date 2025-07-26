import React, { FC } from 'react'
import { styles } from '../../styles/styles'
import GrowWithUsCart from './GrowWithUsCart'
import { GrowWithUsData } from '@/mockData/mockData'
import GrowWithUsBigCart from './GrowWithUsBigCart'
import bgLayer from '@/assets/bg-layer.png'

interface GrowWithUsProps {
	customStyle?: string
}


export const GrowWithUs: FC<GrowWithUsProps> = React.memo(({ customStyle }) => (
	<div className={`${customStyle}`}>
		<div data-aos="fade-up" data-aos-delay="500" className='absolute sm:top-0 md:-top-80 right-0 z-0 left-0 w-full'>
			<img className='w-full' src={bgLayer} alt="bg" />
		</div>
		<div className={`${styles.container} relative z-10`}>
			<h3 className={`${styles.titleH3} mb-10`}>Reasons to choose us</h3>
			<div className='flex flex-wrap justify-between items-stretch gap-x-3 gap-y-3 sm:flex-col md:flex-row'>
				{
					GrowWithUsData?.map((item) => (
						<GrowWithUsCart key={item.id} item={item} variant='small' type='primary' />
					))
				}
				<GrowWithUsBigCart />
			</div>
		</div>
	</div>
))