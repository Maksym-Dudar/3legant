
import PadingXLayouts from "@/app/layout/PadingXLayouts";
import { ButtonPage } from "@/shared";
import Image from "next/image";

export default function ShopByCategory() {
	return (
		<PadingXLayouts>
			<div className='grid grid-cols-2 gap-6 p-2'>
				<div className='flex'>
					<div className='flex absolute flex-col p-12'>
						<div className='flex gap-3 flex-col'>
							<h4 className='text-34 font-500 leading-110 text-black'>
								Living Room
							</h4>
							<p className='text-16 font-400 leading-160 text-subtitel font-inter w-2/3'>
								Phosfluor escently engage worldwide with web-enabled technology.
							</p>
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
				<div className='flex flex-col gap-6'>
					<div className='relative'>
						<div className='absolute bottom-0 left-0 py-10 px-8'>
							<h4 className='text-34 font-500 leading-110 text-black'>
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
					<div className='relative'>
						<div className='absolute bottom-0 left-0 py-10 px-8'>
							<h4 className='text-34 font-500 leading-110 text-black'>
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
			</div>
		</PadingXLayouts>
	);
}
