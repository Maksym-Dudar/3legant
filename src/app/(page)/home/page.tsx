import MainLayouts from "@/shared/layout/HeaderFooterLayouts";
import {
	Advantages,
	DiscountBanner,
	Hero,
	LatestArticles,
	NewArrivals,
	ShopByCategory,
} from "@/widgets/home";
import { Suspense } from "react";

export default function Home() {
	return (
		<MainLayouts>
			<Hero />
			<ShopByCategory />
			<NewArrivals />
			<Advantages />
			<DiscountBanner />
			<LatestArticles />
		</MainLayouts>
	);
}
