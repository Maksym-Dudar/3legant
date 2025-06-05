import MainLayouts from "@/app/layout/HeaderFooterLayouts";
import { CardGrid } from "@/widgets/shop/CardGrid";
import { HeroSectionShop } from "@/widgets/shop/HeroSectionShop";

export default function Shop() {
	return (
  <MainLayouts>
	<HeroSectionShop />
  <CardGrid />
  </MainLayouts>
  );
}