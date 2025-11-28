import type { Category } from '@/config/product.config';

interface Props {
	productId: number;
	category: Category[];
}

export function MetaDataProduct({ productId, category }: Props) {
	return (
		<section className='flex gap-14 pt-6'>
			<div className='font-inter font-400 text-12 leading-170 text-descriptiongray'>
				<p>SKU</p>
				<p>CATEGORY</p>
			</div>
			<div className='font-inter font-400 text-12 leading-170'>
				<p>{productId}</p>
				<p>{category.map((val) => <p>{val}</p>)}</p>
			</div>
		</section>
	);
}