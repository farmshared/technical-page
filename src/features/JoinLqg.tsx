import { styles } from '@/styles/styles'
import { Button } from '@/ui/Button'
import React, { FC } from 'react'
import AnimatedCursorSection from '@/components/AnimatedCursorSection';

interface IJoinLqgProps {
	customStyle?: string
}

export const JoinLqg: FC<IJoinLqgProps> = React.memo(({ customStyle }) => {
	return (
		<div data-aos="zoom-in" data-aos-delay="500" className={`${customStyle}`}>
			<div className={`${styles.container} left-1/2 transform -translate-x-1/2 sm:h-[40rem] md:h-[59rem] absolute w-full -top-20`}>
				<AnimatedCursorSection />
			</div>
			<div className={`${styles.container} flex flex-col items-center justify-center gap-y-9 relative z-10 pointer-events-none`}>
				<h2 className={`${styles.titleH1}`}>Start Earning With LQG</h2>
				<p className={`${styles.textSubtitle} max-w-2xl w-full text-center text-gray`}>Manage your liquidity positions, track earnings, and explore new opportunities — all through the LQG app</p>
				<div className='flex items-center gap-x-2 flex-wrap justify-center gap-y-2'>
					<Button customStyle={`${styles.buttonStyleAccent} px-9 py-4 !pointer-events-auto`} variant='primary' link={true} path={'/'} type="button">Open dashboard</Button>
				</div>
			</div>
		</div>
	)
}
)