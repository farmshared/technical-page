import { IAboutNewsData, IAccordionData, IArticlesCartItem, IArticlesPageData, IAuditorsData, IBlogCartData, IBountyRewardsItem, IDarkenedSliderData, IFaqCategoryData, IGrowWithUsData, IGuidesCartItem, ILatestNewsData, ILiquidityCartData, IMarqueeData, ISafetySecurityData, ISidebarData, ISocialMediaData, ISupportCartItem, ITechnicalHighlightsData } from '../types/types'
import SlideImageDesktop1 from '../assets/mainSlider/slideImageDesktop1.png'
import SlideImageDesktop2 from '../assets/mainSlider/slideImageDesktop2.png'
import SlideImageDesktop3 from '../assets/mainSlider/slideImageDesktop3.png'
import SlideImageDesktop4 from '../assets/mainSlider/slideImageDesktop4.png'
import SlideImageMobile1 from '../assets/mainSlider/slideImageMobile1.png'
import SlideImageMobile2 from '../assets/mainSlider/slideImageMobile2.png'
import SlideImageMobile3 from '../assets/mainSlider/slideImageMobile3.png'
import SlideImageMobile4 from '../assets/mainSlider/slideImageMobile4.png'
import FlokiIcon from '../assets/icons/floki.svg'
import ShibaInuIcon from '../assets/icons/shiba-inu.svg'
import PepeIcon from '../assets/icons/pepe.svg'
import BonkIcon from '../assets/icons/bonk.svg'
import BomeIcon from '../assets/icons/bome.svg'
import DogeIcon from '../assets/icons/doge.svg'
import NewCartImage1 from '../assets/newCartImage1.png'
import NewCartImage2 from '../assets/newCartImage2.png'
import NewCartImage3 from '../assets/newCartImage3.png'
import NewCartImage4 from '../assets/newCartImage4.png'
import NewCartImage5 from '../assets/newCartImage5.png'
import NewCartImage6 from '../assets/newCartImage6.png'
import TwitterIcon from '@/components/svg/TwitterIcon'
import TelegramIcon from '@/components/svg/TelegramIcon'
import MediumIcon from '@/components/svg/MediumIcon'
import CertoraIcon from '@/components/svg/CertoraIcon'
import SpearbitIcon from '@/components/svg/SpearbitIcon'
import ForbesIcon from '../assets/icons/forbes.svg'
import DigitalIcon from '../assets/icons/digital.svg'
import DecryptIcon from '../assets/icons/decrypt.svg'
import MoneyIcon from '@/components/svg/MoneyIcon'
import CardTransferIcon from '@/components/svg/CardTransferIcon'
import LikeIcon from '@/components/svg/LikeIcon'
import SecurityIcon from '@/components/svg/SecurityIcon'
import ProgrammingIcon from '@/components/svg/ProgrammingIcon'
import FireIcon from '@/components/svg/FireIcon'
import CardSend from '@/components/svg/CardSend'
import ChainIcon from '@/components/svg/ChainIcon'
import ArrowActionIcon from '@/components/svg/ArrowActionIcon'


export const DarkenedSliderData: IDarkenedSliderData[] = [
	{
		id: 1,
		imageDesktop: SlideImageDesktop1,
		imageMobile: SlideImageMobile1,
		tabTitle: 'Dashboard',
		tabText: 'View real-time stats on your deposits, earnings, and liquidity performance.'
	},
	{
		id: 2,
		imageDesktop: SlideImageDesktop2,
		imageMobile: SlideImageMobile2,
		tabTitle: 'Provide liquidity',
		tabText: 'Deposit your assets to fuel market-making operations and earn passive income.'
	},
	{
		id: 3,
		imageDesktop: SlideImageDesktop3,
		imageMobile: SlideImageMobile3,
		tabTitle: 'Claim Earnings',
		tabText: 'Withdraw your share of generated profits.'
	},
	{
		id: 4,
		imageDesktop: SlideImageDesktop4,
		imageMobile: SlideImageMobile4,
		tabTitle: 'Activity Log',
		tabText: 'Review all transactions, including deposits, withdrawals, and earnings — all in one place.'
	},
]



