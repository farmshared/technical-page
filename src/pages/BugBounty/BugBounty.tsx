import BountyRewards from '@/features/BountyRewards/BountyRewards';
import { SubscribeUs } from '@/features/SubscribeUs/SubscribeUs';
import { styles } from '@/styles/styles';
import { Button } from '@/ui/Button';
import React from 'react'

interface BugBountyProps {
	customStyle?: string
}

export const BugBounty: React.FC<BugBountyProps> = React.memo(({ customStyle }) => (
	<div className={`${customStyle}`}>
		<div className='sm:pt-36 sm:mb-24 md:pt-72 md:pb-48'>
			<div className={`${styles.container}`}>
				<h1 className={`${styles.titleH1} mb-7`}>FIND Bugs & Exploits</h1>
				<p className={`${styles.textSubtitle} text-gray text-center mb-12`}>For deployed contracts or candidate deployment contracts</p>
				<div className='flex items-stretch gap-3 justify-center sm:flex-col xs:flex-row'>
					<Button customStyle={`${styles.buttonStyleBase} px-7 py-4`} variant='primary' link={true} path={'/bug-bounty-rules'}>Bounty rules</Button>
					<Button customStyle={`${styles.buttonStyleBase} px-7 py-4`} variant='secondary' link={false}>Contact repo</Button>
				</div>
			</div>
		</div>
		<BountyRewards />
		<SubscribeUs customStyle='sm:my-20 md:my-40' />
	</div>
)
)

BugBounty.displayName = 'BugBounty';