import { useHoverGradient } from '@/hooks/useHoverGradient'
import { styles } from '@/styles/styles'
import { IBountyRewardsItem } from '@/types/types'
import React from 'react'

interface BountyCardProps {
	customStyle?: string
	rewardData: IBountyRewardsItem
}

const BountyCard: React.FC<BountyCardProps> = ({ customStyle, rewardData }) => {
	const { cardRef, isHovered, handleMouseMove, handleMouseEnter, handleMouseLeave, gradientStyle, mousePosition } =
		useHoverGradient({
			defaultGradient: 'radial-gradient(42.82% 77.08% at 50% 29.17%, #A972B3 0%, #2F0F35 27.5%, #111111 100%)',
			hoverGradient: 'radial-gradient(circle at 50% 50%, rgba(190, 85, 209, 0.8) 0%, rgba(106, 27, 121, 0.4) 30%, transparent 70%)'
		})
	return (
		<div className='relative sm:w-full md:w-1/2-custom lg:w-1/3-custom'>
			<div
				className={`absolute inset-0 rounded-2xl transition-opacity duration-300 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'
					}`}
				style={{
					background: `radial-gradient(circle at ${mousePosition.x} ${mousePosition.y}, rgba(190, 85, 209, 0.8) 0%, rgba(106, 27, 121, 0.4) 30%, transparent 70%)`
				}}
			/>
			<div ref={cardRef}
				onMouseMove={handleMouseMove}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				style={gradientStyle} data-aos={`fade-up`} data-aos-delay={`${500 + rewardData?.id * 100}`}
				className={` sm:p-7 md:p-10 rounded-2xl border-2 border-transparent transition-all duration-300 relative ${customStyle}`}>
				<h4 className={`${styles.titleH4} text-white mb-2`}>{rewardData?.title}</h4>
				<p className={`${styles.baseText} mb-5 ${(rewardData?.id === 1 || rewardData?.id === 2 || rewardData?.id === 3) ? 'text-darkAccentRed' : 'text-darkAccentGreen'}`}>{rewardData?.subtitle}</p>
				<div className='flex flex-col gap-y-3'>
					{
						rewardData?.lists?.map((item) => (
							<div key={item.id} className='flex items-baseline justify-between '>
								<p className={`${styles.baseText} text-darkTextMuted`}>{item.title}</p>
								<div className='relative -bottom-[1px] border-dashed border-b border-darkGray h-[1px] flex-1 w-full'></div>
								<p className={`${styles.baseText} text-white`}>{item.price}</p>
							</div>
						))
					}

				</div>
			</div>
		</div>

	)
}

export default BountyCard