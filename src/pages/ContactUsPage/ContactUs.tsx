import ContactUsSection from '@/features/ContactUsSection/ContactUsSection';
import { SubscribeUs } from '@/features/SubscribeUs/SubscribeUs';
import { styles } from '@/styles/styles';
import { Button } from '@/ui/Button';
import React from 'react'

interface BrandAssetsPageProps {
	customStyle?: string
}

export const ContactUs: React.FC<BrandAssetsPageProps> = React.memo(({ customStyle }) => (
	<div className={`${customStyle} sm:pt-28 md:pt-52`}>
		<div className={`${styles.container}`}>
			<h1 data-aos="fade-right" data-aos-delay="100" className={`${styles.titleH1} sm:mb-5 lg:mb-7`}>Contact Us</h1>
			<p data-aos="fade-right" data-aos-delay="200" className={`${styles.textSubtitle} text-gray sm:text-left lg:text-center sm:mb-10 lg:mb-28 mx-auto w-full max-w-[52.5rem]`}>At Liquidity Gate, we’re committed to open communication, prompt support, and building long-term trust with our community, partners, and clients.
			</p>
			< ContactUsSection />
			<div data-aos="zoomIn" data-aos-delay="300" className='max-w-[33rem] w-full mx-auto flex flex-col items-center'>
				<h2 className={`${styles.titleH3} sm:mb-7 lg:mb-10`}>Submit a Request</h2>
				<p className={`${styles.textSubtitle} text-gray text-center mb-14 w-full`}>If you need assistance or want to report an issue, please use our ticket system.
				</p>
				<Button customStyle={`${styles.buttonStyleBase} px-9 py-[1.125rem]`} variant='primary' link={false}>Submit a Support Ticket</Button>
			</div>
		</div>

		<SubscribeUs customStyle='sm:my-20 md:my-40' />
	</div>
)
)

ContactUs.displayName = 'ContactUs';