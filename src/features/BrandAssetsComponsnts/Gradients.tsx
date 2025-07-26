import { styles } from '@/styles/styles'
import React from 'react'
import GradientBg from '@/assets/icons/brand-assets/gradient-bg.svg'
import GradientBgBlue from '@/assets/icons/brand-assets/gradient-bg-blue.svg'
import BrandCart from './BrandCart'
import LinkMore from '@/components/ui/LinkMore'

const GradientsBlock: React.FC = () => {
	return (
		<div id='gradients'>
			<h4 data-aos='fade-right' data-aos-delay='500' className={`${styles.titleH4} sm:mb-7 md:mb-10`}>Gradients</h4>
			<div className='flex items-stretch justify-between gap-3 sm:flex-col  md:flex-col lg:flex-row'>
				<BrandCart id={1} customStyle='sm:p-4 md:p-7' wrapperStyle='flex-1'>
					<div className='flex flex-col h-full justify-between'>

						<div className='flex justify-center overflow-hidden rounded-[1.25rem] sm:mb-2 md:mb-5'>
							<img src={GradientBg} alt="icon" />
						</div>
						<div className='p-3 flex flex-col items-start gap-y-4'>
							<h5 className={`text-[1.125rem] text-white font-semibold`}>LQG gradient</h5>
							<p className='text-darkTextMuted text-sm leading-5'>LQG gradient is a combination of the brand’s palette. We use this gradient for generic related communications and interfaces.</p>
							<div className='pt-3 mt-auto flex gap-x-6'>
								<LinkMore customStyle='link-more-rotate' text='PNG' link={''} />
								<LinkMore customStyle='link-more-rotate' text='SVG' link={''} />
							</div>
						</div>

					</div>
				</BrandCart>
				<BrandCart id={2} customStyle='sm:p-4 md:p-7' wrapperStyle='flex-1'>
					<div className='flex flex-col h-full justify-between'>

						<div className='flex justify-center overflow-hidden rounded-[1.25rem] sm:mb-2 md:mb-5'>
							<img src={GradientBgBlue} alt="icon" />
						</div>
						<div className='p-3 flex flex-col items-start gap-y-4'>
							<h5 className={`text-[1.125rem] text-white font-semibold`}>Primary color</h5>
							<p className='text-darkTextMuted text-sm leading-5'>LQG Blue is our primary color. We use it as part of our primary palette, that stretches from Azure to Amber.</p>
							<div className='pt-3 mt-auto flex gap-x-6'>
								<LinkMore customStyle='link-more-rotate' text='HEX #4422EF' link={''} />
							</div>
						</div>

					</div>
				</BrandCart>
			</div>
		</div>
	)
}

export default GradientsBlock