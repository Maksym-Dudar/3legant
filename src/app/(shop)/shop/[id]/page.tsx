import MainLayouts from "@/shared/layout/HeaderFooterLayouts";
import { NewArrivals } from "@/widgets/home";
import { CommentProductSection } from "@/widgets/product/CommentProductSection";
import { HeroProductSection } from "@/widgets/product/HeroProductSection";

export default function page() {
	return (
		<MainLayouts>
			<HeroProductSection />
			<CommentProductSection />
			<NewArrivals />
		</MainLayouts>
	);
}
