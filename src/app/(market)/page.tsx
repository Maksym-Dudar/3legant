import { NewArrivals } from "@/components/widgets";
import {
	Advantages,
	DiscountBanner,
	HeroSwiper,
	HeroTitle,
	LatestArticles,
	ShopByCategory,
} from "@/components/widgets/home";

export default function Home() {
	return (
		<>
			<HeroSwiper />
			<HeroTitle />
			<ShopByCategory />
			<NewArrivals />
			<Advantages />
			<DiscountBanner />
			<LatestArticles />
		</>
	);
}
