import Sidebar from '@/components/Sidebar'
import { SubscribeUs } from '@/features/SubscribeUs/SubscribeUs'
import { sidebarLegalData } from '@/mockData/mockData'
import { styles } from '@/styles/styles'
import React from 'react'
import { Link } from 'react-router-dom'

export const LegalPage: React.FC = React.memo(() => (
	<div className='min-h-screen sm:pt-28 md:pt-52'>
		<div className={`${styles.container} relative flex justify-between items-start gap-x-20`}>
			<Sidebar sidebarData={sidebarLegalData} customStyle='w-max sticky top-10' />
			<div className='flex-1'>
				<h3 className={`${styles.titleH3} mb-5`}>Liquidity Gate – Legal Disclosures and Policies</h3>
				<h4 id='cookie-policy' className={`${styles.titleH4} text-white py-5`}>Cookie Policy</h4>
				<p className={`${styles.baseText} text-white `}>Last updated: May 23, 2025</p>
				<p className={`${styles.baseText} text-white `}>Liquidity Gate (“we”, “our”, “the Platform”) uses cookies and similar technologies to ensure functionality, enhance user experience, and improve the security of our Services (including the website <Link className='transition-all duration-300 hover:text-darkTextLink' to={`https://lqg.io`}>https://lqg.io</Link>, mobile applications, and the Telegram MiniApp).</p>
				<div className='sm:pl-3 md:pl-5'>
					<h5 className={`${styles.titleH5} text-white py-5`}>1. What are cookies?</h5>
					<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Cookies are small text files stored in your browser when you visit our website. They allow us to:</p>
					<ul className='pl-2.5'>
						<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>Remember your actions and preferences (such as language or wallet selection);</li>
						<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>Understand how you interact with our site;</li>
						<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span> Maintain secure sessions;</li>
						<li className={`${styles.baseText} text-white flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
							Prevent fraudulent activity and analyze behavior.</li>

					</ul>
					<h5 className={`${styles.titleH5} text-white py-5`}>2. What types of cookies do we use?</h5>
					<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Essential cookies — Provide core site functionality, including authentication and protection against attacks. The website cannot function properly without them.</p>
					<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Functional cookies — Remember your preferences, such as language, display settings, and session information.</p>
					<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Analytical and performance cookies — Help us collect statistics to improve our service, such as visitor numbers and behavior patterns.</p>
					<p className={`${styles.baseText} text-white`}>Security and access control cookies — Used to detect suspicious activity and prevent unauthorized access.</p>
					<h5 className={`${styles.titleH5} text-white py-5`}>3. How do we use cookies?</h5>
					<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Based on cookie data, we:</p>
					<ul className='pl-2.5'>
						<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>Prevent fraud and unauthorized access;</li>
						<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>Optimize interface speed and reliability;</li>
						<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>Personalize the Platform’s behavior;</li>
						<li className={`${styles.baseText} text-white flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>Improve compatibility with various wallets and devices.</li>
					</ul>
					<h5 className={`${styles.titleH5} text-white py-5`}>4. Managing cookies</h5>
					<p className={`${styles.baseText} text-white mb-[1.125rem]`}>You can control cookie use through your browser settings. You can:</p>
					<ul className='pl-2.5 mb-5'>
						<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>Delete existing cookies;</li>
						<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>Block new cookies;</li>
						<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>Set alerts for each cookie;</li>
						<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>Disable third-party cookies.</li>
					</ul>
					<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Note: disabling certain cookies may limit functionality across parts of the Platform.</p>
					<p className={`${styles.baseText} text-white`}>For more, see <Link className='transition-all duration-300 hover:text-darkTextLink' to='https://www.aboutcookies.org'>https://www.aboutcookies.org/.</Link></p>
					<h4 className={`${styles.titleH4} text-white py-5`}>5. Third-party cookies</h4>
					<p className={`${styles.baseText} text-white`}>We may use third-party services (e.g., Cloudflare, analytics providers) that set their own cookies. These are governed by their own policies.</p>
					<h4 className={`${styles.titleH4} text-white py-5`}>6. Consent and notifications</h4>
					<p className={`${styles.baseText} text-white`}>On your first visit, you will see a cookie banner. By continuing to use our Services, you agree to our Cookie Policy. You can withdraw your consent at any time by changing your browser settings or deleting cookies.</p>
				</div>
				<h4 id='risk-disclosure-statement' className={`${styles.titleH4} text-white py-5`}>Risk Disclosure Statement</h4>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Last updated: May 27, 2025</p>
				<p className={`${styles.baseText} text-white`}>This Risk Disclosure Statement (“Statement”) is intended to inform users of the Liquidity Gate platform (“we”, “the Platform”, “Liquidity Gate”, “LQG”) about potential risks associated with our Services, including the website, mobile applications, Telegram MiniApp, smart contracts, and any other services we offer.</p>
				<div className='sm:pl-3 md:pl-5'>
					<h5 className={`${styles.titleH5} text-white py-5`}>1. Technology-related risks</h5>
					<ul className='pl-2.5'>
						<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>Smart contracts, blockchain, and cryptocurrencies are experimental and in early development stages. Bugs, forks, or failures may occur.</li>
						<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>Vulnerabilities in smart contract or third-party code may lead to fund loss.</li>
						<li className={`${styles.baseText} text-white flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>We do not control third-party wallets, RPC providers, explorers, or other tools impacting platform availability.</li>
					</ul>
					<h5 className={`${styles.titleH5} text-white py-5`}>2. Digital asset risks</h5>
					<ul className='pl-2.5'>
						<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>Prices of digital assets, including tokens and NFTs, are highly volatile and may fluctuate rapidly.</li>
						<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>Losses may occur from market swings, sending errors, wrong addresses, or network failures.</li>
						<li className={`${styles.baseText} text-white flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>Lack of liquidity can affect your ability to exit positions promptly.</li>
					</ul>
					<h5 className={`${styles.titleH5} text-white py-5`}>3. Decentralization and wallet custody risks</h5>
					<ul className='pl-2.5'>
						<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>Users manage their own wallets. Loss of private keys or seed phrases renders recovery impossible.</li>
						<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>Liquidity Gate has no access to or control over your funds and cannot reverse transactions.</li>
						<li className={`${styles.baseText} text-white flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>All activity on the protocol is initiated solely by the user.</li>
					</ul>
					<h5 className={`${styles.titleH5} text-white py-5`}>4. Legal and regulatory risks</h5>
					<ul className='pl-2.5'>
						<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>Digital asset regulations may change, affecting access or legality of Services in your jurisdiction.</li>
						<li className={`${styles.baseText} text-white flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>Users are responsible for complying with local laws including tax, reporting, and sanctions.</li>
					</ul>
					<h5 className={`${styles.titleH5} text-white py-5`}>5. Risks from third-party services</h5>
					<ul className='pl-2.5'>
						<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>Interactions with wallets, DEXs, oracles, and other services are at your own risk.</li>
						<li className={`${styles.baseText} text-white flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>We are not liable for technical failures or misconduct by external providers.</li>
					</ul>
					<h5 className={`${styles.titleH5} text-white py-5`}>6. Risk acceptance</h5>
					<p className={`${styles.baseText} text-white mb-[1.125rem]`}>You acknowledge and accept that:</p>
					<ul className='pl-2.5'>
						<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>Using the Platform entails technical, legal, and financial risks;</li>
						<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>Liquidity Gate and its affiliates offer no guarantees of profit or asset safety;</li>
						<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>Participation is voluntary, informed, and without warranties.</li>
					</ul>
					<p className={`${styles.baseText} text-white`}>If you disagree with any risk described here, you must cease using our Services.</p>
				</div>
				<h4 id='open-source-licensing-information' className={`${styles.titleH4} text-white py-5`}>Open Source Licensing Information</h4>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Last updated: May 7, 2025</p>
				<p className={`${styles.baseText} text-white`}>Liquidity Gate utilizes a number of third-party libraries and frameworks licensed under various open-source licenses. This document is intended to meet legal compliance requirements and inform users and developers about the technologies that support our platform.</p>
				<div className='sm:pl-3 md:pl-5'>
					<h5 className={`${styles.titleH5} text-white py-5`}>1. Utilized Open-Source Libraries</h5>
					<ul className=''>
						<li className={`${styles.baseText} text-white mb-[1.125rem] sm:pl-3 md:pl-5 gap-2.5`}> <span className='top-3 -left-3 relative size-0.5 rounded-full bg-white block'></span>Backend (Node.js / NestJS / Solana / Ethereum)
							<ul className='pl-2.5'>
								<li className={`${styles.baseText} text-white my-[1.125rem] flex gap-2.5`}> <span className='top-3 relative size-0.5 rounded-full bg-white block'></span>axios — MIT License</li>
								<li className={`${styles.baseText} text-white my-[1.125rem] flex gap-2.5`}> <span className='top-3 relative size-0.5 rounded-full bg-white block'></span>bcrypt — ISC License</li>
								<li className={`${styles.baseText} text-white my-[1.125rem] flex gap-2.5`}> <span className='top-3 relative size-0.5 rounded-full bg-white block'></span>bignumber.js — MIT License</li>
								<li className={`${styles.baseText} text-white my-[1.125rem] flex gap-2.5`}> <span className='top-3 relative size-0.5 rounded-full bg-white block'></span>bs58 — MIT License</li>
								<li className={`${styles.baseText} text-white my-[1.125rem] flex gap-2.5`}> <span className='top-3 relative size-0.5 rounded-full bg-white block'></span>cheerio — MIT License</li>
								<li className={`${styles.baseText} text-white my-[1.125rem] flex gap-2.5`}> <span className='top-3 relative size-0.5 rounded-full bg-white block'></span>class-transformer, class-validator — MIT License</li>
								<li className={`${styles.baseText} text-white my-[1.125rem] flex gap-2.5`}> <span className='top-3 relative size-0.5 rounded-full bg-white block'></span>cookie-parser — MIT License</li>
								<li className={`${styles.baseText} text-white my-[1.125rem] flex gap-2.5`}> <span className='top-3 relative size-0.5 rounded-full bg-white block'></span>keyv, @keyv/redis — MIT License</li>
								<li className={`${styles.baseText} text-white my-[1.125rem] flex gap-2.5`}> <span className='top-3 relative size-0.5 rounded-full bg-white block'></span>nodemailer — MIT License</li>
								<li className={`${styles.baseText} text-white my-[1.125rem] flex gap-2.5`}> <span className='top-3 relative size-0.5 rounded-full bg-white block'></span>pg — MIT License</li>
								<li className={`${styles.baseText} text-white my-[1.125rem] flex gap-2.5`}> <span className='top-3 relative size-0.5 rounded-full bg-white block'></span>reflect-metadata — MIT License</li>
								<li className={`${styles.baseText} text-white my-[1.125rem] flex gap-2.5`}> <span className='top-3 relative size-0.5 rounded-full bg-white block'></span>rxjs — Apache 2.0 License</li>
								<li className={`${styles.baseText} text-white my-[1.125rem] flex gap-2.5`}> <span className='top-3 relative size-0.5 rounded-full bg-white block'></span>tweetnacl — Unlicense</li>
								<li className={`${styles.baseText} text-white my-[1.125rem] flex gap-2.5`}> <span className='top-3 relative size-0.5 rounded-full bg-white block'></span>web3 — MIT License</li>
								<li className={`${styles.baseText} text-white my-[1.125rem] flex gap-2.5`}> <span className='top-3 relative size-0.5 rounded-full bg-white block'></span>@solana/web3.js — MIT License</li>
								<li className={`${styles.baseText} text-white my-[1.125rem] flex gap-2.5`}> <span className='top-3 relative size-0.5 rounded-full bg-white block'></span>tronweb — MIT License</li>
							</ul>
						</li>
						<li className={`${styles.baseText} text-white mb-[1.125rem] sm:pl-3 md:pl-5 gap-2.5`}> <span className='top-3 -left-3 relative size-0.5 rounded-full bg-white block'></span>Frontend (React / Tailwind / Radix UI)
							<ul className='pl-2.5'>
								<li className={`${styles.baseText} text-white my-[1.125rem] flex gap-2.5`}> <span className='top-3 relative size-0.5 rounded-full bg-white block'></span>react, react-dom — MIT License</li>
								<li className={`${styles.baseText} text-white my-[1.125rem] flex gap-2.5`}> <span className='top-3 relative size-0.5 rounded-full bg-white block'></span>@radix-ui/* — MIT License</li>
								<li className={`${styles.baseText} text-white my-[1.125rem] flex gap-2.5`}> <span className='top-3 relative size-0.5 rounded-full bg-white block'></span>@tanstack/react-query — MIT License</li>
								<li className={`${styles.baseText} text-white my-[1.125rem] flex gap-2.5`}> <span className='top-3 relative size-0.5 rounded-full bg-white block'></span>axios — MIT License</li>
								<li className={`${styles.baseText} text-white my-[1.125rem] flex gap-2.5`}> <span className='top-3 relative size-0.5 rounded-full bg-white block'></span>framer-motion — MIT License</li>
								<li className={`${styles.baseText} text-white my-[1.125rem] flex gap-2.5`}> <span className='top-3 relative size-0.5 rounded-full bg-white block'></span>lucide-react — MIT License</li>
								<li className={`${styles.baseText} text-white my-[1.125rem] flex gap-2.5`}> <span className='top-3 relative size-0.5 rounded-full bg-white block'></span>recharts — MIT License</li>
							</ul>
						</li>
						<li className={`${styles.baseText} text-white sm:pl-3 md:pl-5 gap-2.5`}> <span className='top-3 -left-3 relative size-0.5 rounded-full bg-white block'></span>DevOps / Infrastructure
							<ul className='pl-2.5'>
								<li className={`${styles.baseText} text-white my-[1.125rem] flex gap-2.5`}> <span className='top-3 relative size-0.5 rounded-full bg-white block'></span>Docker — Apache 2.0 License</li>
								<li className={`${styles.baseText} text-white my-[1.125rem] flex gap-2.5`}> <span className='top-3 relative size-0.5 rounded-full bg-white block'></span>Kubernetes (kubectl) — Apache 2.0 License</li>
								<li className={`${styles.baseText} text-white my-[1.125rem] flex gap-2.5`}> <span className='top-3 relative size-0.5 rounded-full bg-white block'></span>Vault (HashiCorp) — Mozilla Public License 2.0 (MPL-2.0)</li>
								<li className={`${styles.baseText} text-white flex gap-2.5`}> <span className='top-3 relative size-0.5 rounded-full bg-white block'></span>Terraform — Mozilla Public License 2.0 (MPL-2.0)</li>
							</ul>
						</li>
					</ul>
					<h5 className={`${styles.titleH5} text-white py-5`}>2. General Provisions</h5>
					<ul className='pl-2.5'>
						<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-3 relative size-0.5 rounded-full bg-white block'></span>All mentioned libraries are distributed in accordance with their respective licenses.</li>
						<li className={`${styles.baseText} text-white my-[1.125rem] flex gap-2.5`}> <span className='top-3 relative size-0.5 rounded-full bg-white block'></span>If any open-source component requires attribution, such notice is provided within the user interface or accompanying documentation.</li>
						<li className={`${styles.baseText} text-white mt-[1.125rem] flex gap-2.5`}> <span className='top-3 relative size-0.5 rounded-full bg-white block'></span>Users may review each license’s terms in the official repositories of the respective projects.</li>
					</ul>
					<h5 className={`${styles.titleH5} text-white py-5`}>3. Disclaimer of Rights</h5>
					<p className={`${styles.baseText} text-white `}>Use of open-source components does not imply the transfer of ownership rights. Liquidity Gate adheres to all applicable open-source licenses and does not claim ownership over any third-party libraries included in its software.</p>
				</div>
				<h4 id='jurisdiction-and-governing-law-statement' className={`${styles.titleH4} text-white py-5`}>Jurisdiction & Governing Law Statement</h4>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Last updated: May 23, 2025</p>
				<p className={`${styles.baseText} text-white `}>This statement outlines the governing law and legal jurisdiction concerning the use of the Liquidity Gate Platform (hereinafter referred to as “the Platform”, “Liquidity Gate”, or “LQG”) and all associated Services.</p>
				<div className='sm:pl-3 md:pl-5'>
					<h5 className={`${styles.titleH5} text-white py-5`}>1. Governing Law</h5>
					<p className={`${styles.baseText} text-white`}>All agreements, documents, policies, and legal relationships between you (the “User”) and Liquidity Gate shall be governed exclusively by the laws of Australia, regardless of any conflict of law principles.</p>
					<h5 className={`${styles.titleH5} text-white py-5`}>2. Jurisdiction</h5>
					<p className={`${styles.baseText} text-white mb-[1.125rem]`}>The User agrees that:</p>
					<ul className='pl-2.5'>
						<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-3 relative size-0.5 rounded-full bg-white block'></span>Any disputes arising in connection with the use of the Platform or any related terms shall be resolved in the courts located in Sydney, New South Wales, Australia.</li>
						<li className={`${styles.baseText} text-white my-[1.125rem] flex gap-2.5`}> <span className='top-3 relative size-0.5 rounded-full bg-white block'></span>In the event of a mandatory arbitration clause (as outlined in the Terms of Use), the dispute shall be submitted to the Australian Centre for International Commercial Arbitration (ACICA) in accordance with its rules.</li>
						<li className={`${styles.baseText} text-white mt-[1.125rem] flex gap-2.5`}> <span className='top-3 relative size-0.5 rounded-full bg-white block'></span>The language of any arbitration or judicial proceedings shall be English.</li>
					</ul>
					<h5 className={`${styles.titleH5} text-white py-5`}>3. Exceptions and Special Provisions</h5>
					<ul className='pl-2.5'>
						<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-3 relative size-0.5 rounded-full bg-white block'></span>If a User resides in a jurisdiction where the use of blockchain, smart contracts, or digital assets is restricted or prohibited, they must cease using the Platform.</li>
						<li className={`${styles.baseText} text-white flex gap-2.5`}> <span className='top-3 relative size-0.5 rounded-full bg-white block'></span>Liquidity Gate is not responsible for any user’s failure to comply with their local laws.</li>
					</ul>
					<h5 className={`${styles.titleH5} text-white py-5`}>4. Dispute Resolution</h5>
					<p className={`${styles.baseText} text-white`}>Before filing a claim or initiating legal action, the parties agree to make reasonable efforts to resolve the dispute through negotiations.</p>
				</div>
				<h4 id='financial-services-guide' className={`${styles.titleH4} text-white py-5`}>Financial Services Guide</h4>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Last updated: January 11, 2025</p>
				<div className='sm:pl-3 md:pl-5'>
					<ul className='pl-2.5'>
						<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>LQG Pty Ltd trading as Liquidity Gate (LQG)</li>
						<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>ACN: 682756850</li>
						<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>AFSL: 397634</li>
					</ul>
					<p className={`${styles.baseText} text-white mb-[1.125rem]`}>LQG Pty Ltd (ACN 682756850), trading as Liquidity Gate, is the provider of the products and services described in this communication. Engaging with Liquidity Gate's offerings—including digital assets, decentralized finance (DeFi) protocols, and liquidity aggregation tools—involves the potential for profit, but also carries significant risk of loss, which may exceed your initial investment. These products are not suitable for all investors. You should carefully read our Financial Services Guide (FSG), consider your personal financial circumstances, investment objectives, and risk tolerance, and seek independent financial advice if necessary before using our services.
					</p>
					<h5 className={`${styles.titleH5} text-white py-5`}>1. On Whose Behalf Do We Act?</h5>
					<p className={`${styles.baseText} text-white mb-[1.125rem]`}>This Financial Services Guide (FSG) is issued to you by LQG Pty Ltd (referredto as Liquidity Gate, we, or us).</p>
					<p className={`${styles.baseText} text-white`}>Liquidity Gate is the provider and operator of the products and services described in this
						document. We act on our own behalf when delivering financial services to you. Liquidity
						Gate does not act on your behalf, and we do not provide personal financial advice.
					</p>
					<h5 className={`${styles.titleH5} text-white py-5`}>2. What Is the Purpose of This Financial Services Guide?</h5>
					<p className={`${styles.baseText} text-white mb-[1.125rem]`}>The purpose of this FSG is to provide clients and prospective users of Liquidity Gate with key information about the financial services and products we offer. It is designed to help you make an informed decision about whether to use our services.
					</p>
					<p className={`${styles.baseText} text-white`}>If you have received this FSG electronically, we recommend downloading and saving
						a copy for your records.
					</p>
					<h5 className={`${styles.titleH5} text-white py-5`}>3. What This FSG Contains?</h5>
					<p className={`${styles.baseText} text-white mb-[1.125rem]`}>This Financial Services Guide includes information about:</p>
					<ul className='pl-2.5'>
						<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>Who we are and how to contact us.</li>
						<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>Our dispute resolution procedures — both internal and external — and how you can access them.</li>
						<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>How we and related parties are compensated.</li>
						<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>The services and types of digital products we are authorized to offer.</li>
					</ul>
					<h5 className={`${styles.titleH5} text-white py-5`}>4. Other Documents You May Receive</h5>
					<h6 className='mb-[1.125rem]'>Product Disclosure Documents</h6>
					<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Before we offer or arrange access to any financial product, we may provide you with a Product Disclosure Statement (PDS), where applicable. A PDS outlines important features, risks, fees, and other relevant information to assist you in making an informed decision about using a product.</p>
					<h6 className='mb-[1.125rem]'>Transaction Documents</h6>
					<p className='${styles.baseText} text-white mb-[1.125rem]'>Your use of Liquidity Gate’s products and services is governed by our Terms & Conditions and any applicable legal or technical agreements. These are available via our website or may be provided to you directly prior to entering into a transaction.</p>
					<h6 className='mb-[1.125rem]'>5. What Financial Services Are We Authorized to Provide?</h6>
					<p className={`${styles.baseText} text-white mb-[1.125rem]`}>LQG Pty Ltd is an Australian-registered company authorized to provide services
						related to decentralized financial infrastructure and digital asset operations, including but not limited to:</p>
					<ul className='pl-2.5'>
						<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>General advice on blockchain-based financial tools such as DeFi protocols, liquidity platforms, and non-custodial trading mechanisms.</li>
						<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>Access to and interaction with decentralized markets and multi-chain liquidity aggregators.</li>
						<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>Execution and facilitation of token swaps, bridging, and liquidity routing across supported networks.</li>
						<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>Market-making activities on decentralized platforms and liquidity pools, where Liquidity Gate may act as a protocol-level liquidity provider and set prices for supported digital assets.</li>
					</ul>
					<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Gate may act as a protocol-level liquidity provider and set prices for supported digital assets.</p>
					<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Please note that Liquidity Gate does not provide personal financial, legal, or tax advice. You should assess the suitability of our services based on your own financial goals and seek independent advice if necessary.</p>
					<p className={`${styles.baseText} text-white`}>Additionally, Liquidity Gate may operate liquidity positions in DeFi protocols or decentralized exchanges (DEXs) in a manner consistent with automated market-making (AMM) mechanisms. In doing so, we may quote buy/sell prices and assume temporary risk exposure, independent of centralized order book systems.</p>
					<h5 className={`${styles.titleH5} text-white py-5`}>6. Who We Are and How You Can Contact Us</h5>
					<p className={`${styles.baseText} text-white mb-[1.125rem]`}>LQG Pty Ltd</p>
					<p className={`${styles.baseText} text-white mb-[1.125rem]`}>ACN: 682756850</p>
					<p className={`${styles.baseText} text-white mb-[1.125rem]`}>AFSL: 397634</p>
					<ul className='pl-2.5'>
						<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>Email: <Link className='transition-all duration-300 hover:text-darkTextLink' to={`mailto:support@lqg.io`}>support@lqg.io</Link></li>
						<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>Phone: <Link className='transition-all duration-300 hover:text-darkTextLink' to={`tel:+61 (02) 8880 0123`}>+61 (02) 8880 0123</Link></li>
						<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>Legal Address: LQG Pty Ltd, 1103/205 Pacific Hwy, St Leonards, NSW 2065, Australia</li>
						<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>Correspondence Address: LQG Pty Ltd, 60 Martin Place, Levels 3, Sydney, NSW 2000, Australia</li>
					</ul>
					<p className={`${styles.baseText} text-white`}>If you have any questions about this FSG or our services, please don’t hesitate to contact our support team.</p>
					<h5 className={`${styles.titleH5} text-white py-5`}>7. Our Relationship with You</h5>
					<p className={`${styles.baseText} text-white mb-[1.125rem]`}>To use our services, you may be required to pay various fees, spreads, and charges Unless otherwise stated, all costs are denominated in the currency of your Liquidity Gate account.</p>
					<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Liquidity Gate may derive financial benefit by engaging in transactions with other parties at rates different from those offered to you.</p>
					<h5 className={`${styles.titleH5} text-white py-5`}>8. Types of Fees and Their Description</h5>
					<h6 className='mb-[1.125rem]'>Spread (Bid/Ask Difference):</h6>
					<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Transactions involving digital assets, token pairs, or derivatives processed through the Liquidity Gate platform may include costs related to the spread, which is the difference between the bid and ask prices.</p>
					<ul className='pl-2.5'>
						<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>The bid price is the rate at which we are willing to buy an asset from you.</li>
						<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>The ask price is the rate at which we are willing to sell the asset to you.</li>
						<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>The spread is built into the quoted price — you do not pay it as a separate fee.</li>
					</ul>
					<h6 className='mb-[1.125rem]'>Example of a Spread:</h6>
					<p className={`${styles.baseText} text-white mb-[1.125rem]`}>If our platform quotes 1.3157 (bid) / 1.31591 (ask) for a token pair, the spread per unit would be 0.00021. This may vary depending on market volatility, asset liquidity, and execution strategy.</p>
					<h5 className={`${styles.titleH5} text-white py-5`}>How You Can Instruct Us & Your Responsibilities</h5>
					<p className={`${styles.baseText} text-white mb-[1.125rem]`}>You may provide us with instructions using one of the following methods:</p>
					<ul className='pl-2.5'>
						<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>Through our online platform or Telegram MiniApp</li>
						<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>By phone (if previously agreed)</li>
						<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>In person at our registered office (by appointment only)</li>
					</ul>
					<p className={`${styles.baseText} text-white mb-[1.125rem]`}>It is your responsibility to carefully review all reports and statements we send you. If you identify any discrepancies, you must notify us immediately.</p>
					<p className={`${styles.baseText} text-white mb-[1.125rem]`}>To update your account information or discuss your activity, contact us at: <Link className='transition-all hover:text-darkTextLink' to={`mailto:support@lqg.io`}>support@lqg.io</Link></p>
					<h5 className={`${styles.titleH5} text-white py-5`}>How We Are Remunerated</h5>
					<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Liquidity Gate may receive compensation in several forms:</p>
					<ul className='pl-2.5'>
						<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>Spread income — the difference between the price at which we buy and sell assets</li>
						<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>Transaction fees — where applicable, for routing or liquidity sourcing</li>
						<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>Protocol incentives — for providing volume or liquidity through third-party aggregators</li>
					</ul>
					<p className={`${styles.baseText} text-white mb-[1.125rem]`}>The spread or fee applied may depend on:</p>
					<ul className='pl-2.5'>
						<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>The size of your transaction</li>
						<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>The liquidity and volatility of the asset</li>
						<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>Current market conditions</li>
					</ul>
					<p className={`${styles.baseText} text-white`}>	Spreads tend to be wider during volatile market periods or on low-volume transactions. All pricing on the platform is notional — we typically do not deliver the physical asset unless e plicitly stated.</p>
					<h5 className={`${styles.titleH5} text-white py-5`}>External Fees, Taxes, and Charges</h5>
					<p className={`${styles.baseText} text-white mb-[1.125rem]`}>You are responsible for any applicable taxes, duties, or government charges associated with your use of Liquidity Gate’s services. These may include, but are not limited to:</p>
					<ul className='pl-2.5'>
						<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>Value-added tax (VAT) or local equivalents;</li>
						<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>Transaction duties or levies;</li>
						<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>Stamp duties where applicable.</li>
					</ul>
					<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Additionally, any bank charges incurred by Liquidity Gate in processing your deposits or other payments will be passed on to your account.</p>
					<p className={`${styles.baseText} text-white`}>From time to time, Liquidity Gate may impose other fees unrelated to direct trading activity — such as fees for accessing third-party data feeds, analytics services, or premium features. If applicable, these charges will be disclosed and itemized in your user account or documentation.</p>
					<h5 className={`${styles.titleH5} text-white py-5`}>Interest and Client Funds</h5>
					<p className={`${styles.baseText} text-white`}>Liquidity Gate maintains client funds in segregated accounts, in accordance with relevant financial regulations. We may retain any interest earned on positive balances held in such accounts. Interest is calculated daily and is not distributed to clients unless explicitly stated otherwise.</p>
					<h5 className={`${styles.titleH5} text-white py-5`}>Disclosure of Conflicts of Interest</h5>
					<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Liquidity Gate may engage in commercial relationships with liquidity providers, brokers, data vendors, or other partners, which could result in compensation — such as commissions, rebates, or non-cash benefits. These arrangements are managed through internal policies to ensure transparency and to mitigate any potential conflicts of interest.</p>
					<p className={`${styles.baseText} text-white`}>We are committed to acting honestly and fairly and will disclose any material conflicts when relevant. If specific fees or benefits from third-party arrangements are not detailed in this guide, we will make that information available to you upon request.</p>
					<h5 className={`${styles.titleH5} text-white py-5`}>Dispute Resolution</h5>
					<p className={`${styles.baseText} text-white mb-[1.125rem]`}>At Liquidity Gate, we are committed to providing fair, transparent, and efficient resolution of all client concerns.</p>
					<p className={`${styles.baseText} text-white mb-[1.125rem]`}>If you have a complaint, please follow these steps:</p>
					<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Contact our Support Team at <Link className='transition-all hover:text-darkTextLink' to={`mailto:support@lqg.io`}>support@lqg.io</Link> or by phone at <Link className='transition-all hover:text-darkTextLink' to={`tel:+61 (02) 8880 0123`}>+61 (02) 8880 0123</Link>. Most concerns can be quickly resolved at this stage.</p>
					<p className={`${styles.baseText} text-white mb-[1.125rem]`}>If your issue is not resolved satisfactorily, you may submit a formal written complaint. We will acknowledge receipt within 5 business days and aim to resolve it within 45 days, unless an extension is necessary due to the complexity of the case.</p>
					<p className={`${styles.baseText} text-white mb-[1.125rem]`}>If you are not satisfied with the outcome of our internal complaint handling process, you may escalate the issue to an external dispute resolution scheme. Liquidity Gate will provide the relevant contact details upon request, based on your jurisdiction.</p>
					<p className={`${styles.baseText} text-white`}>We believe in open communication and will always strive to handle your concerns fairly and professionally.</p>
					<h5 className={`${styles.titleH5} text-white py-5`}>Staff Remuneration</h5>
					<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Liquidity Gate employees and authorized representatives may be compensated through a
						combination of:</p>
					<ul className='pl-2.5'>
						<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>Fixed base salary;</li>
						<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>Performance-based incentives;</li>
						<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>Commission-sharing arrangements based on volume, tenure, qualifications, or other merit;</li>
						<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>Based criteria;</li>
					</ul>
					<p className={`${styles.baseText} text-white`}>Staff may also benefit from internal incentive programs, training opportunities, or non-monetary rewards. All forms of remuneration comply with applicable laws and industry standards.</p>
					<h5 className={`${styles.titleH5} text-white py-5`}>Data Retention</h5>
					<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Liquidity Gate has implemented and maintains robust security measures to protect all personal data it collects from misuse, loss, unauthorized access, alteration, or disclosure.</p>
					<p className={`${styles.baseText} text-white`}>If the information is no longer required for the purposes outlined above, it will be securely destroyed or anonymized.</p>
					<h5 className={`${styles.titleH5} text-white py-5`}>Privacy Policy</h5>
					<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Liquidity Gate adheres to a comprehensive Privacy Policy, which governs:</p>
					<ul className='pl-2.5'>
						<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>Our obligations under applicable data protection laws;</li>
						<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>The process for submitting and resolving complaints related to breaches of privacy
							principles;</li>
						<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>The potential disclosure of information to third parties located outside of Australia (where applicable);</li>
						<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>The storage of information in cloud or other electronic systems that may be accessed from various countries via the internet.</li>
					</ul>
					<p className={`${styles.baseText} text-white`}>You can view the full Privacy Policy on our official website: <Link className='transition-all duration-300 hover:text-darkTextLink' to={`https://lqg.io`}>www.lqg.io</Link></p>
				</div>
			</div>
		</div>
		<SubscribeUs customStyle='sm:my-20 md:my-40' />
	</div >
)
)

LegalPage.displayName = 'LegalPage'