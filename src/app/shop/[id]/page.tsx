import MainLayouts from "@/components/layouts/MainLayouts";
import { HeroProductSection } from "@/components/sections/productPage/HeroProductSection";
import { Slider } from "@/components/sections/productPage/Swiper";

export default function page() {
    
	return (
    <MainLayouts>
        <Slider/>
       <HeroProductSection/>
    </MainLayouts>
    );
}
