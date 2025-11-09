"use client"
import PadingXLayouts from "@/layout/PadingXLayouts";
import { useUserStore } from "@/services/store/user/store";

export default function HeroTitle() {
	return (
		<PadingXLayouts>
			<div className='flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 sm:gap-0 py-8 w-full md:pr-8 lg:pr-10'>
				<h2 className='text-40 lg:text-64 xl:text-72 font-500 leading-110'>
					Simply Unique
					<br />
					Simply Better
				</h2>
				<div className='text-descriptiongrey items-center justify-center font-inter w-4/5 sm:w-2/5 lg:w-3/12'>
					<strong className='text-black text-16 font-600 leading-160'>
						3legant
					</strong>{' '}
					is a gift & decorations store based in HCMC, Vietnam. Est since 2019.
				</div>
			</div>
		</PadingXLayouts>
	);
}
