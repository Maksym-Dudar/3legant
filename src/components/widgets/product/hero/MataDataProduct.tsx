import type { Category } from '@/config/product.config';

interface Props {
    id: number;
    category: Category
}

export function MataDataProduct({ id, category }: Props) {
	return (
		<section className='flex gap-14 pt-6'>
			<div className='font-inter font-400 text-12 leading-170 text-descriptiongrey'>
				<p>SKU</p>
				<p>CATEGORY</p>
			</div>
			<div className='font-inter font-400 text-12 leading-170'>
				<p>{id}</p>
				<p>{category}</p>
			</div>
		</section>
	);
}