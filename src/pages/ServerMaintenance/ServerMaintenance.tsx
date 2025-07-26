import AnimationLogoCyclones from '@/components/AnimatedLogoCyclones'
import { styles } from '@/styles/styles'
import { Logo } from '@/ui/Logo'
import React from 'react'
import { Link } from 'react-router-dom'

const ServerMaintenance: React.FC = () => {
	return (
		<div className=''>
			<div className='sm:h-[40rem] md:h-[63rem] sm:-top-14 md:top-0 w-full absolute sm:max-w-full md:max-w-2xl lp:max-w-4xl sm:right-0 lp:right-[8%]'>
				<AnimationLogoCyclones />
			</div>
			<div className={`${styles.container} sm:pt-10 md:pt-14 sm:pb-16 md:pb-48 relative z-10`}>
				<div className='max-w-[40.875rem] w-full'>
					<Logo customStyle="sm:w-[4.5625rem] lg:w-[6.5625rem] sm:mb-80 md:mb-32" />
					<h1 className={`${styles.titleH1} sm:mb-10 md:mb-14 !text-left`}>Server <br /> maintenance</h1>
					<div className='flex flex-col sm:gap-6 md:gap-9'>
						<div className='flex flex-col gap-3'>
							<h5 className={`${styles.titleH5} text-white`}>Scheduled Maintenance Notice</h5>
							<p className={`${styles.baseText} text-lightTextMuted !text-base`}>We’re currently undergoing scheduled maintenance. <br /> To continue delivering the most secure and high-performance experience, Liquidity Gate is temporarily unavailable while we perform essential system upgrades and improvements.</p>
						</div>
						<div className='flex flex-col gap-3'>
							<h5 className={`${styles.titleH5} text-white`}>Estimated Downtime</h5>
							<p className={`${styles.baseText} text-lightTextMuted !text-base`}>We expect the platform to be back online by:
								[Insert Date & Time, incl. Timezone]</p>
						</div>
						<div className='flex flex-col gap-3'>
							<h5 className={`${styles.titleH5} text-white`}>Need Help?</h5>
							<p className={`${styles.baseText} text-lightTextMuted !text-base`}>Our support team is here to assist you: <br /> Email us at <Link className='transition-all duration-300 text-darkAccentRed underline hover:no-underline' to={`mailto:support@lqg.io`}>support@lqg.io</Link> or message us in our Telegram Support Channel
							</p>
						</div>
						<div className='flex flex-col gap-3'>
							<p className={`${styles.baseText} text-lightTextMuted !text-base`}>We appreciate your patience and understanding. Thank you for being part of Liquidity Gate.
							</p>
						</div>
						<div className='flex flex-col gap-3'>
							<p className={`${styles.baseText} text-darkAccentGreen`}>— The Liquidity Gate Team
							</p>
						</div>
					</div>
				</div>
			</div>
		</div >
	)
}

export default ServerMaintenance
