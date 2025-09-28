"use client";


import { useWindowSize } from "@/hooks";
import { showDescriptionInHomeCategory } from "@/constants/windowSize";
import Image from "next/image";
import PadingXLayouts from "@/layout/PadingXLayouts";
import { ButtonPage } from "@/components/ui";
import { IMAGE } from "@/config/image.config";
import { PAGE } from "@/config/page.config";
import { Category } from "@/config/product.config";

export default function ShopByCategory() {
	const { width } = useWindowSize();
	const showDescription = showDescriptionInHomeCategory < width;

	return (
		<PadingXLayouts>
			<div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-0 sm:gap-x-4 md:gap-x-6 xl:gap-x-7 h-full w-full'>
				<div className='relative row-span-2 col-span-1'>
					<div className='flex absolute flex-col p-10 '>
						<div className='flex gap-2 lg:gap-3 flex-col'>
							<h4 className='text-28 sm:text-24 md:text-30 lg:text-34 font-500 leading-110 text-black'>
								Living Room
							</h4>
							{showDescription && (
								<p className='md:text-12 lg:text-16 font-400 leading-160 text-subtitel font-inter w-full xl:w-4/5'>
									Phosfluor escently engage worldwide with web-enabled
									technology.
								</p>
							)}
						</div>
						<ButtonPage
							title='Shop Now'
							href={PAGE.SHOP_BY_CATEGORY(Category.LivingRoom)}
						/>
					</div>
					<Image
						src={IMAGE.BIG_BANNER.href}
						alt={IMAGE.BIG_BANNER.alt}
						width={0}
						height={0}
						sizes='100vw'
						style={{ width: "100%", height: "100%" }}
					/>
				</div>
				<div className='relative row-span-1 col-span-1 h-fit'>
					<div className='absolute bottom-0 py-10 px-8'>
						<h4 className='text-28 sm:text-24 md:text-30 lg:text-34 font-500 leading-110 text-black'>
							Bedroom
						</h4>
						<ButtonPage
							title='Shop Now'
							href={PAGE.SHOP_BY_CATEGORY(Category.Bedroom)}
						/>
					</div>
					<Image
						src={IMAGE.SMALL_BANNER_1.href}
						alt={IMAGE.SMALL_BANNER_1.alt}
						width={0}
						height={0}
						sizes='100vw'
						style={{ width: "100%", height: "auto" }}
					/>
				</div>
				<div className='relative row-span-1 col-span-1 h-fit self-end'>
					<div className='absolute bottom-0 py-10 px-8'>
						<h4 className='text-28 sm:text-24 md:text-30 lg:text-34 font-500 leading-110 text-black'>
							Kitchen
						</h4>
						<ButtonPage
							title='Shop Now'
							href={PAGE.SHOP_BY_CATEGORY(Category.Kitchen)}
						/>
					</div>

					<Image
						src={IMAGE.SMALL_BANNER_2.href}
						alt={IMAGE.SMALL_BANNER_2.alt}
						width={0}
						height={0}
						sizes='100vw'
						style={{ width: "100%", height: "auto" }}
					/>
				</div>
			</div>
		</PadingXLayouts>
	);
}