export const MarqueeData: IMarqueeData[] = [
	{
		id: 1,
		url: FlokiIcon,
		text: 'FLOKI'
	},
	{
		id: 2,
		url: ShibaInuIcon,
		text: 'SHIBA-INU'
	},
	{
		id: 3,
		url: PepeIcon,
		text: 'PEPE'
	},
	{
		id: 4,
		url: BonkIcon,
		text: 'BONK'
	},
	{
		id: 5,
		url: BomeIcon,
		text: 'BOME'
	},
	{
		id: 6,
		url: DogeIcon,
		text: 'DOGE'
	},
]

export const LiquidityCartData: ILiquidityCartData[] = [
	{
		id: 1,
		title: 'Put Your Assets to Work',
		text: 'Provide liquidity using a wide range of tokens — from trending memes to blue-chip assets. Support real market-making activity and earn passive income.'
	},
	{
		id: 2,
		title: 'Earn Like a Pro',
		text: 'Share in market makers trading profits, earn performance-based rewards, and help power liquidity across CEXs and DEXs.'
	},
	{
		id: 3,
		title: 'High-Velocity Listings',
		text: 'Our market makers are constantly bringing fresh pairs to the table. From meme coins to DeFi tokens, AI, and L2s — new opportunities go live regularly.'
	},
]

export const GrowWithUsData: IGrowWithUsData[] = [
	{
		id: 1,
		title: 'Collaborating with Leading Market Makers',
		text: 'We partner with the top market makers in the industry to ensure liquidity, stability, and the best possible prices for our users. By leveraging their expertise, we provide seamless, fast, and reliable transactions.',
		icon: <FireIcon className='size-6' />
	},
	{
		id: 2,
		title: 'Frequent and Rewarding Payouts',
		text: 'Maximize your earnings with frequent reward claims. Our platform enables you to unlock rewards at regular intervals, ensuring that your investments keep working for you.',
		icon: <CardSend className='size-6' />
	},
	{
		id: 3,
		title: 'Multi-Chain Support: Solana & EVM',
		text: 'Enjoy the flexibility of interacting with both Solana and EVM-compatible blockchains. This allows you to diversify your investments across different ecosystems for better opportunities and growth.',
		icon: <ChainIcon className='size-6' />
	},
	{
		id: 4,
		title: 'Earn More with Our Referral Program',
		text: "Invite friends to join the platform and earn rewards for each successful referral. It's a great way to grow your network and maximize your earnings.",
		icon: <ArrowActionIcon className='size-6' />
	},
]

export const TechnicalHighlightsData: ITechnicalHighlightsData[] = [
	{
		id: 1,
		title: 'AI Assistant for Easy Navigation',
		text: 'Our advanced AI helps guide you through the platform with personalized recommendations, tailored strategies, and seamless execution, making it easier to manage your investments.',
	},
	{
		id: 2,
		title: 'Seamless Integration Across Devices',
		text: 'Access your portfolio from any device, whether desktop or mobile. Our platform is designed for ease of use, offering cross-platform support to manage your investments anytime, anywhere.'
	},
	{
		id: 3,
		title: '24/7 Dedicated Customer Support',
		text: `Our support team is available around the clock to assist you with any issues or questions. Whether you need help with your investments or the platform, we’re here to ensure your experience is smooth and stress-free.`
	},
	{
		id: 4,
		title: 'Industry-Leading Security',
		text: 'Audited smart contracts, non-custodial architecture, and constant monitoring — your assets stay safe, so you can focus on growing them.'
	},
	{
		id: 5,
		title: 'Zero Hidden Fees',
		text: 'We believe in clear numbers and honest rewards. What you see is what you get — no hidden fees or deductions behind the scenes.'
	},
	{
		id: 6,
		title: 'Smarter Strategies for Smarter Markets',
		text: 'Our market makers adapt strategies in real-time based on market volatility, liquidity trends, and new listings — giving your capital an edge across every cycle.'
	}
]

export const AuditorsData: IAuditorsData[] = [
	{
		id: 1,
		icon: <CertoraIcon fill='group-hover:fill-violet transition-all duration-300' stroke="group-hover:stroke-violet transition-all duration-300" />
	},
	{
		id: 2,
		icon: <SpearbitIcon fill='group-hover:fill-violet transition-all duration-300' />
	},
]

export const SafetySecurityData: ISafetySecurityData[] = [
	{
		id: 1,
		title: 'Comprehensive Audits',
		text: 'Stay secure with extensive audits conducted by top-tier blockchain security firms.',
		linkText: 'Learn More',
		link: ''
	},
	{
		id: 2,
		title: 'Bug Bounty Program',
		text: 'Help keep the platform safe. Report vulnerabilities responsibly and earn rewards for protecting the ecosystem.',
		linkText: 'Learn More',
		link: ''
	},
	{
		id: 3,
		title: 'Open Source Transparency',
		text: 'Built with the highest industry standards, our fully open smart contracts have been audited by top security firms to ensure maximum trust and reliability.',
		linkText: 'Learn More',
		link: ''
	},]

