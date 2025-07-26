import Sidebar from '@/components/Sidebar'
import { SubscribeUs } from '@/features/SubscribeUs/SubscribeUs'
import { sidebarPrivacyPolicyData } from '@/mockData/mockData'
import { styles } from '@/styles/styles'
import React from 'react'
import { Link } from 'react-router-dom'

export const PrivacyPolicyPage: React.FC = React.memo(() => (
	<div className='min-h-screen sm:pt-28 md:pt-52'>
		<div className={`${styles.container} relative flex justify-between items-start gap-x-20`}>
			<Sidebar sidebarData={sidebarPrivacyPolicyData} customStyle='w-max sticky top-10' />
			<div className='flex-1'>
				<h3 id='liquidity-gate-privacy-policy' className={`${styles.titleH3} mb-10`}>Liquidity Gate Privacy Policy</h3>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Effective Date: May 21, 2025</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Liquidity Gate ("LQG", "Platform", "we", "our" or "us") respects your privacy and is committed to protecting information related to our users. This Privacy Policy describes how we collect, use, transfer, and store data from users of our services, including the website https://lqg.io and its subdomains, mobile applications, and Telegram MiniApp (collectively referred to as the "Services").
				</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>We do not provide our services to citizens and residents of the United States of America (USA) and other jurisdictions subject to sanctions by the United Nations, European Union, Australia, and other regulatory bodies according to current sanction lists.</p>
				<p className={`${styles.baseText} text-white`}>BY USING OUR SERVICES, YOU CONFIRM YOUR CONSENT TO THIS PRIVACY POLICY. IF YOU DO NOT AGREE TO ITS TERMS, YOU MUST IMMEDIATELY DISCONTINUE USING THE SERVICES.</p>
				<h4 id='information-collection' className={`${styles.titleH4} text-white py-5`}>1. Information Collection</h4>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>We collect user data to operate the Services, fulfill legal obligations and improve the quality of the services provided.</p>
				<h5 className={`${styles.titleH5} text-white mb-[1.125rem] sm:pl-3 md:pl-5`}>1.1 Information You Provide</h5>
				<p className={`${styles.baseText} text-white mb-[1.125rem] sm:pl-3 md:pl-5`}>You may provide us with the following information when using the Services:</p>
				<ul className='sm:pl-3 md:pl-5 mb-5'>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>	Correspondence and content: any messages sent to us through support, feedback, inquiries. We retain this data for 12 months or for other legally established periods.</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span> Account registration: if our Services involve registration, we may collect a username, email address and password. These data are used to manage the account and provide a personalized experience.</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span> Payment information: in case of payments through our Services, payment information is processed via third-party payment systems. We may retain records of transactions but do not store bank card data.</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span> Voluntarily provided information: any data you share during communication or form submissions may be stored in accordance with this Privacy Policy.</li>
				</ul>
				<h5 className={`${styles.titleH5} text-white mb-[1.125rem] sm:pl-3 md:pl-5`}>1.2 Information Collected Automatically</h5>
				<p className={`${styles.baseText} text-white mb-[1.125rem] sm:pl-3 md:pl-5`}>We automatically collect certain data when you interact with the Services:</p>
				<ul className='sm:pl-3 md:pl-5 mb-5'>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>	Wallet address: We may collect and analyze blockchain address data that interacts with our interface. This allows detection of suspicious activity and blocking wallets linked to illegal activity.</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span> Device information: We may collect data about your device, including type, OS, browser version, screen resolution, language settings, and preferred interaction methods.</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span> Usage information: We track actions within the Services, such as pages visited, links clicked, activity time and interaction with interface features.</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span> Log files and analytics: Our servers automatically record technical data such as IP addresses, request times, referral sources and system errors. These are used to analyze performance and improve user experience.</li>
				</ul>
				<p className={`${styles.baseText} text-white mb-[1.125rem] sm:pl-3 md:pl-5`}>Additionally, we may analyze aggregated user data, such as the total number of active users, average session duration, and other metrics that help us improve the quality of the services we provide.</p>
				<h5 className={`${styles.titleH5} text-white mb-[1.125rem] sm:pl-3 md:pl-5`}>1.3 Data Sources</h5>
				<p className={`${styles.baseText} text-white mb-[1.125rem] sm:pl-3 md:pl-5`}>We may receive information:</p>
				<ul className='sm:pl-3 md:pl-5'>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>	Directly from you when using our Services or contacting our support team.</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span> From third-party services including partners, analytics platforms, payment processors and social media.</li>
					<li className={`${styles.baseText} text-white flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span> From blockchain transactions, recording publicly available data on your interactions with smart contracts.</li>
				</ul>
				<h4 id='use-of-information' className={`${styles.titleH4} text-white py-5`}>2. Use of Information</h4>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>We use collected data for the following purposes:</p>
				<ul className='pl-2.5 mb-5'>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>	Operation and management of the Services: Providing access to the platform, handling user requests, configuring functionality, and maintaining system operations.</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span> Detection and prevention of fraud and illegal activities: Analyzing data to prevent fraudulent transactions and violations of the platform’s policies.</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span> Optimization and enhancement of user experience: Analyzing user behavior to improve the interface, performance, and usability of the Services.</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span> Analytics, monitoring, and content personalization: Analyzing data to customize functionality in accordance with user preferences.</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span> Ensuring security and data protection: We use modern security technologies to protect users’ personal data from unauthorized access.</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span> Compliance with legal and regulatory requirements: We are obligated to comply with laws and regulatory standards, including anti-money laundering and financial crime prevention.</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span> Processing of payments and transactions (if applicable): Ensuring proper handling of financial operations, including service payments or wallet top-ups.</li>
				</ul>
				<p className={`${styles.baseText} text-white`}>We do not use collected data for targeted advertising or marketing without user consent.</p>
				<h4 id='sharing-and-disclosure-of-information' className={`${styles.titleH4} text-white py-5`}>3. Sharing and Disclosure of Information</h4>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>We may share information with the following categories of third parties:</p>
				<ul className='pl-2.5'>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>	Affiliated companies and partners assisting us in providing the Services.</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span> Legal consultants and auditing firms to comply with legislation.</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span> Providers of analytics, cybersecurity, blockchain monitoring and technical support.</li>
					<li className={`${styles.baseText} text-white flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span> Law enforcement and regulatory authorities when required by law.</li>
				</ul>
				<h4 id='interaction-with-third-party-services' className={`${styles.titleH4} text-white py-5`}>4. Interaction with Third-Party Services</h4>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Liquidity Gate integrates with third-party services including wallets, blockchain explorers and analytics platforms. Interaction with them is governed by their own privacy policies. We recommend reviewing these documents before using such services.</p>
				<p className={`${styles.baseText} text-white`}>When interacting with these services (e.g., leaving our website or using API connections), they may collect and process your information according to their own rules. We do not control nor are we responsible for the handling of your data by third parties.</p>
				<h4 id='cookie-usage-policy' className={`${styles.titleH4} text-white py-5`}>5. Cookie Usage Policy</h4>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>We use cookies for the operation and security of Services, as well as performance analysis. Cookies may be used for user authentication, saving preferences and optimizing user experience.</p>
				<h5 className={`${styles.titleH5} text-white mb-[1.125rem] sm:pl-3 md:pl-5`}>5.1 Types of Cookies</h5>
				<ul className='sm:pl-3 md:pl-5 mb-5'>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>	Strictly necessary cookies – required for website operation and cannot be disabled. They enable core functions such as navigation and securing account access.</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span> Analytics and performance cookies – help us understand user interaction and improve functionality.</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span> Functional cookies – remember your preferences such as interface settings and previously used wallets.</li>
				</ul>
				<h5 className={`${styles.titleH5} text-white mb-[1.125rem] sm:pl-3 md:pl-5`}>5.2 Cookie Management</h5>
				<p className={`${styles.baseText} text-white mb-[1.125rem] sm:pl-3 md:pl-5`}>You can manage cookie settings in your browser and disable their usage if necessary. However, disabling some types of cookies may affect the functionality of the Services.</p>
				<h5 className={`${styles.titleH5} text-white mb-[1.125rem] sm:pl-3 md:pl-5`}>5.3 How to Disable Cookies?</h5>
				<p className={`${styles.baseText} text-white mb-[1.125rem] sm:pl-3 md:pl-5`}>Typically, users can enable or later disable cookie use via features built into their web browser. For more info on cookies or how to control or delete them, please visit <Link className='transition-all duration-300 hover:text-darkTextLink underline' to='https://www.aboutcookies.org'>https://www.aboutcookies.org.</Link></p>
				<ul className='sm:pl-3 md:pl-5'>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Set your browser to notify you before accepting cookies.</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span> Completely disable cookies via browser settings.</li>
					<li className={`${styles.baseText} text-white flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Delete stored cookies on your device.</li>
				</ul>
				<h4 id='automated-decisions' className={`${styles.titleH4} text-white py-5`}>6. Automated Decisions</h4>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>We use automated systems to analyze user data for security, fraud prevention and improvement of user experience.</p>
				<h5 className={`${styles.titleH5} text-white mb-[1.125rem] sm:pl-3 md:pl-5`}>6.1 How Automated Solutions Work?</h5>
				<ul className='sm:pl-3 md:pl-5 mb-5'>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Transaction analysis: We may analyze blockchain transactions to detect suspicious activity.</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span> Behavior monitoring: We use algorithms to detect unusual actions that may indicate fraud.</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Content personalization: Automatic recommendations based on user preferences.</li>
				</ul>
				<h5 className={`${styles.titleH5} text-white mb-[1.125rem] sm:pl-3 md:pl-5`}>6.2 Your Rights</h5>
				<p className={`${styles.baseText} text-white mb-[1.125rem] sm:pl-3 md:pl-5`}>You have the right to:</p>
				<ul className='sm:pl-3 md:pl-5'>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Transaction analysis: We may analyze blockchain transactions to detect suspicious activity.</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span> Behavior monitoring: We use algorithms to detect unusual actions that may indicate fraud.</li>
					<li className={`${styles.baseText} text-white flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Content personalization: Automatic recommendations based on user preferences.</li>
				</ul>
				<h4 id='data-security' className={`${styles.titleH4} text-white py-5`}>7. Data Security</h4>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>We take strict measures to protect data, including:</p>
				<ul className='pl-2.5 mb-5'>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Data encryption;</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span> Access control and security monitoring;</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Use of technologies to prevent unauthorized access.</li>
				</ul>
				<p className={`${styles.baseText} text-white`}>Despite these measures, we cannot guarantee absolute data security due to the nature of internet data transmission.</p>
				<h4 id='data-storage' className={`${styles.titleH4} text-white py-5`}>8. Data Storage</h4>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>We retain collected data as long as necessary to fulfill the purposes described in this Policy. Data is deleted or anonymized when no longer needed.</p>
				<p className={`${styles.baseText} text-white`}>We also take steps to securely destroy data when its storage is no longer required.</p>
				<h4 id='international-data-transfers' className={`${styles.titleH4} text-white py-5`}>9. International Data Transfers</h4>
				<p className={`${styles.baseText} text-white`}>Your data may be transferred outside your jurisdiction, including EU countries and Australia. We apply data protection measures that meet legal requirements, including EU Standard Contractual Clauses (SCC).</p>
				<h4 id='children' className={`${styles.titleH4} text-white py-5`}>10. Children</h4>
				<p className={`${styles.baseText} text-white `}>Our Services are not intended for use by children. We do not collect or process data of users under 18 years old. If we become aware that we have received a child's personal data, it will be promptly deleted. If you are a parent or guardian and believe your child has provided us their data, please contact us at <Link className='transition-all hover:text-darkTextLink' to={`mailto:support@lqg.io`}>support@lqg.io.</Link></p>
				<h4 id='eu-and-uk-gdpr-rights' className={`${styles.titleH4} text-white py-5`}>11. EU and UK GDPR Rights</h4>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>You have the right to:</p>
				<ul className='pl-2.5 mb-5'>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>Request access to your data;</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span> Rectify or delete data;</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span> Restrict data processing;</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span> Transfer data to another provider.</li>
				</ul>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>If you wish to exercise these rights, contact us at <Link className='transition-all hover:text-darkTextLink' to={`mailto:support@lqg.io`}>support@lqg.io.</Link></p>
				<h4 id='privacy-policy-updates' className={`${styles.titleH4} text-white py-5`}>12. Privacy Policy Updates</h4>
				<p className={`${styles.baseText} text-white font-semibold`}>We may update this Policy. The new version takes effect upon publication.</p>

				<h4 id='contact-information' className={`${styles.titleH4} text-white py-5`}>13. Contact Information</h4>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>If you have any questions regarding this Privacy Policy, contact us:</p>
				<ul className='pl-2.5 mb-5'>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>Email: <Link className='transition-all hover:text-darkTextLink' to={`mailto:support@lqg.io`}>support@lqg.io</Link></li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span> Phone: <Link className='transition-all hover:text-darkTextLink' to={`tel:+61 (02) 8880 0123`}>+61 (02) 8880 0123</Link></li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span> Legal address: LQG Pty Ltd, 1103/205 Pacific Hwy, St Leonards, NSW 2065, Australia</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span> Correspondence address: LQG Pty Ltd, 60 Martin Place, Levels 3, Sydney, NSW 2000, Australia</li>
				</ul>
			</div>
		</div>

		<SubscribeUs customStyle='sm:my-20 md:my-40' />
	</div >
)
)

PrivacyPolicyPage.displayName = 'PrivacyPolicy'