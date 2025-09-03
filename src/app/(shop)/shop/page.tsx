import Loading from "@/entities/loading/loading";
import MainLayouts from "@/shared/layout/HeaderFooterLayouts";
import { CardGrid } from "@/widgets/shop/CardGrid";
import { HeroSectionShop } from "@/widgets/shop/HeroSectionShop";
import { Suspense } from "react";

export default function Shop() {
	return (
		<MainLayouts>
			<Suspense fallback={<Loading/>}>
				<HeroSectionShop />
				<CardGrid />
			</Suspense>
		</MainLayouts>
	);
}
