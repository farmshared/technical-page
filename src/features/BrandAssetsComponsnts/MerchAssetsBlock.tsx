import { styles } from '@/styles/styles'
import React from 'react'
import BrandCart from './BrandCart'
import LinkMore from '@/components/ui/LinkMore'

interface IMerchAssetsData {
	id: number
	text: string
}

const MerchAssetsData: IMerchAssetsData[] = [
	{
		id: 1,
		text: `Logo`,
	},
	{
		id: 2,
		text: `Text logo`,
	},
	{
		id: 3,
		text: `Grid`,
	},
]

const MerchAssetsBlock: React.FC = () => {
	return (
		<div id='merch'>
			<h4 data-aos='fade-right' data-aos-delay='100' className={`${styles.titleH4} sm:mb-7 md:mb-10`}>Merch (assets)</h4>
			<div className='flex flex-wrap justify-between items-stretch gap-x-3 sm:gap-y-3 lg:gap-y-10'>
				{
					MerchAssetsData?.map((item) => (
						<BrandCart data-aos='fade-up' data-aos-delay={`${100 + item.id * 100}`} id={item.id} customStyle='p-7' wrapperStyle='sm:w-full lg:w-1/3-custom'>
							<div className='p-3 flex flex-col items-start gap-y-4'>
								<h5 className={`text-[1.125rem] text-white font-semibold`}>{item.text}</h5>
								<div className='pt-3 mt-auto flex gap-x-6'>
									<LinkMore customStyle='link-more-rotate' text='PNG' link={''} />
									<LinkMore customStyle='link-more-rotate' text='TIFF' link={''} />
								</div>
							</div>

						</BrandCart>
					))
				}

			</div>
		</div>
	)
}

export default MerchAssetsBlock