export const AccordionData: IAccordionData[] = [
	{
		id: 1,
		title: 'What is Liquidity Gate?',
		text: 'Liquidity Gate is a decentralized platform that connects liquidity providers with professional market makers. Users can deposit tokens or native currencies, and their assets are actively used by market makers to drive real yield across CEXs and DEXs — without the complexity of traditional trading.'
	},
	{
		id: 2,
		title: 'Where are supplied tokens stored?',
		text: 'All supplied assets are securely stored in non-custodial smart contracts that users can verify on-chain. Liquidity is allocated to trusted market makers through transparent processes, with users retaining full visibility into asset usage at all times.'
	},
	{
		id: 3,
		title: 'Does Liquidity Gate carry any risks?',
		text: 'Yes — like any DeFi or liquidity provision platform, there are inherent risks. These may include smart contract vulnerabilities, market volatility, and potential underperformance by market makers. We mitigate risks through multiple security audits, real-time monitoring, and by partnering only with top-tier market makers, but users should always evaluate risk carefully before participating.'
	},
	{
		id: 4,
		title: 'How can I access Liquidity Gate?',
		text: 'You can access Liquidity Gate directly through our web platform from any supported wallet (Solana and EVM chains). No account creation is required — simply connect your wallet and start supplying liquidity or managing your positions with ease.'
	},
	{
		id: 5,
		title: 'Stay Updated with LQG',
		text: 'Explore our latest articles, insights, and announcements. From market trends to platform updates and behind-the-scenes looks, our blog keeps you informed and connected to everything happening at Liquidity Gate.'
	}
]

export const LatestNewsData: ILatestNewsData[] = [
	{
		id: 1,
		title: 'LQG Puts Privacy & Security First',
		text: 'Peace of mind supported by multiple audits by the world’s leading security firms.',
		linkText: 'Learn More',
		link: '',
		image: NewCartImage1
	},
	{
		id: 2,
		title: 'LQG Puts Privacy & Security First',
		text: 'Peace of mind supported by multiple audits by the world’s leading security firms.',
		linkText: 'Learn More',
		link: '',
		image: NewCartImage2
	},
	{
		id: 3,
		title: 'LQG Puts Privacy & Security First',
		text: 'Peace of mind supported by multiple audits by the world’s leading security firms.',
		linkText: 'Learn More',
		link: '',
		image: NewCartImage3
	}
]

export const BlogsData: IBlogCartData[] = [
	{
		id: 1,
		title: 'LQG Puts Privacy & Security First',
		text: 'Peace of mind supported by multiple audits by the world’s leading security firms.',
		linkText: 'Learn More',
		link: 'blog1',
		date: 'October 14, 2024',
		image: NewCartImage1
	},
	{
		id: 2,
		title: 'LQG Puts Privacy & Security First',
		text: 'Peace of mind supported by multiple audits by the world’s leading security firms.',
		linkText: 'Learn More',
		link: 'blog2',
		date: 'October 14, 2024',
		image: NewCartImage2
	},
	{
		id: 3,
		title: 'LQG Puts Privacy & Security First',
		text: 'Peace of mind supported by multiple audits by the world’s leading security firms.',
		linkText: 'Learn More',
		link: 'blog3',
		date: 'October 14, 2024',
		image: NewCartImage3
	},
	{
		id: 4,
		title: 'LQG Puts Privacy & Security First',
		text: 'Peace of mind supported by multiple audits by the world’s leading security firms.',
		linkText: 'Learn More',
		link: 'blog4',
		date: 'October 14, 2024',
		image: NewCartImage4
	},
	{
		id: 5,
		title: 'LQG Puts Privacy & Security First',
		text: 'Peace of mind supported by multiple audits by the world’s leading security firms.',
		linkText: 'Learn More',
		link: 'blog5',
		date: 'October 14, 2024',
		image: NewCartImage5
	},
	{
		id: 6,
		title: 'LQG Puts Privacy & Security First',
		text: 'Peace of mind supported by multiple audits by the world’s leading security firms.',
		linkText: 'Learn More',
		link: 'blog6',
		date: 'October 14, 2024',
		image: NewCartImage6
	}
]

