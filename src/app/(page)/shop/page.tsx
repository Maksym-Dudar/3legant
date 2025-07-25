import MainLayouts from "@/shared/layout/HeaderFooterLayouts";
import { CardGrid3 } from "@/widgets/shop/CardGrid3";
import { HeroSectionShop } from "@/widgets/shop/HeroSectionShop";

export default function Shop() {
	return (
		<MainLayouts>
			<HeroSectionShop />
			<CardGrid3 />
		</MainLayouts>
	);
}
