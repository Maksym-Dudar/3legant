
import { PathPage } from "@/components/ui";
import { IMAGE } from "@/config/image.config";
import { PAGE } from "@/config/page.config";
import PadingXLayouts from "@/layout/PadingXLayouts";
import Image from "next/image";

export function BannerShop() {
	return (
		<PadingXLayouts>
			<div className='flex relative w-full h-100'>
				<section className='flex flex-col gap-6 absolute justify-center items-center w-full h-full'>
					<div className='flex items-center gap-5'>
						<PathPage name={PAGE.HOME.label} path={PAGE.HOME.link} />
						<h5 className='font-inter'>Shop</h5>
					</div>
					<h2 className=' text-40 sm:text-46 md:text-50 lg:text-54 font-500 leading-110'>
						Shop Page
					</h2>
					<p className='text-14 sm:text-16 md:text-20 font-400 leading-160 text-black'>
						Let’s design the place you always imagined.
					</p>
				</section>
				<Image
					src={IMAGE.SHOPBANNER.href}
					alt={IMAGE.SHOPBANNER.alt}
					width={0}
					height={0}
					sizes='100vw'
					className='object-cover h-full w-full'
					priority
				/>
			</div>
		</PadingXLayouts>
	);
}
