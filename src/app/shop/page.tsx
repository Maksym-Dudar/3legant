import MainLayouts from "@/components/layouts/MainLayouts";
import { CardGrid } from "@/components/sections/shopPage/CardGrid";
import { HeroSectionShop } from "@/components/sections/shopPage/HeroSectionShop";

export default function Shop() {
	return (
  <MainLayouts>
	<HeroSectionShop />
  <CardGrid />
  </MainLayouts>
  );
}