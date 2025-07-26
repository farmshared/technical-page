import { styles } from '@/styles/styles'
import React from 'react'
import BrandCart from './BrandCart'
import LinkMore from '@/components/ui/LinkMore'

const FontsBlock: React.FC = () => {
	return (
		<div id='fonts'>
			<h4 data-aos='fade-right' data-aos-delay='100' className={`${styles.titleH4} sm:mb-7 md:mb-10`}>Fonts</h4>
			<BrandCart data-aos='fade-up' data-aos-delay={'200'} id={1} customStyle='p-7' wrapperStyle='w-full'>
				<div className='p-3 flex flex-col items-start gap-y-4'>
					<h5 className={`text-[1.125rem] text-white font-semibold`}>Jost</h5>
					<div className='pt-3 mt-auto flex gap-x-6 pt-3'>
						<LinkMore customStyle='link-more-rotate' text='Download' link={''} />
						<LinkMore customStyle='link-more-rotate' text='Google Fonts' link={''} />
					</div>
				</div>
			</BrandCart>
		</div>
	)
}

export default FontsBlock
