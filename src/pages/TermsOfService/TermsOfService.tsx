import Sidebar from '@/components/Sidebar'
import { SubscribeUs } from '@/features/SubscribeUs/SubscribeUs'
import { sidebarTermsOfServiceData } from '@/mockData/mockData'
import { styles } from '@/styles/styles'
import React from 'react'
import { Link } from 'react-router-dom'

export const TermsOfService: React.FC = React.memo(() => (
	<div className='min-h-screen sm:pt-28 md:pt-52'>
		<div className={`${styles.container} relative flex justify-between items-start gap-x-20`}>
			<Sidebar sidebarData={sidebarTermsOfServiceData} customStyle='w-max sticky top-10 !gap-y-0' />
			<div className='flex-1'>
				<h3 className={`${styles.titleH3}`}>Liquidity Gate Terms of Service</h3>
				<h4 id='general-provisions' className={`${styles.titleH4} text-white py-10 pb-5`}>1. General Provisions</h4>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Welcome to Liquidity Gate!</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Liquidity Gate provides information and resources about the decentralized LQG liquidity protocol, which is non-custodial in nature. This protocol consists of self-executing open-source smart contracts deployed on various public blockchains. The interface hosted on IPFS is an independent Platform through which users can interact with the LQG protocol using their self-custody wallets.</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>LIQUIDITY GATE IS NOT A FINANCIAL INSTITUTION, BROKER, EXCHANGE, CUSTODIAN, INVESTMENT ADVISOR, OR FIDUCIARY. THE PLATFORM DOES NOT PROVIDE FINANCIAL, INVESTMENT, OR LEGAL ADVICE.</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>LQG Pty Ltd, a company registered in Australia under ACN: 682 756 850, is the legal entity responsible for operating the Platform.</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Liquidity Gate reserves the right to amend these Terms. In the event of material changes, users will be notified 14 (fourteen) days prior to the update becoming effective. Continued use of the service after changes are made constitutes acceptance of the revised Terms.</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Hereinafter, Liquidity Gate is referred to as the “Platform,” “LQG,” “LQG Pty Ltd,” “we,” “our,” or “us.”</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>These Terms of Use (“Terms”) set forth the legal obligations between you (“User,” “you,” “your”) and LQG Pty Ltd (“Liquidity Gate”). These Terms govern your access to and use of the services (“Services”), including the website https://lqg.io (“Website”), mobile applications available in the official Google Play and Apple App Store repositories (“Mobile Applications”), and the Telegram MiniApp.</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>These Terms may be updated. They describe your rights and responsibilities when using our Services and govern interaction with the Liquidity Gate Platform and its affiliates.</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Please note that these Terms include provisions regarding indemnification, applicable law, dispute resolution, assumption of risk, disclaimers, and limitation of liability. These sections may affect your legal rights, including your right to file legal claims against us.</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Before using the Services, carefully read these Terms, the Privacy Policy, and any other governing documents referenced herein. If necessary, we recommend consulting with an independent financial or legal advisor.</p>
				<p className={`${styles.baseText} text-white`}>By using the Services, you confirm that you have fully read, understood, and agree to these Terms, our Privacy Policy, and other referenced documents. If you do not agree with any provision of the Terms, you must immediately discontinue use of our Services.</p>
				<h4 id='legally-binding-agreement' className={`${styles.titleH4} text-white py-5`}>2. Legally Binding Agreement</h4>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>By using our Services, you enter into a legally binding Agreement that includes these Terms, the Privacy Policy, and other applicable policies. Our Services include the websites <Link className='transition-all hover:text-darkTextLink' to='https://lqg.io'>https://lqg.io</Link>, <Link className='transition-all hover:text-darkTextLink' to='https://app.lqg.io'>https://app.lqg.io</Link> (including any subdomains), mobile applications available in the official repositories of Google Play and Apple App Store, the Telegram MiniApp, and other services subject to these Terms.</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>The Services also include any data and materials (text, images, audio and video content, links, and other resources) stored or displayed on these Platforms.</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>In the event of any conflict between these Terms and any supplemental terms, these Terms shall prevail unless explicitly stated otherwise.</p>
				<p className={`${styles.baseText} text-white`}>If you do not agree to these Terms, you are not permitted to use the Services, visit the Website, or interact with Liquidity Gate.</p>
				<h4 id='additional-information' className={`${styles.titleH4} text-white py-5`}>3. Additional Information</h4>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>To prevent fraud, download Liquidity Gate applications only from official repositories such as Google Play and the Apple App Store. If you have doubts regarding the authenticity of an application or other services, please contact us through official support channels listed on our website or via email at <Link className='transition-all hover:text-darkTextLink' to={'mailto:wecare@lqg.io'}>wecare@lqg.io.</Link></p>
				<p className={`${styles.baseText} text-white`}>The Website contains general information about the services provided. We recommend reviewing all sections of the site before using the Platform.</p>
				<h4 id='definitions' className={`${styles.titleH4} text-white py-5`}>4. Definitions</h4>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>In addition to the terms defined in other sections of these Terms, capitalized terms used herein shall have the following meanings, in both singular and plural form:</p>
				<ul className='pl-2.5'>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>"User" — a natural or legal person using the Services.</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span> "Services" — the features and functions provided through the Website, Telegram MiniApp, and the official Liquidity Gate applications available in the Google Play and Apple App Store repositories.</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span> "Platform" — the hardware and software infrastructure, including the Website, applications, Telegram MiniApp, and other digital tools intended for providing Liquidity Gate’s Services.</li>
					<li className={`${styles.baseText} text-white flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						"Digital Wallet" — a software application or service that enables users to manage their cryptocurrencies, interact with decentralized applications, and securely store their cryptographic keys.</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						"Blockchain" — a distributed database structured as a chain of blocks, each containing records of transactions. Blocks are linked together via cryptographic hashes, ensuring data security and immutability.
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						"Smart Contract" — self-executing code deployed on a blockchain that automatically enforces contract terms without intermediaries.
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						"Liquidity Pools" — decentralized pools of smart contracts into which users deposit assets to enable the exchange of cryptocurrencies without intermediaries.
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						"Market Maker" — a participant who provides liquidity to crypto markets by quoting buy and sell prices, helping to stabilize the market.
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						"Digital Assets" — assets represented in the form of cryptocurrencies, tokens (including NFTs), and other blockchain records with economic or functional value.
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						"Native Token" — a digital asset created and operating within a specific blockchain network that supports its functionality and economic structure.
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						"Meme Token" — a crypto asset created for entertainment purposes and inspired by internet memes. It lacks fundamental economic value but may gain attention through social media popularity.
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						"Website" — the web resource available at <Link className='transition-all hover:text-darkTextLink' to={'https://lqg.io'}>https://lqg.io.</Link>
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						"Applications" — official Liquidity Gate software applications used to access the Platform’s Services. This includes mobile apps listed exclusively in the Google Play and Apple App Store repositories, as well as the Telegram MiniApp. The Platform is not responsible for the security or functionality of third-party applications that are not developed or authorized by Liquidity Gate.
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						"Content" — information, text materials, images, graphics, videos, audio, links, software, digital assets, and any other data available on the Website, official applications, Telegram MiniApp, or other Platform services. Content may include materials created by the Platform, its affiliates, or third parties.
					</li>
					<li className={`${styles.baseText} text-white flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						"Referral Program" — a marketing program by Liquidity Gate designed to attract new users through referrals. Rewards are distributed automatically via smart contracts to ensure transparency and independence. Fraudulent schemes, fake accounts, and artificial user activity to earn bonuses are prohibited.
					</li>
				</ul>
				<h4 id='use-of-services' className={`${styles.titleH4} text-white py-5`}>5. Use of Services</h4>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>To use the Services, you must have the legal capacity to enter into an Agreement. This means that you must be a person capable of acting under applicable law and must be at least 18 years old or the legal age of majority in your jurisdiction.</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>THE LIQUIDITY GATE PLATFORM IS NOT AVAILABLE TO U.S. CITIZENS OR RESIDENTS. WE ALSO DO NOT PROVIDE ACCESS TO USERS FROM COUNTRIES SUBJECT TO SANCTIONS BY THE UNITED NATIONS, THE EUROPEAN UNION, AUSTRALIA, OR OTHER INTERNATIONAL REGULATORY AUTHORITIES.</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>By using the Services, you represent and warrant that:</p>
				<ul className='pl-2.5 mb-5'>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>You are not a citizen or resident of the United States of America (USA), are not acting on behalf of a U.S.-registered company, and are not subject to U.S. legal restrictions.</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span> You will comply with all applicable laws, including local, federal, and international regulations, while using the Services.</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span> You are not located in countries subject to sanctions or embargoes by the United Kingdom, European Union, or United Nations.</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						You are not listed on any government lists of sanctioned or restricted individuals or entities.</li>
				</ul>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>We do not actively track user locations but reserve the right to block access to the Services, in whole or in part, at any time for users who violate these Terms. This may include blocking by IP address or device identifier.</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>LIQUIDITY GATE DOES NOT MANAGE YOUR FUNDS AND CANNOT INTERVENE IN YOUR TRANSACTIONS. ANY FINANCIAL LOSSES OR ISSUES RELATED TO THE USE OF BLOCKCHAINS, WALLETS, OR SMART CONTRACTS ARE YOUR SOLE RESPONSIBILITY. WE CANNOT PROVIDE REFUNDS, COMPENSATION, OR TRANSACTION REVERSALS.</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>We may modify or update the Services, the Agreement, or any part of the Terms at any time at our sole discretion. The new version of the Terms becomes effective upon publication. The effective date is indicated at the top of the document.</p>
				<p className={`${styles.baseText} text-white`}>If you do not agree to the updated Terms, you may not continue using the Services. Continued use of the Services after the Terms have been updated constitutes your acceptance of the new Terms.</p>
				<h4 id='services' className={`${styles.titleH4} text-white py-5`}>6. Services</h4>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Liquidity Gate does not provide investment or financial advice. Before making any financial or investment decisions, you should conduct your own research and risk assessment. We recommend consulting qualified professionals such as accountants, financial and tax advisors, lawyers, and investment consultants.</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Users retain full control over their crypto assets. All network operations are performed solely by users, without the involvement of Liquidity Gate.</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Due to the non-custodial and decentralized nature of the technology, we are not intermediaries, agents, advisors, or custodians, and we do not owe any fiduciary duties for your actions in connection with your use of our Services.</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Blockchain transactions require a gas fee, which is a network fee not controlled by Liquidity Gate; therefore, refunds are not possible.</p>
				<p className={`${styles.baseText} text-white`}>The interface is hosted on the InterPlanetary File System (IPFS), a decentralized protocol for peer-to-peer file storage and retrieval. This means the interface files are not stored in a single location but are instead distributed across IPFS nodes.</p>
				<h4 id='digital-wallet' className={`${styles.titleH4} text-white py-5`}>7. Digital Wallet</h4>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Users interact with the LQG protocol using third-party self-custody wallets. We do not control or guarantee the functionality of these wallets.</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>To interact with the LQG protocol via the interface, you must connect your wallet. It is important to understand that your wallet is provided by an external provider and governed by separate terms and conditions set by that provider. These terms may include fees, disclaimers, or risk warnings. You are solely responsible for reviewing the terms of the wallet you choose, including any applicable fees and risks.</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>You are fully responsible for the security of your wallet. We do not have access to your private keys. Any unauthorized access to your wallet by third parties may result in the loss of your crypto assets. We do not manage your wallet and are not responsible for it.</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Only the private key associated with your wallet grants you control over your digital assets and allows interaction with smart contracts.</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>LIQUIDITY GATE DOES NOT CREATE, GENERATE, STORE, OR EXECUTE TRANSACTIONS WITH ANY WALLETS. THE CREATION, GENERATION, STORAGE, AND EXECUTION OF TRANSACTIONS IN DIGITAL WALLETS ARE YOUR SOLE RESPONSIBILITY.</p>
				<p className={`${styles.baseText} text-white`}>LIQUIDITY GATE WILL NEVER REQUEST OR OBTAIN A COPY OF YOUR PRIVATE KEYS. YOU ARE RESPONSIBLE FOR ENSURING THAT THE DIGITAL WALLET YOU USE IS SECURE AND AUTHORIZED.</p>
				<h4 id='assumption-of-risk' className={`${styles.titleH4} text-white py-5`}>8. Assumption of Risk</h4>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>You acknowledge and accept the risks associated with using emerging and experimental technologies. Technologies such as smart contracts, cryptographic tokens, and blockchain-based applications are experimental and subject to change. Errors, failures, cyberattacks, or blockchain forks may occur and could result in the total loss of digital assets. We are not responsible for any financial losses caused by such risks.</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>The value and liquidity of blockchain assets, including digital assets and NFTs, are highly volatile. Prices may fluctuate significantly based on market conditions and could result in losses. We do not guarantee that the purchase of digital assets will not lead to financial loss.</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>You understand that participating in liquidity pools carries the risk of impermanent loss. Market fluctuations can alter asset ratios, resulting in loss. Additional risks include:</p>
				<ul className='pl-2.5 mb-5'>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Lack of guaranteed liquidity.
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Loss of assets due to liquidity pool hacks.
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Token value depreciation due to market instability.
					</li>
				</ul>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Liquidity Gate makes no guarantees regarding the stability or profitability of participating in liquidity pools.</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>We do not control or guarantee the operation of third-party services such as wallets (MetaMask, Phantom, SolFlare) or other blockchain applications. Use of these services is entirely at your own risk.</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>You accept these risks and release Liquidity Gate from any liability for potential losses. We do not guarantee uninterrupted availability or performance of the Services. Technical malfunctions, cyberattacks, or regulatory changes may limit or block access to the Services.</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>The regulation of digital assets and blockchain technologies is evolving. New laws may significantly affect the operation of the Services. It is your responsibility to monitor legal risks and any applicable tax obligations.</p>
				<p className={`${styles.baseText} text-white`}>If you are not comfortable with these risks, you should refrain from using the Services.</p>
				<h4 id='risks-related-to-market-makers' className={`${styles.titleH4} text-white py-5`}>9. Risks Related to Market Makers</h4>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>The User understands and acknowledges that the Liquidity Gate Platform may engage market makers—professional market participants who provide liquidity to digital assets by placing buy and sell orders.</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Market makers are independent participants interacting with the LQG protocol, its smart contracts, and liquidity pools.</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>The User should be aware of the following risks associated with their activity:</p>
				<ul className='pl-2.5 mb-5'>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Market makers may hold substantial volumes of digital assets, which can influence the asset price. Despite the Platform’s efforts to mitigate such risks, market manipulation may cause significant price volatility.
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Market makers obligations to provide liquidity do not guarantee its constant availability. The market may experience periods of low liquidity, making it difficult to buy or sell assets under desired conditions.
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Technical failures on the part of market makers, including software errors or delays in transaction processing, may affect quotes, liquidity, and the availability of digital assets.
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Market maker actions that may be perceived as dishonest or manipulative can undermine market participants’ confidence and affect asset values.
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						The Platform does not control market makers’ activities and cannot guarantee the absence of conflicts of interest with other commercial projects.
					</li>
				</ul>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>The User acknowledges and agrees that they are solely responsible for evaluating the risks associated with market maker activity and assumes all potential consequences of interacting with assets whose liquidity is supported by such parties.</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>The User is responsible for independently and regularly analyzing market conditions and considering the influence of market makers on the trading of digital assets.</p>
				<p className={`${styles.baseText} text-white`}>Liquidity Gate bears no liability for financial losses caused by market fluctuations, market maker strategies, or their actions or inactions.</p>
				<h4 id='user-conduct' className={`${styles.titleH4} text-white py-5`}>10. User Conduct</h4>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>The User may not use the Services to engage in the following activities (“Prohibited Use”). The examples listed below are non-exhaustive, and Liquidity Gate reserves the right to supplement them at any time, with or without notice. If you have questions about whether your conduct complies with these rules, please contact us at <Link className='transition-all hover:text-darkTextLink' to={'mailto: support@lqg.io'}>support@lqg.io.</Link></p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>By using the Services, you agree that you will not:</p>
				<ul className='pl-2.5'>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Abusive activity: Create an excessive load on infrastructure, interfere with system operations, attempt to gain unauthorized access to the Services, digital wallets, computer systems, or networks through password mining or other methods; distribute viruses or malware.
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Illegal activity: Violate any laws or sanction programs applicable in the jurisdictions where Liquidity Gate operates.
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Harassing other users: Engage in defamation, harassment, threats, invasion of privacy or intellectual property rights, or collect information about other users without their consent.
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Fraud: Commit fraud or provide false, inaccurate, or misleading information to Liquidity Gate, users, or third parties.
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Support of illegal activities: Use the Services to support money laundering, terrorist financing, tax evasion, or the trade of prohibited goods (such as narcotics, counterfeit items, or weapons).
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Unauthorized use of Services: Copy, modify, hack, or reverse engineer the Services.
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Unauthorized data collection: Use automated data scraping or harvesting tools without permission.
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Security manipulation: Attempt to bypass or disable data protection mechanisms.
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Smart contract attacks: Interfere with the operation of smart contracts, exploit vulnerabilities, or engage in hacking attacks—even if technically possible.
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Anti-competitive conduct: Manipulate markets or engage in unfair competition.
					</li>
					<li className={`${styles.baseText} text-white flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Copyright infringement: Distribute or use copyrighted content without the owner’s permission.
					</li>
				</ul>
				<h4 id='taxes' className={`${styles.titleH4} text-white py-5`}>11. Taxes</h4>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>The User is solely responsible for determining any taxes applicable to their digital wallet, if any. Liquidity Gate does not assume any responsibility for identifying tax obligations related to users’ digital wallets.</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>The User must independently pay all applicable taxes, duties, and charges imposed by governmental authorities arising from the use of the Services, crypto assets, and interactions with smart contracts.</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Use of the Services may give rise to tax and legal obligations, including reporting requirements. Some jurisdictions require residents to report international money transfers or cryptocurrency transfers exceeding certain thresholds.</p>
				<p className={`${styles.baseText} text-white`}>Liquidity Gate does not provide legal, tax, or investment advice. The User agrees to consult with appropriate professionals and to comply with all applicable tax and legal obligations.</p>
				<h4 id='ownership' className={`${styles.titleH4} text-white py-5`}>12. Ownership</h4>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>We grant you a license to use our Services. Subject to your compliance with this Agreement, we provide you with a personal, worldwide, non-exclusive, non-transferable, and revocable license to use the software provided as part of our Services. The sole purpose of this license is to enable you to use the Services in accordance with these Terms.</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>We retain all ownership rights to the Services, including copyright in the Content, source code, data, and other materials accessible through the Services. Unless explicitly stated otherwise herein, your use of the Services does not grant you ownership or other rights in them.</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Any comments, bug reports, ideas, or other feedback you submit about our Services are provided voluntarily. We may use or not use such feedback at our discretion, including copying or sharing it with third parties, without any obligation to you.</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Unless otherwise specified, the Services and all their Content, including the Liquidity Gate logo, text, graphics, images, data, software, audio files, and other materials, are the exclusive property of Liquidity Gate, its affiliates, or licensors. Any reproduction, modification, distribution, or use without written permission is prohibited. Users may not use the name Liquidity Gate to create similar or competing services.</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>In some cases, software components may be subject to separate license terms, which take precedence in their use.</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>These Terms grant users a limited right to use the Services and their Content. Except as expressly permitted by these Terms, you may not:</p>
				<ul className='pl-2.5 mb-5'>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Reproduce, distribute, modify, create derivative works from, publicly display, perform, republish, store, or transmit any Service Content;
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Modify copies of any materials from the Services;
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Use illustrations, photographs, video or audio sequences separately from accompanying text;
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Remove or alter copyright, trademark, or proprietary rights notices from materials obtained through the Services.
					</li>
				</ul>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>You may:</p>
				<ul className='pl-2.5 mb-5'>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Temporarily store copies of materials in RAM during normal access;
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Store files automatically cached by your browser;
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Use social media features if provided by the Services and in accordance with the Terms.
					</li>
				</ul>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>If you wish to use Content in any other way, please submit a request to <Link className='transition-all hover:text-darkTextLink' to={"mailto:media@lqg.io"}>media@lqg.io.</Link></p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>The Services may contain links to third-party websites and applications. We do not control such resources, are not responsible for their content, and do not guarantee their security. Use of third-party services is entirely at your own risk. When you follow a link to an external site, these Terms no longer apply, and you must review the third party’s policies.</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>You are granted a limited, non-exclusive, non-transferable right to create a text hyperlink to our Services for non-commercial purposes, provided that the link:</p>
				<ul className='pl-2.5 mb-5'>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Does not portray Liquidity Gate in a false, misleading, or defamatory manner;
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Does not portray Liquidity Gate in a false, misleading, or defamatory manner;
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Is not placed on websites containing illegal or offensive content.
					</li>
				</ul>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>We may modify or revoke this right at any time without notice.</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>The Liquidity Gate logo, product and service names, graphical elements, button icons, and scripts are trademarks or trade dress of Liquidity Gate. Use of these elements without permission is prohibited. References to third-party products, services, or companies do not constitute endorsement, sponsorship, or recommendation by Liquidity Gate.</p>
				<p className={`${styles.baseText} text-white`}>Liquidity Gate reserves the right to take legal action against any intellectual property violations, including the unauthorized use of code, logos, or interface designs. Any attempt to copy, reverse engineer, or use elements of the Platform for commercial or unauthorized purposes without the consent of LQG Pty Ltd constitutes a violation of these Terms and may result in legal consequences.</p>
				<h4 id='referral-program' className={`${styles.titleH4} text-white py-5`}>13. Referral Program</h4>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>The Platform offers Users the opportunity to participate in a referral program, which allows them to receive rewards for referring new users (“Referral Program”). Rewards under the Referral Program are distributed automatically via smart contracts and depend on the activity of referred Users.</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>By using the Liquidity Gate Referral Program, the User acknowledges and accepts the following risks and limitations:</p>
				<ul className='pl-2.5 mb-5'>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Rewards under the Referral Program are paid automatically via smart contracts, without manual intervention from Liquidity Gate. The User acknowledges that the Platform does not control and cannot reverse already executed automated transactions.
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						In the event of technical errors or smart contract malfunctions, the Platform bears no responsibility for potential losses or forfeited rewards.
					</li>
				</ul>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Prohibited actions in using the Referral Program include:</p>
				<ul className='pl-2.5 mb-5'>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Using any schemes, manipulations, or fraudulent methods, including but not limited to: creating fake accounts, bots, artificially inflating user activity or transactions to receive referral rewards.
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Registering affiliated accounts for the purpose of obtaining referral income.
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Providing false, distorted, or misleading information about the Platform, its profitability, risks, or opportunities to encourage users to register via a referral link.
					</li>
				</ul>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>THE USER AGREES TO USE THE REFERRAL PROGRAM SOLELY FOR REFERRING REAL, INDEPENDENT THIRD PARTIES.</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Liability for violating referral program rules:</p>
				<ul className='pl-2.5 mb-5'>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						The Platform reserves the right, without prior notice, to restrict, suspend, or terminate the User’s access to the Referral Program in case of violations or suspected fraud.
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Depending on the severity of the violation, the Platform may revoke the User’s access to the Platform and all of its services entirely, without the possibility of reinstatement.
					</li>
				</ul>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Additional provisions:</p>
				<ul className='pl-2.5 mb-5'>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Referral rewards are not guaranteed income and are entirely dependent on the activity of referred Users. Profitability may vary significantly or be nonexistent.
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						The User is solely responsible for fulfilling their tax obligations in accordance with the laws of their jurisdiction.
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						The Platform reserves the right to modify or discontinue the Referral Program at any time without prior notice.
					</li>
				</ul>
				<p className={`${styles.baseText} text-white`}>By participating in the Liquidity Gate Referral Program, the User confirms they have read and understood the above risks, accepts them, and agrees to use the program in accordance with these terms.</p>
				<h4 id='ai-chatbot' className={`${styles.titleH4} text-white py-5`}>14. AI Chatbot</h4>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Our Services may include an automated chat feature to assist users. The AI chatbot provides information on various topics based on user input and artificial intelligence algorithms.</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>By using the AI chatbot, the User agrees to and acknowledges the following conditions:</p>
				<ul className='pl-2.5 mb-5'>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						The AI chatbot provides information solely for informational and assistive purposes. The chatbot’s responses do not constitute legal, financial, tax, or investment advice.
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						The User is responsible for independently verifying the accuracy and relevance of the information provided by the AI chatbot before relying on it to make decisions.
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Liquidity Gate does not guarantee the accuracy, completeness, or timeliness of the information. The Platform is not liable for any losses resulting from its use.
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						The AI chatbot is provided “as is.” Liquidity Gate does not guarantee uninterrupted operation, error-free performance, or its suitability for any particular purpose.
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Users agree not to transmit any personal, confidential, or sensitive data to the AI chatbot (e.g., passwords, private keys, personal information).
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Liquidity Gate is not responsible for the loss or disclosure of any confidential information voluntarily submitted by the User to the chatbot.
					</li>
				</ul>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>By using the AI chatbot, you agree that Liquidity Gate makes no guarantees regarding the accuracy, completeness, or currency of the information provided and is not liable for how it is used.</p>
				<p className={`${styles.baseText} text-white`}>The AI chatbot may contain links to third-party websites. These links are provided for convenience and do not imply endorsement by Liquidity Gate. We are not responsible for the content or privacy practices of external websites.</p>
				<h4 id='app-store' className={`${styles.titleH4} text-white py-5`}>15. App Store</h4>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Provided you comply with these Terms, we grant you a limited, non-exclusive, non-transferable, and non-sublicensable license to download and install the Application on your personal computers, mobile phones, tablets, wearables, and/or other devices, and to run it solely for your personal, non-commercial use.</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Except as expressly permitted in these Terms, you may not:</p>
				<ul className='pl-2.5'>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Copy, modify, or create derivative works based on the Application;
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Distribute, transmit, sublicense, lease, or lend the Application to any third party;
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Reverse engineer, decompile, or disassemble the Application (except where explicitly permitted by applicable law);
					</li>
					<li className={`${styles.baseText} text-white flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Make the Application’s functionality available to multiple users in any manner.
					</li>
				</ul>
				<h4 id='disclaimer-of-liability' className={`${styles.titleH4} text-white py-5`}>16. Disclaimer of Liability</h4>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>To the maximum extent permitted by applicable law, Liquidity Gate (LQG), its directors, employees, representatives, affiliates, and partners (collectively referred to as “LQG”) shall not be liable to you or any third party. Unless otherwise expressly stated in writing by LQG, the Services, Content, and digital assets made available through the Platform are provided “as is” and “as available,” without any warranties or conditions, express or implied.</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>LQG (as well as its subsidiaries, licensors, and business partners) makes no guarantees that the Services:</p>
				<ul className='pl-2.5 mb-5'>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Will meet your requirements;
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Will be available uninterrupted, timely, secure, or error-free;
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Will be accurate, reliable, complete, or legal.
					</li>
				</ul>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>LQG disclaims all implied warranties, including, but not limited to, warranties of merchantability, fitness for a particular purpose, title, and non-infringement.</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>LQG makes no representations or warranties that the Content on the Services is accurate, complete, reliable, current, or error-free.</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>WE ARE NOT LIABLE FOR ANY LOSSES OF ANY KIND ARISING FROM THE USE OF MATERIALS OR INFORMATION MADE AVAILABLE ON THE PLATFORM.</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Despite security measures, LQG cannot guarantee that the Services, Content, or servers are free of viruses or malware. You acknowledge the inherent risks of transmitting information and conducting digital activities over the internet and agree not to hold us liable for any security breaches, except in cases of gross negligence on our part.</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>LQG is not responsible for losses related to digital assets and wallets, including:</p>
				<ul className='pl-2.5 mb-5'>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						User errors (lost passwords, private keys, incorrectly entered addresses);
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Server failures or data loss;
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Corrupted wallet files;
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Unauthorized access to applications;
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Third-party actions (viruses, phishing, hacking, etc.).
					</li>
				</ul>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Use of third-party software related to LQG:</p>
				<ul className='pl-2.5 mb-5'>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						LQG is not responsible for their performance or reliability;
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						There are no guarantees of availability or proper functionality;
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Any funds used within such software may be lost or subject to hacking or fraud.
					</li>
				</ul>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Blockchain vulnerabilities and disruptions:</p>
				<ul className='pl-2.5 mb-5'>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Node failures, forks, lack of timely updates from developers;
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Actions of third parties, including market makers, liquidity providers, third-party app developers, or service providers;
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Force majeure events, including natural disasters, war, terrorism, civil unrest, changes in law, hacking incidents, or other events beyond the Platform’s control.
					</li>
				</ul>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Information and Content available on the Platform:</p>
				<ul className='pl-2.5 mb-5'>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Articles, AI bots, guides, marketing materials, and similar are for informational purposes only and do not constitute legal, financial, or investment advice.
					</li>
				</ul>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>NOTHING IN THESE TERMS SHALL EXCLUDE OR LIMIT EITHER PARTY’S LIABILITY FOR FRAUD, DEATH, OR PERSONAL INJURY CAUSED BY GROSS NEGLIGENCE, VIOLATION OF LAW, OR OTHER ACTS THAT CANNOT BE LIMITED OR EXCLUDED BY LEGAL MEANS.</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>IN SOME JURISDICTIONS, THE EXCLUSION OR LIMITATION OF CERTAIN WARRANTIES AND LIABILITIES MAY BE UNENFORCEABLE. IN SUCH CASES, LQG’S LIABILITY SHALL BE LIMITED TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LOCAL LAW.</p>
				<h5 className={`${styles.titleH5} text-white mb-[1.125rem] sm:pl-3 md:pl-5`}>16.1 Limitation of Liability Cap</h5>
				<p className={`${styles.baseText} text-white mb-[1.125rem] sm:pl-3 md:pl-5`}>Liquidity Gate’s total liability to the User is limited to the amount actually paid by the User to the Platform during the last six (6) months, excluding any amounts that have already been refunded.</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem] sm:pl-3 md:pl-5`}>This limitation does not apply in cases of gross negligence or willful misconduct by the Platform.</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem] sm:pl-3 md:pl-5`}>The User confirms that they have read, understood, and accept this clause, and acknowledge all risks associated with using the Liquidity Gate Services.</p>
				<p className={`${styles.baseText} text-white sm:pl-3 md:pl-5`}>If the User does not agree to these terms, they must discontinue use of the Platform and its Services.</p>
				<h4 id='indemnification' className={`${styles.titleH4} text-white py-5`}>17. Indemnification</h4>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>By using the Liquidity Gate Platform and its Services, the User agrees to indemnify and hold harmless Liquidity Gate and its affiliates (including employees, partners, and representatives) from any losses arising from:</p>
				<ul className='pl-2.5 mb-5'>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						A breach of these Terms or any applicable laws by the User;
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Improper use of the Services, including smart contracts and related technologies;
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Improper use of the Services, including smart contracts and related technologies;
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Use of third-party services, applications, or resources in violation of their terms or applicable laws;
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Actions that infringe on the rights of third parties or violate any laws.
					</li>
				</ul>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Liquidity Gate reserves the right to assume the defense and exclusive control of any legal matter resulting from the User’s actions. In such cases, all associated costs will be borne by the User.</p>
				<p className={`${styles.baseText} text-white`}>If the User is unsure of their obligations under this clause, they are encouraged to seek legal advice before using the Services.</p>
				<h4 id='dispute-resolution' className={`${styles.titleH4} text-white py-5`}>18. Dispute Resolution</h4>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>This section contains a binding arbitration agreement and a class action waiver, meaning that all claims or disputes must be brought on an individual basis and not as part of any class or representative action. Please read carefully.</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>In the event of any disagreement, dispute, or claim between you and the Liquidity Gate Platform, you agree to make reasonable and good faith efforts to resolve the matter amicably through negotiation prior to pursuing any formal method of dispute resolution, including court or arbitration.</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Any disputes, claims, or demands arising out of these Terms shall be finally resolved through arbitration conducted in accordance with the Rules of the Australian Centre for International Commercial Arbitration (ACICA). The arbitrator’s decision shall be final and binding on both parties.</p>
				<ul className='pl-2.5 mb-5'>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						The seat of arbitration shall be Sydney, Australia.
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						The arbitration shall be conducted by a sole arbitrator appointed under ACICA rules.
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						The language of arbitration shall be English.
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						The governing law shall be exclusively the laws of Australia.
					</li>
				</ul>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>YOU AGREE THAT ANY DISPUTES MUST BE BROUGHT ON AN INDIVIDUAL BASIS. YOU EXPRESSLY WAIVE YOUR RIGHT TO PARTICIPATE IN CLASS ACTION LAWSUITS.</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>If any dispute proceeds to court, both parties waive the right to a jury trial and instead agree to a bench trial before a competent court in Australia.</p>
				<p className={`${styles.baseText} text-white`}>By continuing to use the Liquidity Gate Services, you confirm your agreement with the provisions of this section and agree to be bound by them.</p>
				<h4 id='termination' className={`${styles.titleH4} text-white py-5`}>19. Termination</h4>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>These Terms of Use remain in effect until terminated by you or by Liquidity Gate (LQG Pty Ltd).</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>You may terminate this Agreement at any time by ceasing use of the Services and deleting the official Platform applications from your devices.</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Liquidity Gate may suspend, restrict, or terminate your access to the Services without prior notice under the following circumstances:</p>
				<ul className='pl-2.5 mb-5'>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Your actions pose legal risks to Liquidity Gate.
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						You have violated any provision of these Terms of Use.
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						There is a reasonable suspicion, confirmed by internal investigations, that your actions may result in legal liability or significant risks to Liquidity Gate.
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						You are using or intend to use the Services for unlawful purposes or in ways that infringe the rights of third parties.
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Continued access to the Services becomes commercially unreasonable or impossible due to objective factors (e.g., changes in law, Platform shutdown, etc.).
					</li>
				</ul>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Termination of these Terms does not limit Liquidity Gate’s right to pursue legal remedies under Australian law and international legal standards. </p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Termination does not release you from obligations incurred prior to the date of termination.</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Liquidity Gate reserves the right, without notice, to modify, restrict, or discontinue access to the Services (or parts thereof), including applications and content hosted on the Platform. The company is under no obligation to provide updates or ensure ongoing availability of any Services.</p>
				<p className={`${styles.baseText} text-white`}>You are responsible for monitoring the current version of the Terms of Use and for staying informed about any changes to the Services.</p>
				<h4 id='entire-agreement' className={`${styles.titleH4} text-white py-5`}>20. Entire Agreement</h4>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>These Terms of Use, the Privacy Policy, and any additional rules, provisions, or policies posted on the Liquidity Gate website, mobile applications, or other official Platform resources govern your use of the Services.</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>This Agreement supersedes any prior discussions, proposals, or informal understandings related to the use of the Services. However, it does not invalidate any existing individual agreements you have signed with Liquidity Gate.</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Failure to enforce any provision or exercise a right under these Terms in certain cases does not constitute a waiver of that right in the future.</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>These Terms, together with the Privacy Policy and other governing documents, constitute the complete agreement between the User and Liquidity Gate and supersede all prior understandings.</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>If any provision of these Terms is found to be invalid, the remaining provisions shall remain in full force and effect.</p>
				<p className={`${styles.baseText} text-white`}>BY USING THE SERVICES, YOU CONFIRM THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO THESE TERMS.</p>
				<h4 id='governing-law' className={`${styles.titleH4} text-white py-5`}>21. Governing Law</h4>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>These Terms of Use and any separate agreements under which LQG Pty Ltd provides you access to the Services shall be governed by and interpreted exclusively in accordance with the laws of Australia, without regard to private international law principles.</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>All disputes arising in connection with these Terms shall be resolved in accordance with the “Dispute Resolution” section of these Terms (if applicable). If a dispute cannot be resolved through negotiation, it shall be referred to a competent court in Australia, unless otherwise required by applicable law.</p>
				<p className={`${styles.baseText} text-white`}>By using our Services, you agree that any disputes will be governed by Australian law, unless otherwise provided by applicable legislation.</p>
				<h4 id='miscellaneous' className={`${styles.titleH4} text-white py-5`}>22. Miscellaneous</h4>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>These Terms, your access to and use of the Services and Content, shall be governed and interpreted in accordance with the laws of Australia, without regard to conflict-of-law principles that might apply the laws of another jurisdiction. Any non-arbitrable disputes between the parties shall be resolved in a court of competent jurisdiction in Australia.</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>If any provision of these Terms is held to be invalid or unenforceable, it shall be severed, and the remaining provisions shall remain fully effective.</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Our failure to insist on or enforce strict performance of any provision or right does not constitute a waiver of that right. A waiver will only be valid if it is in writing and does not imply future waivers.</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>These Terms are personal to you and may not be transferred, assigned, or sublicensed without the written consent of Liquidity Gate.</p>
				<p className={`${styles.baseText} text-white`}>All notices must be in writing and shall be deemed valid upon receipt if delivered in person, by registered mail with return receipt, by confirmed fax or email, or via overnight courier service with guaranteed delivery.</p>
				<h4 id='contact-information' className={`${styles.titleH4} text-white py-5`}>23. Contact Information</h4>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>If you have any questions regarding these Terms of Use or the operation of the Liquidity Gate Platform, you may contact us at:</p>
				<ul className='pl-2.5'>

					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Support Email: <Link className='transition-all hover:text-darkTextLink' to={`mailto:support@lqg.io`}>support@lqg.io</Link>
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Phone: <Link className='transition-all hover:text-darkTextLink' to={`tel:+61 (02) 8880 0123`}>+61 (02) 8880 0123</Link>
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Legal Address: LQG Pty Ltd, 1103/205 Pacific Hwy, St Leonards, NSW 2065, Australia
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}><span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Correspondence Address: LQG Pty Ltd, 60 Martin Place, Levels 3, Sydney, NSW 2000, Australia
					</li>
				</ul>
			</div>
		</div>
		<SubscribeUs customStyle='sm:my-20 md:my-40' />
	</div >
)
)

TermsOfService.displayName = 'TermsOfService'