import PadingXLayouts from "@/shared/layout/PadingXLayouts";
import { PathPage } from "@/shared/ui";
import Image from "next/image";

export function HeroSectionShop() {
	return (
		<PadingXLayouts>
			<div className='flex relative w-full'>
				<section className='flex flex-col gap-6 absolute justify-center items-center w-full h-full'>
					<div className='flex items-center gap-5'>
						<PathPage name="Home" path="/home"/>
						<h5 className='font-inter'>Shop</h5>
					</div>
					<h2 className='text-54 font-500 leading-110'>Shop Page</h2>
					<p className='text-20 font-400 leading-160 text-black'>
						Let’s design the place you always imagined.
					</p>
				</section>
				<Image
					src='/images/shop_page/hero_banner/hero_banner.png'
					alt='Hero Banner'
					width={0}
					height={0}
					sizes='100vw'
					style={{ width: "100%", height: "auto" }}
				/>
			</div>
		</PadingXLayouts>
	);
}
