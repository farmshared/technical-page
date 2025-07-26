import React, { PropsWithChildren } from 'react'
import { useHoverGradient } from '../../hooks/useHoverGradient'

interface IBrandCartProps {
	customStyle?: string
	wrapperStyle?: string
	id: number
}

const ContactUsCard: React.FC<PropsWithChildren<IBrandCartProps>> = ({ customStyle, wrapperStyle, children, id }) => {
	const { cardRef, isHovered, handleMouseMove, handleMouseEnter, handleMouseLeave, gradientStyle, mousePosition } =
		useHoverGradient({
			defaultGradient: 'radial-gradient(42.82% 77.08% at 50% 29.17%, #A972B3 0%, #2F0F35 27.5%, #111111 100%)',
			hoverGradient: 'radial-gradient(circle at 50% 50%, rgba(190, 85, 209, 0.8) 0%, rgba(106, 27, 121, 0.4) 30%, transparent 70%)'
		})

	return (
		<div data-aos='fade-up' data-aos-delay={`${500 + id * 100}`} className={`relative ${wrapperStyle}`}>
			<div
				className={`absolute inset-0 rounded-2xl transition-opacity duration-300 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'
					}`}
				style={{
					background: `radial-gradient(circle at ${mousePosition.x} ${mousePosition.y}, rgba(190, 85, 209, 0.8) 0%, rgba(106, 27, 121, 0.4) 30%, transparent 70%)`
				}}
			/>
			<div
				ref={cardRef}
				onMouseMove={handleMouseMove}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				className={`relative sm:p-7 lg:p-10 h-full flex flex-col gap-5 rounded-2xl cursor-pointer border-2 border-transparent transition-all duration-300 bg-bgDark ${customStyle}`}
				style={gradientStyle}
			>
				{children}
			</div>
		</div>
	)
}

export default ContactUsCard
