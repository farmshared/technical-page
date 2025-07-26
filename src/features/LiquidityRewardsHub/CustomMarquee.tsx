import Marquee from "react-fast-marquee";
import MarqueeComponent from './MarqueeComponent';
import { BreakpointConfig } from "@/types/types";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { MarqueeData } from "@/mockData/mockData";
import { styles } from "@/styles/styles";

interface CustomMarqueeProps {
	customStyle?: string
	breakpoints?: BreakpointConfig;
}
const DEFAULT_BREAKPOINTS: BreakpointConfig = {
	mobile: { width: 500, gradientWidth: 100 },
	tablet: { width: 1023, gradientWidth: 184 },
	desktop: { width: Infinity, gradientWidth: 184 }
};
const CustomMarquee: React.FC<CustomMarqueeProps> = ({ customStyle, breakpoints = DEFAULT_BREAKPOINTS }) => {
	const gradientWidth = useBreakpoint(breakpoints);
	return (
		<div className={`${customStyle}`}>
			<div className={`${styles.container} `}>
				<Marquee autoFill gradient={true} className="rounded-2xl" speed={50} pauseOnHover={true} gradientColor="#0A0A0A" gradientWidth={gradientWidth} >
					{
						MarqueeData?.map((item) => (
							<MarqueeComponent key={item.id} item={item} />
						))
					}
				</Marquee>
			</div>

		</div>
	)
}

export default CustomMarquee
