import { BannerGrid } from "@/components/sections/BannerGrid";
import { ProductCarousel } from "@/components/sections/ProductCarousel";
import { SimplyUnique } from "@/components/sections/SimplyUnique";
import Slider from "@/components/sections/Slider";
import MainLayouts from "@/components/layouts/MainLayouts";

export default function Home() {
	return (
		<MainLayouts>
			<Slider />
			<SimplyUnique />
			<BannerGrid />
			<ProductCarousel />
		</MainLayouts>
	);
}