export const AboutNewsData: IAboutNewsData[] = [
	{
		id: 1,
		title: 'Gamified Campaigns',
		text: 'Forbes Dives Into Web3',
		linkText: 'Learn More',
		link: '',
		image: ForbesIcon
	},
	{
		id: 2,
		title: 'Web3 AI',
		text: 'LQG Joins Growing List of Crypto Startups Pivoting',
		linkText: 'Learn More',
		link: '',
		image: DecryptIcon
	},
	{
		id: 3,
		title: 'Digital Identity',
		text: 'In the Next Bull Run, Web3 Digital Identity and Reputation are Everything',
		linkText: 'Learn More',
		link: '',
		image: DigitalIcon
	},
]

export const SocialMediaData: ISocialMediaData[] = [
	{
		id: 1,
		icon: <TwitterIcon customStyle='group-hover:fill-violet transition-all duration-300' />,
		link: 'https://x.com/LiquidityGate',
		linkText: 'Twitter / X'
	},
	{
		id: 2,
		icon: <TelegramIcon customStyle='group-hover:fill-violet transition-all duration-300' />,
		link: 'https://t.me/LiquidityGate',
		linkText: 'Telegram'
	},
	{
		id: 3,
		icon: <MediumIcon customStyle='group-hover:fill-violet transition-all duration-300' />,
		link: 'https://medium.com/@liquiditygate',
		linkText: 'Medium'
	},
]


export const sidebarFaqData: ISidebarData[] = [
	{
		id: 1,
		title: 'General',
		anchor: '#general'
	},
	{
		id: 2,
		title: 'Risk',
		anchor: '#risk'
	},
	{
		id: 3,
		title: 'Supplying & Earning',
		anchor: '#supplying'
	},
	{
		id: 4,
		title: 'Liquidations',
		anchor: '#liquidations'
	},
	{
		id: 5,
		title: 'Safety Module',
		anchor: '#safety-module'
	},
	{
		id: 6,
		title: 'Developers',
		anchor: '#developers'
	},
	{
		id: 7,
		title: 'Brand',
		anchor: '#brand'
	}
]

export const sidebarGuideData: ISidebarData[] = [
	{
		id: 1,
		title: 'Introduction',
		anchor: '#introduction'
	},
	{
		id: 2,
		title: 'Step 1: Connect Wallet',
		anchor: '#step-1-connect-wallet'
	},
	{
		id: 3,
		title: 'Step 2: Navigate to "Your Supplies"',
		anchor: '#step-2-navigate-to-your-supplies'
	},
	{
		id: 4,
		title: 'Step 3: Select Token to Withdraw',
		anchor: '#step-3-select-token-to-withdraw'
	},
	{
		id: 5,
		title: 'Step 4: Confirm Withdrawal',
		anchor: '#step-4-confirm-withdrawal'
	},
	{
		id: 6,
		title: 'Step 5: Handling Collateralised Tokens',
		anchor: '#step-5-handling-collateralised-tokens'
	},
	{
		id: 7,
		title: 'Step 6: Withdrawing and Switching Tokens',
		anchor: '#step-6-withdrawing-and-switching-tokens'
	}
]

export const sidebarPrivacyPolicyData: ISidebarData[] = [
	{
		id: 1,
		title: '1. Information Collection',
		anchor: '#information-collection'
	},
	{
		id: 2,
		title: '2. Use of Information',
		anchor: '#use-of-information'
	},
	{
		id: 3,
		title: '3. Sharing and Disclosure of Information',
		anchor: '#sharing-and-disclosure-of-information'
	},
	{
		id: 4,
		title: '4. Interaction with Third-Party Services',
		anchor: '#interaction-with-third-party-services'
	},
	{
		id: 5,
		title: '5. Cookie Usage Policy',
		anchor: '#cookie-usage-policy'
	},
	{
		id: 6,
		title: '6. Automated Decisions',
		anchor: '#automated-decisions'
	},
	{
		id: 7,
		title: '7. Data Security',
		anchor: '#data-security'
	},
	{
		id: 8,
		title: '8. Data Storage',
		anchor: '#data-storage'
	},
	{
		id: 9,
		title: '9. International Data Transfers',
		anchor: '#international-data-transfers'
	},
	{
		id: 10,
		title: '10. Children',
		anchor: '#children'
	},
	{
		id: 11,
		title: '11. EU and UK GDPR Rights',
		anchor: '#eu-and-uk-gdpr-rights'
	},
	{
		id: 12,
		title: '12. Privacy Policy Updates',
		anchor: '#privacy-policy-updates'
	},
	{
		id: 13,
		title: '13. Contact Information',
		anchor: '#contact-information'
	}
]

