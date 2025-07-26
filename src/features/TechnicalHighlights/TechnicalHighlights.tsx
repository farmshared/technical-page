import React from 'react'
import { styles } from '../../styles/styles';
import TechnicalHighlightsCart from './TechnicalHighlightsCart';
import { TechnicalHighlightsData } from '@/mockData/mockData';

interface TechnicalHighlightsProps {
	customStyle?: string
}

export const TechnicalHighlights: React.FC<TechnicalHighlightsProps> = React.memo(({ customStyle }) => (
	<div className={`${customStyle}`}>
		<div className={`${styles.container}`}>
			<h3 data-aos="fade-right" data-aos-delay="500" className={`${styles.titleH3} mb-4`}>Our advantages</h3>
			<p data-aos="fade-right" data-aos-delay="600" className={`${styles.baseText} text-darkTextMuted max-w-2xl sm:mb-7 lg:mb-10`}>Everything you need to navigate, invest, and grow — with full transparency and user-first design</p>
			<div className='flex flex-wrap gap-3'>
				{
					TechnicalHighlightsData?.map((item) => (
						<TechnicalHighlightsCart key={item.id} item={item} />
					))
				}
			</div>
		</div>
	</div>
))

TechnicalHighlights.displayName = 'TechnicalHighlights';