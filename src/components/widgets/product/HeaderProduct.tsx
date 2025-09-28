import { PathPage } from "@/components/ui";
import { PAGE } from "@/config/page.config";
import type { Category } from "@/config/product.config";

interface Props {
    category: Category;
    nameProduct: string;
}

export function HeaderProduct({ category, nameProduct }: Props) {
  return (
		<div className='flex gap-4 py-4'>
			<PathPage name={PAGE.HOME.label} path={PAGE.HOME.link} />
			<PathPage name={PAGE.SHOP.label} path={PAGE.SHOP.link} />
			<PathPage
				name={category}
				path={category && `/${PAGE.SHOP.link}?categorie=${category}`}
			/>
			<p className='font-inter text-12 md:text-14'>{nameProduct}</p>
		</div>
	);
}