import { ShopByCategory } from "@/components/sections/mainPage/ShopByCategory";
import { NewArrivalsSection } from "@/components/sections/mainPage/NewArrivalsSection";
import { HeroSection } from "@/components/sections/mainPage/HeroSection";
import { DiscountBanner } from "@/components/sections/mainPage/DiscountBanner";
import { LatestArticles } from "@/components/sections/mainPage/LatestArticles";

import MainLayouts from "@/components/layouts/MainLayouts";

export default function Home() {
	return (
		<MainLayouts>
			<HeroSection />
			<ShopByCategory />
			<NewArrivalsSection />
			<DiscountBanner />
			<LatestArticles />
		</MainLayouts>
	);
}
