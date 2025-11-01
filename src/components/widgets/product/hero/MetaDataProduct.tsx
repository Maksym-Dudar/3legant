import type { Category } from '@/config/product.config';

interface Props {
	product_id: number;
	category: Category;
}

export function MetaDataProduct({ product_id, category }: Props) {
	return (
		<section className='flex gap-14 pt-6'>
			<div className='font-inter font-400 text-12 leading-170 text-descriptiongrey'>
				<p>SKU</p>
				<p>CATEGORY</p>
			</div>
			<div className='font-inter font-400 text-12 leading-170'>
				<p>{product_id}</p>
				<p>{category}</p>
			</div>
		</section>
	);
}