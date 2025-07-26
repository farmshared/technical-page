import { SubscribeUs } from '@/features/SubscribeUs/SubscribeUs'
import { styles } from '@/styles/styles'
import React from 'react'
import { Link } from 'react-router-dom'

const BugBountyRules: React.FC = () => {
	return (
		<div className='min-h-screen sm:pt-28 md:pt-52'>
			<div className={`${styles.container}`}>
				<h3 className={`${styles.titleH3} mb-10`}>Liquidity Gate Bug Bounty Policy</h3>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Liquidity Gate is committed to ensuring the highest level of security and transparency on its platform. We value the contributions of security researchers and are ready to reward discovered vulnerabilities that help make our platform even more reliable.</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>The Liquidity Gate Bug Bounty Program is aimed at identifying vulnerabilities (including but not limited to) in smart contracts, APIs, the web interface, mobile applications, and the Telegram MiniApp. Our program provides monetary compensation for the work performed.</p>
				<p className={`${styles.baseText} text-white`}>TO PROTECT OUR CLIENTS, WE DO NOT DISCLOSE, DISCUSS, OR CONFIRM SECURITY ISSUES UNTIL A THOROUGH INVESTIGATION, DIAGNOSIS, AND REMEDIATION OF ANY IDENTIFIED PROBLEMS HAS BEEN COMPLETED.</p>
				<h4 className={`${styles.titleH4} text-white py-5`}>1. Participation</h4>
				<ul className='pl-2.5'>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						The program is private and participation is by invitation only. If you wish to participate, send an application to security@lqg.io including your name, contact details, and cybersecurity background.
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Upon approval, you will receive an authorization ID, which must be included in all vulnerability reports.
					</li>
					<li className={`${styles.baseText} text-white flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Liquidity Gate reserves the right to reject applications without explanation.
					</li>
				</ul>
				<h4 className={`${styles.titleH4} text-white py-5`}>2. Reward Conditions</h4>
				<ul className='pl-2.5'>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						You must be the first to report the vulnerability.
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Provide detailed reproduction steps (PoC) and potential impact.
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						The vulnerability must pose a genuine threat to platform security.
					</li>
					<li className={`${styles.baseText} text-white flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Employees and partners of Liquidity Gate are ineligible to participate.
					</li>
				</ul>
				<h4 className={`${styles.titleH4} text-white py-5`}>3. Program Rules</h4>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>To avoid negative impact on users, the following actions are strictly prohibited:</p>
				<ul className='pl-2.5 mb-5'>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						DoS/DDoS attacks or any actions affecting network performance.
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Interference with production smart contracts that may cause fund loss.
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Compromising user accounts or accessing third-party data.
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Use of automated tools (security scanners, brute-force tools).
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Social engineering, phishing, or physical attacks.
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Manipulating oracles, asset prices, or external data feeds.
					</li>
				</ul>
				<p className={`${styles.baseText} text-white`}>IMPORTANT: ALL TESTING MUST BE CONDUCTED IN THE TESTNET ENVIRONMENT. ATTACKS ON PRODUCTION SYSTEMS MAY RESULT IN LEGAL CONSEQUENCES.</p>
				<h4 className={`${styles.titleH4} text-white py-5`}>4. In-Scope Targets</h4>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>The Bug Bounty program covers the following components:</p>
				<ul className='pl-2.5 mb-5'>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Liquidity Gate smart contracts (provided upon request)
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Website: <Link className='transition-all hover:text-darkTextLink' to={'https://lqg.io'}>https://lqg.io</Link>
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Web app: <Link className='transition-all hover:text-darkTextLink' to={'https://app.lqg.io'}>https://app.lqg.io</Link>
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						API: api.lqg.io
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Liquidity Gate mobile applications
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Liquidity Gate mobile applications
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Wallet integrations and decentralized services interactions
					</li>
				</ul>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Out of Scope:</p>
				<ul className='pl-2.5'>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						UI/UX bugs or typographical errors.
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						DNS, SPF, DKIM, DMARC misconfigurations.
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Server error messages, headers, robots.txt.
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Use of outdated libraries without active exploits.
					</li>
					<li className={`${styles.baseText} text-white flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Scanner-detected issues lacking detailed PoC.
					</li>
				</ul>
				<h4 className={`${styles.titleH4} text-white py-5`}>5. Rewards</h4>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>The reward amount depends on the severity level of the vulnerability and is determined by the Liquidity Gate security team. The severity of vulnerabilities is assessed according to the OWASP risk rating model, based on the analysis of impact and likelihood of threat exploitation:</p>
				<ul className='pl-2.5 mb-5'>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Low (e.g., leakage of non-sensitive data): $100 – $1,500
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Medium (e.g., data manipulation or bypass): $1,500 – $5,000
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						High (e.g., system compromise, asset loss): $5,000 – $100,000
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Critical (e.g., access to third-party funds or smart contract control): $50,000+
					</li>
				</ul>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Current reward ranges are listed on the Bounty Rewards page. Payments are made in USDT or another stablecoin of the participant’s choice.</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>ALL DECISIONS REGARDING REWARD AMOUNTS ARE MADE BY THE LIQUIDITY GATE SECURITY TEAM AND ARE FINAL.</p>
				<p className={`${styles.baseText} text-white`}>WE COMMIT TO PROMPTLY INVESTIGATING VALID REPORTS AND REMEDIATING VULNERABILITIES.</p>
				<h4 className={`${styles.titleH4} text-white py-5`}>6. Response Timeline and Payment</h4>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Liquidity Gate aims to maintain effective communication with researchers:</p>
				<ul className='pl-2.5 mb-5'>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Acknowledgment: within 5 business days.
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Assessment and classification: within 15 business days.
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Remediation: within 30 days (depending on severity).
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Reward payout: within 10 days of successful remediation.
					</li>
				</ul>
				<p className={`${styles.baseText} text-white`}>We will inform the researcher about the progress of the investigation and remediation of the vulnerability, and will contact them to confirm the payment method.</p>
				<h4 className={`${styles.titleH4} text-white py-5`}>7. Tax Responsibilities</h4>
				<ul className='pl-2.5'>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Bug Bounty participants are solely responsible for reporting rewards in accordance with their jurisdiction’s tax laws.
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Liquidity Gate does not provide tax advice or withhold taxes on rewards.
					</li>
					<li className={`${styles.baseText} text-white flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Participants may request a statement of payments if required.
					</li>
				</ul>
				<h4 className={`${styles.titleH4} text-white py-5`}>8. Report Submission</h4>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Submit your report to security@lqg.io, including:</p>
				<ul className='pl-2.5 mb-5'>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Vulnerability description (affected component, reproduction steps).
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Technical details and PoC (screenshots, dumps, traces, code examples).
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Version of the contract, API, or platform.
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Your crypto address for the reward.
					</li>
				</ul>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Sample Report:</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Title: XSS in Authentication API</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Description: XSS vulnerability allowing JavaScript execution during login.</p>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>Reproduction Steps:</p>
				<ul className='pl-2.5 mb-5'>
					<li className={`${styles.baseText} text-white mb-[1.125rem]`}>
						1. Navigate to login.lqg.io
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem]`}>
						2. Enter <script>alert('XSS')</script> in the wallet address field.
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem]`}>
						3. JavaScript executes upon form submission.
					</li>
				</ul>
				<p className={`${styles.baseText} text-white mb-[1.125rem]`}>PoC: [link to video]</p>
				<p className={`${styles.baseText} text-white`}>Reward Wallet (with network): 0x123...abc</p>
				<h4 className={`${styles.titleH4} text-white py-5`}>9. Confidentiality & Participation Terms</h4>
				<ul className='pl-2.5 mb-5'>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						All vulnerability data is confidential. Public disclosure is prohibited until resolution.
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Never test in production — use only testnets.
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Liquidity Gate may terminate the program at any time.
					</li>
					<li className={`${styles.baseText} text-white mb-[1.125rem] flex gap-2.5`}> <span className='top-2.5 relative size-0.5 rounded-full bg-white block'></span>
						Rewards are not issued to citizens of countries under international sanctions.
					</li>
				</ul>
				<p className={`${styles.baseText} text-white`}>Thank you for contributing to the security of Liquidity Gate!</p>
			</div>
			<SubscribeUs customStyle='sm:my-20 md:my-40' />
		</div >
	)
}

export default BugBountyRules
