import { ButtonClose } from "@/components/ui";
import {
	addProductToBagStore,
	decreaseItemCountBagStore,
	quantityProductInBagStore,
	removeProductToBagStore,
} from "@/store/bag/store";
import Image from "next/image";

interface Props {
	img: string;
	title: string;
	color: string;
	price: number;
	count: number;
	id: number;
}

export function CardProductInBag({
	img,
	title,
	color,
	price,
	count,
	id,
}: Props) {
	let item = { id: id, quantity: count };

	return (
		<div className='flex w-full flex-row justify-between border-b-1 py-6 flex-shrink-0'>
			<section className='flex flex-row gap-4'>
				<Image src={img} alt={img} width={90} height={0} />
				<div className='flex flex-col gap-2'>
					<h6 className='font-inter font-600 text-14 sm:text-16 leading-160'>
						{title}
					</h6>
					<p className='font-inter font-400 text-12 md:text-14 leading-170 text-descriptiongrey'>
						Color: {color}
					</p>
					<div className='flex flex-row items-center text-12 font-600 leading-170 w-fit px-1 md:px-2 py-[2px] md:py-1 gap-3 bg-white rounded-lg border-1 border-notactive'>
						<button
							className='text-16 sm:text-20 font-200 leading-100'
							onClick={() => decreaseItemCountBagStore(item)}
						>
							-
						</button>
						<p className='flex w-1 justify-center'>
							{quantityProductInBagStore(id)}
						</p>
						<button
							className='text-16 sm:text-20 font-200 leading-100'
							onClick={() => addProductToBagStore(item)}
						>
							+
						</button>
					</div>
				</div>
			</section>
			<section className='flex flex-col items-end gap-2'>
				<p className='text-14 sm:text-16 font-500 leading-160'>${price}</p>
				<ButtonClose size={5} onClick={() => removeProductToBagStore(item)} />
			</section>
		</div>
	);
}
