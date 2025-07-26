import Sidebar from '@/components/Sidebar';
import { SubscribeUs } from '@/features/SubscribeUs/SubscribeUs';
import { sidebarBrandData } from '@/mockData/mockData';
import { styles } from '@/styles/styles';
import React from 'react'
import BannerLiquidity from '../../assets/icons/banner-liquidity.svg'
import LogoAssetsBlock from '@/features/BrandAssetsComponsnts/LogoAssetsBlock';
import ClearspaceBlock from '@/features/BrandAssetsComponsnts/ClearspaceBlock';
import GradientsBlock from '@/features/BrandAssetsComponsnts/Gradients';
import MisuseBlock from '@/features/BrandAssetsComponsnts/MisuseBlock';
import BannersBlock from '@/features/BrandAssetsComponsnts/BannersBlock';
import FontsBlock from '@/features/BrandAssetsComponsnts/FontsBlock';
import MerchBlock from '@/features/BrandAssetsComponsnts/MerchBlock';
import MerchAssetsBlock from '@/features/BrandAssetsComponsnts/MerchAssetsBlock';

interface BrandAssetsPageProps {
	customStyle?: string
}

export const BrandAssetsPage: React.FC<BrandAssetsPageProps> = React.memo(({ customStyle }) => (
	<div className={`${customStyle} sm:pt-28 md:pt-52`}>
		<div className={`${styles.container} md:mb-80`}>
			<h3 className={`${styles.titleH3} sm:mb-7 md:mb-14`}>Brand Assets</h3>
			<div className='relative flex justify-between items-start gap-x-3.5 sm:mb-14 md:mb-28'>
				<Sidebar sidebarData={sidebarBrandData} customStyle='w-80 sticky top-10' />
				<div className='flex-1'>
					<div data-aos='zoom-in' id='introduction' className='flex sm:mb-5 md:mb-6'>
						<img className='w-full' src={BannerLiquidity} alt="liquidity banner" />
					</div>
					<p data-aos='fade-right' className='text-white text-xl sm:pl-0 md:pl-6 mb-20'>LQG is an interconnected ecosystem made of billions of stars*, planets*, and other celestial bodies*, all bound together by gravity.</p>
					<div className='flex flex-col sm:gap-y-14 md:gap-y-20'>
						<LogoAssetsBlock />
						<ClearspaceBlock />
						<MisuseBlock />
						<GradientsBlock />
						<BannersBlock />
						<FontsBlock />
						<MerchBlock />
						<MerchAssetsBlock />
					</div>
				</div>
			</div>
		</div>

		<SubscribeUs customStyle='sm:my-20 md:my-40' />
	</div>
)
)

BrandAssetsPage.displayName = 'BrandAssetsPage';

