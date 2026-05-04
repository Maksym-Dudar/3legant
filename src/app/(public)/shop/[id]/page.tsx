import { HeroProductSection } from "@/components/widgets/product/hero/HeroProductSection";
import { ProductRow } from "@/features/product/ui/ProductRow";


export default function page() {
	return (
		<div className="flex flex-col w-full">
			<HeroProductSection />
			{/* <CommentProductSection /> */}
			<ProductRow sort='Top Rated' />
		</div>
	);
}