export const sidebarTermsOfServiceData: ISidebarData[] = [
	{
		id: 1,
		title: '1. General Provisions',
		anchor: '#general-provisions'
	},
	{
		id: 2,
		title: '2. Legally Binding Agreement',
		anchor: '#legally-binding-agreement'
	},
	{
		id: 3,
		title: '3. Additional Information',
		anchor: '#additional-information'
	},
	{
		id: 4,
		title: '4. Definitions',
		anchor: '#definitions'
	},
	{
		id: 5,
		title: '5. Use of Services',
		anchor: '#use-of-services'
	},
	{
		id: 6,
		title: '6. Services',
		anchor: '#services'
	},
	{
		id: 7,
		title: '7. Digital Wallet',
		anchor: '#digital-wallet'
	},
	{
		id: 8,
		title: '8. Assumption of Risk',
		anchor: '#assumption-of-risk'
	},
	{
		id: 9,
		title: '9. Risks Related to Market Makers',
		anchor: '#risks-related-to-market-makers'
	},
	{
		id: 10,
		title: '10. User Conduct',
		anchor: '#user-conduct'
	},
	{
		id: 11,
		title: '11. Taxes',
		anchor: '#taxes'
	},
	{
		id: 12,
		title: '12. Ownership',
		anchor: '#ownership'
	},
	{
		id: 13,
		title: '13. Referral Program',
		anchor: '#referral-program'
	},
	{
		id: 14,
		title: '14. AI Chatbot',
		anchor: '#ai-chatbot'
	},
	{
		id: 15,
		title: '15. App Store',
		anchor: '#app-store'
	},
	{
		id: 16,
		title: '16. Disclaimer of Liability',
		anchor: '#disclaimer-of-liability'
	},
	{
		id: 17,
		title: '17. Indemnification',
		anchor: '#indemnification'
	},
	{
		id: 18,
		title: '18. Dispute Resolution',
		anchor: '#dispute-resolution'
	},
	{
		id: 19,
		title: '19. Termination',
		anchor: '#termination'
	},
	{
		id: 20,
		title: '20. Entire Agreement',
		anchor: '#entire-agreement'
	},
	{
		id: 21,
		title: '21. Governing Law',
		anchor: '#governing-law'
	},
	{
		id: 22,
		title: '22. Miscellaneous',
		anchor: '#miscellaneous'
	},
	{
		id: 23,
		title: '23. Contact Information',
		anchor: '#contact-information'
	}
]

export const sidebarLegalData: ISidebarData[] = [
	{
		id: 1,
		title: '1. Cookie Policy',
		anchor: '#cookie-policy'
	},
	{
		id: 2,
		title: '2. Risk Disclosure Statement',
		anchor: '#risk-disclosure-statement'
	},
	{
		id: 3,
		title: '3. Open Source Licensing Information',
		anchor: '#open-source-licensing-information'
	},
	{
		id: 4,
		title: '4. Jurisdiction & Governing Law Statement',
		anchor: '#jurisdiction-and-governing-law-statement'
	},
	{
		id: 5,
		title: '5. Financial Services Guide',
		anchor: '#financial-services-guide'
	}
]

export const sidebarBrandData: ISidebarData[] = [
	{
		id: 1,
		title: 'Introduction',
		anchor: '#introduction'
	},
	{
		id: 2,
		title: 'Logo',
		anchor: '#logo'
	},
	{
		id: 3,
		title: 'Clearspace',
		anchor: '#clearspace'
	},
	{
		id: 4,
		title: 'Misuse',
		anchor: '#misuse'
	},
	{
		id: 5,
		title: 'Gradients',
		anchor: '#gradients'
	},
	{
		id: 6,
		title: 'Banners',
		anchor: '#banners'
	},
	{
		id: 7,
		title: 'Merch',
		anchor: '#merch'
	},
	{
		id: 8,
		title: 'Merch (assets)',
		anchor: '#merch-assets'
	}
]

