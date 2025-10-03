import { BannerShop, CardGridShop, FilterShop,  } from "@/components/widgets/shop";
import { ShopProvider } from "@/provider/ShopContext";

export default function Shop() {
	return (
		<ShopProvider>
			<BannerShop />
			<FilterShop />
			<CardGridShop />
		</ShopProvider>
	);
}
