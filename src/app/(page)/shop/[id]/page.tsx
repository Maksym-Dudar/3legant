import MainLayouts from "@/app/layout/HeaderFooterLayouts";
import { NewArrivals } from "@/widgets/home";
import { HeroProductSection } from "@/widgets/product/HeroProductSection";

export default function page() {
    
	return (
		<MainLayouts>
			<HeroProductSection />
			<NewArrivals />
		</MainLayouts>
	);
}
