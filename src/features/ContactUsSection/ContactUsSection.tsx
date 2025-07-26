import React from 'react'
import ContactUsCard from './ContactUsCard'
import { styles } from '@/styles/styles'
import { Link } from 'react-router-dom'
import { Button } from '@/ui/Button'
import GoogleBusinessIcon from '@/components/svg/GoogleBusinessIcon'

const ContactUsSection: React.FC = () => {
	return (
		<div className='mx-auto max-w-6xl w-full flex flex-wrap gap-3 sm:mb-28 lg:mb-48'>
			<ContactUsCard id={1} wrapperStyle='sm:w-full md:w-1/2-custom'>
				<h4 className={`${styles.titleH4} text-white `}>General Contact Information</h4>
				<ul className='flex flex-col gap-1'>
					<li className={`${styles.baseText}`}><span className='text-darkTextMuted'>Support Email:</span> <Link className='transition-all hover:text-darkTextLink ' to={`mailto:support@lqg.io`}>support@lqg.io</Link></li>
					<li className={`${styles.baseText}`}><span className='text-darkTextMuted'>Partnership Inquiries: </span> <Link className='transition-all hover:text-darkTextLink' to={`mailto:partners@lqg.io`}>partners@lqg.io</Link></li>
					<li className={`${styles.baseText}`}><span className='text-darkTextMuted'>Legal Requests:</span> <Link className='transition-all hover:text-darkTextLink' to={`mailto:legal@lqg.io`}>legal@lqg.io</Link></li>
					<li className={`${styles.baseText}`}><span className='text-darkTextMuted'>Phone:</span> <Link className='transition-all hover:text-darkTextLink' to={`tel:+610288800123`}>+61 (02) 8880 0123</Link></li>
				</ul>
			</ContactUsCard>
			<ContactUsCard id={2} wrapperStyle='sm:w-full md:w-1/2-custom'>
				<h4 className={`${styles.titleH4} text-white `}>Find Us on Google</h4>
				<p className={`${styles.baseText} text-darkTextMuted`}>We're officially listed on Google Business.</p>
				<Button customStyle={`${styles.buttonStyleAccent} sm:text-sm 2sm:text-[1.125rem] sm:px-5 lg:px-7 py-4 !pointer-events-auto flex item-center gap-x-4 xs:max-w-max`} variant='secondary' link={true} path={'https://maps.app.goo.gl/uZ3ab6snQr5m9CVA9'} type="button"><GoogleBusinessIcon /> Google Business profile</Button>
			</ContactUsCard>
			<ContactUsCard id={3} wrapperStyle='sm:w-full md:w-1/2-custom'>
				<h4 className={`${styles.titleH4} text-white `}>Legal Address:</h4>
				<div>
					<p className={`${styles.baseText} text-darkTextMuted`}>LQG Pty Ltd, 1103/205 Pacific Hwy</p>
					<p className={`${styles.baseText} text-darkTextMuted`}>St Leonards, NSW 2065, Australia</p>
				</div>
			</ContactUsCard>
			<ContactUsCard id={4} wrapperStyle='sm:w-full md:w-1/2-custom'>
				<h4 className={`${styles.titleH4} text-white `}>Mailing Address:</h4>
				<div>
					<p className={`${styles.baseText} text-darkTextMuted`}>LQG Pty Ltd, 60 Martin Place</p>
					<p className={`${styles.baseText} text-darkTextMuted`}>Levels 3, Sydney, NSW 2000, Australia</p>
				</div>
			</ContactUsCard>
		</div>
	)
}

export default ContactUsSection