export const articlesPageData: IArticlesPageData[] = [
	{
		id: 1,
		idSection: 'introduction',
		title: 'Introduction',
		text: 'Withdrawing tokens from the Aave Protocol transfers underlying supplied assets along with any accrued interest, provided there is sufficient liquidity in the pool. This means suppliers can withdraw up to the amount available in the pool that is not currently borrowed. The process varies slightly depending on the type of token and the withdrawal method, and can be performed through protocl smart contracts or a frontend such as the Aave Labs interface.'
	},
	{
		id: 2,
		idSection: 'step-1-connect-wallet',
		title: 'Step 1: Connect Wallet',
		text: 'To begin, press ‘Connect Wallet’ and select the Ethereum wallet provider corresponding to the wallet where the tokens are supplied.'
	},
	{
		id: 3,
		idSection: 'step-2-navigate-to-your-supplies',
		title: 'Step 2: Navigate to "Your Supplies"',
		text: 'Once connected, navigate to the ‘Dashboard’ and locate the ‘Your Supplies’ section. This table displays all tokens you have supplied to the Aave Protocol.'
	},
	{
		id: 4,
		idSection: 'step-3-select-token-to-withdraw',
		title: 'Step 3: Select Token to Withdraw',
		text: 'Choose the token you wish to withdraw from the list. Verify that there is enough available liquidity in the pool to support your withdrawal. If the token is not being used as collateral for an active borrow position, you can proceed to withdraw the desired amount.'
	},
	{
		id: 5,
		idSection: 'step-4-confirm-withdrawal',
		title: 'Step 4: Confirm Withdrawal',
		text: 'Enter the amount you want to withdraw and confirm the transaction in your wallet. If you are withdrawing the same underlying token that you supplied (e.g., WETH to WETH), no additional approval transaction is needed. However, if you’re withdrawing to a network base token, such as ETH, the Aave Protocol stores these as wrapped tokens (e.g., WETH). In this case, the withdrawal process involves the WrappedTokenGateway contract, where the WETH is unwrapped and withdrawn in a single transaction.'
	},
	{
		id: 6,
		idSection: 'step-5-handling-collateralised-tokens',
		title: 'Step 5: Handling Collateralised Tokens',
		text: 'If your supplied tokens are used as collateral, you may need to repay part of your borrow position or supply additional collateral to maintain a healthy balance before you can withdraw. Regularly monitoring your health factor will help you manage this effectively.'
	},
	{
		id: 7,
		idSection: 'step-6-withdrawing-and-switching-tokens',
		title: 'Step 6: Withdrawing and Switching Tokens',
		text: 'The Aave Labs interface also offers a feature to withdraw and switch to a different token in one action. This requires token approval for both the withdrawal and the switch. Ensure you review the necessary approvals in your wallet before proceeding.'
	}
]

