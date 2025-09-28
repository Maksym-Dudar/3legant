import { BannerShop, HeroShop } from "@/components/widgets/shop";
import { ShopProvider } from "@/provider/ShopContext";

export default function Shop() {
	return (
			<ShopProvider>
				<BannerShop />
				<HeroShop />
			</ShopProvider>
	);
}
