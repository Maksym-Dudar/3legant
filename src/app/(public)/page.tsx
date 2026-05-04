import PaddingXLayouts from "@/components/layout/PaddingXLayouts";
import { Sorts } from "@/config/product.config";
import {
	Advantages,
	CategoryBanner,
	DiscountBanner,
	Lead,
	Swiper,
} from "./_sections";
import { ProductRow } from "@/features/product/ui/ProductRow";
// import HomeArticlesSection from "@/features/blog/ui/HomeArticlesSection";

export default function Home() {
	return (
		<>
			<PaddingXLayouts>
				<div className='flex flex-col w-full h-full'>
					<Swiper />
					<Lead />
					<CategoryBanner />
					<ProductRow sort={Sorts.Newest} take={12}>
						<span>New</span>
						<span>Arrivals</span>
					</ProductRow>
					<Advantages />
				</div>
			</PaddingXLayouts>
			<DiscountBanner />
			{/* <PaddingXLayouts>
				<HomeArticlesSection />
			</PaddingXLayouts> */}
		</>
	);
}
