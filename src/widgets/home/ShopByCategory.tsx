"use client";

import { showDescriptionInHomeShopByCategory } from "@/shared/constants/windowSize";
import { useWindowSize } from "@/shared/hooks/useWindowSize";
import PadingXLayouts from "@/shared/layout/PadingXLayouts";
import { ButtonPage } from "@/shared/ui";
import Image from "next/image";

export default function ShopByCategory() {
	const { width } = useWindowSize();
	const showDescription = showDescriptionInHomeShopByCategory < width;

	return (
		<PadingXLayouts>
			<div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
				<div className='relative row-span-2 col-span-1'>
					<div className='flex absolute flex-col p-10'>
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
						<ButtonPage title='Shop Now' href='/shop?categorie=Living Room' />
					</div>
					<Image
						src='/images/main_page/banner_grid/sofa.png'
						alt='sofa'
						width={2000}
						height={2000}
						sizes='100vw'
						// style={{ width: "100%", height: "auto" }}
					/>
				</div>
				<div className='relative row-span-1 col-span-1'>
					<div className='absolute bottom-0 py-10 px-8'>
						<h4 className='text-28 sm:text-24 md:text-30 lg:text-34 font-500 leading-110 text-black'>
							Bedroom
						</h4>
						<ButtonPage title='Shop Now' href='/shop?categorie=Bedroom' />
					</div>
					<Image
						src='/images/main_page/banner_grid/badside_tabel.png'
						alt='badside_tabel'
						width={0}
						height={0}
						sizes='100vw'
						style={{ width: "100%", height: "auto" }}
					/>
				</div>
				<div className='relative row-span-1 col-span-1'>
					<div className='absolute bottom-0 py-10 px-8'>
						<h4 className='text-28 sm:text-24 md:text-30 lg:text-34 font-500 leading-110 text-black'>
							Kitchen
						</h4>
						<ButtonPage title='Shop Now' href='/shop?categorie=Kitchen' />
					</div>

					<Image
						src='/images/main_page/banner_grid/toster.png'
						alt='toster'
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
