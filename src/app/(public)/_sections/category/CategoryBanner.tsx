import { IMAGE } from "@/config";
import { CategoryCard } from "./CategoryCard";
import { CategoryHero } from "./CategoryHero";

export function CategoryBanner() {
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-3 md:gap-4 lg:gap-5 h-full w-full auto-rows-[200px] smx:auto-rows-[100px] md:auto-rows-[230px] lg:auto-rows-[300px] lx:auto-rows-[350px]'>
			<CategoryHero
				title='Living Room'
				description='Phosfluor escently engage worldwide  with web-enabled technology.'
				src={IMAGE.CATEGORY_BANNER[0].src}
				alt={IMAGE.CATEGORY_BANNER[0].alt}
				className='row-span-2 col-span-1'
			/>
			<CategoryCard
				title='Bedroom'
				src={IMAGE.CATEGORY_BANNER[1].src}
				alt={IMAGE.CATEGORY_BANNER[1].alt}
				className='row-span-1 col-span-1'
			/>
			<CategoryCard
				title='Office'
				src={IMAGE.CATEGORY_BANNER[2].src}
				alt={IMAGE.CATEGORY_BANNER[2].alt}
				className='row-span-1 col-span-1'
			/>
		</div>
	);
}