export const faqPageData: IFaqCategoryData[] = [
	{
		id: 'general',
		title: 'General',
		accordionData: [
			{
				id: 1,
				title: 'What is LQG?',
				text: 'text text text text text text text text text text'
			},
			{
				id: 2,
				title: 'Where are supplied tokens stored?',
				text: 'Supplied tokens are stored in publicly accessible smart contracts that enable overcollateralised borrowing according to governance-approved parameters. The LQG smart contracts have been audited and formally verified by third parties.'
			},
			{
				id: 3,
				title: 'How do I interact with LQG?',
				text: 'text text text text text text text text text text'
			},
			{
				id: 4,
				title: 'Do I need a wallet to interact with LQG?',
				text: 'text text text text text text text text text text'
			},
			{
				id: 5,
				title: 'What is the cost of interacting with LQG?',
				text: 'text text text text text text text text text text'
			},
			{
				id: 6,
				title: 'How can I access LQG?',
				text: 'text text text text text text text text text text'
			},
			{
				id: 7,
				title: 'Can funds be frozen?',
				text: 'text text text text text text text text text text'
			}
		]
	},
	{
		id: 'risk',
		title: 'Risk',
		accordionData: [
			{
				id: 1,
				title: 'What are the risks involved in using LQG?',
				text: 'text text text text text text text text text text'
			},
			{
				id: 2,
				title: 'What steps are taken to mitigate risks?',
				text: 'text text text text text text text text text text'
			},
		]
	},
	{
		id: 'supplying',
		title: 'Supplying & Earning',
		accordionData: [
			{
				id: 1,
				title: 'How do I supply?',
				text: 'text text text text text text text text text text'
			},
			{
				id: 2,
				title: 'How much can I earn?',
				text: 'text text text text text text text text text text'
			},
			{
				id: 3,
				title: 'Are there limitations to supply?',
				text: 'text text text text text text text text text text'
			},
			{
				id: 4,
				title: 'Where are supplied tokens stored?',
				text: 'text text text text text text text text text text'
			},
			{
				id: 5,
				title: 'How do I withdraw?',
				text: 'text text text text text text text text text text'
			}
		]
	},
	{
		id: 'liquidations',
		title: 'Liquidations',
		accordionData: [
			{
				id: 1,
				title: 'What is Health Factor?',
				text: 'text text text text text text text text text text'
			},
			{
				id: 2,
				title: 'What happens when my health factor is reduced?',
				text: 'text text text text text text text text text text'
			},
			{
				id: 3,
				title: 'What are liquidations?',
				text: 'text text text text text text text text text text'
			},
			{
				id: 4,
				title: 'How much is the liquidation penalty?',
				text: 'text text text text text text text text text text'
			},
			{
				id: 5,
				title: 'Can you give an example?',
				text: 'text text text text text text text text text text'
			},
			{
				id: 6,
				title: 'What is a good Health Factor?',
				text: 'text text text text text text text text text text'
			},
			{
				id: 7,
				title: 'What is my liquidation price?',
				text: 'text text text text text text text text text text'
			},
			{
				id: 8,
				title: 'How can I avoid getting liquidated?',
				text: 'text text text text text text text text text text'
			},
		]
	},
	{
		id: 'safety-module',
		title: 'Safety Module',
		accordionData: [
			{
				id: 1,
				title: 'What is the Safety Module?',
				text: 'text text text text text text text text text text'
			},
			{
				id: 2,
				title: 'What is staking?',
				text: 'text text text text text text text text text text'
			},
			{
				id: 3,
				title: 'What is the risk of staking?',
				text: 'text text text text text text text text text text'
			},
			{
				id: 4,
				title: 'What is the incentive for staking?',
				text: 'text text text text text text text text text text'
			},
			{
				id: 5,
				title: 'How do I start staking?',
				text: 'text text text text text text text text text text'
			},
			{
				id: 6,
				title: 'How do I stop staking?',
				text: 'text text text text text text text text text text'
			},
			{
				id: 7,
				title: 'What is the cooldown period?',
				text: 'text text text text text text text text text text'
			},
			{
				id: 8,
				title: 'How do I claim my rewards?',
				text: 'text text text text text text text text text text'
			}
		]
	},
	{
		id: 'developers',
		title: 'Developers',
		accordionData: [
			{
				id: 1,
				title: 'How do I integrate LQG functionality?',
				text: 'text text text text text text text text text text'
			},
			{
				id: 2,
				title: 'How do I query LQG data?',
				text: 'text text text text text text text text text text'
			}
		]
	},
	{
		id: 'brand',
		title: 'Brand',
		accordionData: [
			{
				id: 1,
				title: 'How do I use the logo?',
				text: 'text text text text text text text text text text'
			},
			{
				id: 2,
				title: 'Can I use Aave brand elements for my own project?',
				text: 'text text text text text text text text text text'
			},
			{
				id: 3,
				title: 'Can I create my own assets using the LQG brand elements?',
				text: 'text text text text text text text text text text'
			},
		]
	}
]

export const supportCartsData: ISupportCartItem[] = [
	{
		id: 1,
		title: 'FAQs',
		text: 'View answers to frequently asked questions.',
		linkText: 'Learn More',
		link: ''
	},
	{
		id: 2,
		title: 'Developer Docs',
		text: 'Start building on LQG with our comprehensive developer docs.',
		linkText: 'Learn More',
		link: ''
	},
	{
		id: 3,
		title: 'Contact Us',
		text: 'Get help from the LQG Labs team on specific questions.',
		linkText: 'Learn More',
		link: 'contact-us'
	}
]

export const guidesCartsData: IGuidesCartItem[] = [
	{
		id: 1,
		title: 'Supplying',
		text: 'Supply liquidity to earn and collateralise.',
		link: 'supplying',
		icon: <MoneyIcon />
	},
	{
		id: 2,
		title: 'Borrowing',
		text: 'Open overcollateralised borrow positions.',
		link: 'borrowing',
		icon: <CardTransferIcon />
	},
	{
		id: 3,
		title: 'Legal',
		text: 'Community-driven legal.',
		link: 'legal',
		icon: <LikeIcon />
	},
	{
		id: 4,
		title: 'Safety Module',
		text: 'Securing the Aave Protocol.',
		link: 'safety-module',
		icon: <SecurityIcon />
	},
	{
		id: 5,
		title: 'Web3',
		text: 'Blockchain basics.',
		link: 'web3',
		icon: <ProgrammingIcon />
	}
]

