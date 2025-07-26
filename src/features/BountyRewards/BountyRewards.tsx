import { bountyRewardsData } from '@/mockData/mockData'
import { styles } from '@/styles/styles'
import React from 'react'
import BountyCard from './BountyCard'

interface BountyRewardsProps {
	customStyle?: string
}

const BountyRewards: React.FC<BountyRewardsProps> = ({ customStyle }) => {
	return (
		<div className={`${customStyle}`}>
			<div className={`${styles.container}`}>
				<h3 className={`${styles.titleH3} mb-3`}>Bounty Rewards</h3>
				<p className={`${styles.baseText} text-darkTextMuted sm:mb-5 md:mb-10`}>The reward will be based on likelihood and severity of the exploit up to the following amounts:</p>
				<div className='w-full flex items-stretch justify-between flex-wrap gap-x-3 gap-y-4'>
					{bountyRewardsData?.map((item) => (
						<BountyCard key={item.id} rewardData={item} />
					))}
				</div>
			</div>
		</div >
	)
}

export default BountyRewards