export const articlesCartsData: IArticlesCartItem[] = [
	{
		id: 1,
		title: 'Supply Tokens',
		text: 'Supply tokens to the Aave Protocol. 4 min read',
		link: 'supply-tokens',
	},
	{
		id: 2,
		title: 'Withdraw Tokens',
		text: 'Withdraw tokens from the Aave Protocol. 4 min read',
		link: 'withdraw-tokens',
	},
	{
		id: 3,
		title: 'Toggle Collateral Status',
		text: 'Toggle collateral status of supply positions. 3 min read',
		link: 'toggle-collateral-status',
	},
	{
		id: 4,
		title: 'Isolation Mode',
		text: 'Supply isolated collateral assets. 3 min read',
		link: 'isolation-mode',
	}
]

export const bountyRewardsData: IBountyRewardsItem[] = [
	{
		id: 1,
		title: 'SEVERITY',
		subtitle: 'Very Low',
		lists: [
			{
				id: 1,
				title: 'Almost certain',
				price: '$1.000',
			},
			{
				id: 2,
				title: 'Likely',
				price: '$1.000',
			},
			{
				id: 3,
				title: 'Possible',
				price: '$1.000',
			},
			{
				id: 4,
				title: 'Unlikely',
				price: '$1.000',
			},
			{
				id: 5,
				title: 'Almost impossible',
				price: '$1.000',
			},
		]
	},
	{
		id: 2,
		title: 'SEVERITY',
		subtitle: 'Low',
		lists: [
			{
				id: 1,
				title: 'Almost certain',
				price: '$1.000',
			},
			{
				id: 2,
				title: 'Likely',
				price: '$1.000',
			},
			{
				id: 3,
				title: 'Possible',
				price: '$1.000',
			},
			{
				id: 4,
				title: 'Unlikely',
				price: '$1.000',
			},
			{
				id: 5,
				title: 'Almost impossible',
				price: '$1.000',
			},
		]
	},
	{
		id: 3,
		title: 'SEVERITY',
		subtitle: 'Moderate',
		lists: [
			{
				id: 1,
				title: 'Almost certain',
				price: '$1.000',
			},
			{
				id: 2,
				title: 'Likely',
				price: '$1.000',
			},
			{
				id: 3,
				title: 'Possible',
				price: '$1.000',
			},
			{
				id: 4,
				title: 'Unlikely',
				price: '$1.000',
			},
			{
				id: 5,
				title: 'Almost impossible',
				price: '$1.000',
			},
		]
	},
	{
		id: 4,
		title: 'SEVERITY',
		subtitle: 'High',
		lists: [
			{
				id: 1,
				title: 'Almost certain',
				price: '$1.000',
			},
			{
				id: 2,
				title: 'Likely',
				price: '$1.000',
			},
			{
				id: 3,
				title: 'Possible',
				price: '$1.000',
			},
			{
				id: 4,
				title: 'Unlikely',
				price: '$1.000',
			},
			{
				id: 5,
				title: 'Almost impossible',
				price: '$1.000',
			},
		]
	},
	{
		id: 5,
		title: 'SEVERITY',
		subtitle: 'Severe',
		lists: [
			{
				id: 1,
				title: 'Almost certain',
				price: '$1.000',
			},
			{
				id: 2,
				title: 'Likely',
				price: '$1.000',
			},
			{
				id: 3,
				title: 'Possible',
				price: '$1.000',
			},
			{
				id: 4,
				title: 'Unlikely',
				price: '$1.000',
			},
			{
				id: 5,
				title: 'Almost impossible',
				price: '$1.000',
			},
		]
	},
	{
		id: 6,
		title: 'SEVERITY',
		subtitle: 'Critical',
		lists: [
			{
				id: 1,
				title: 'Almost certain',
				price: '$1.000',
			},
			{
				id: 2,
				title: 'Likely',
				price: '$1.000',
			},
			{
				id: 3,
				title: 'Possible',
				price: '$1.000',
			},
			{
				id: 4,
				title: 'Unlikely',
				price: '$1.000',
			},
			{
				id: 5,
				title: 'Almost impossible',
				price: '$1.000',
			},
		]
	},
]