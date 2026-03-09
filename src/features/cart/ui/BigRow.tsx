import { ButtonCross } from "@/components/ui";
import { Counter } from "@/components/ui/buttons/Counter";
import Cell from "@/components/ui/table/Cell";
import { selectProductQuantity } from "@/utils/selectProductQuantity";
import { useCartStore } from "@/store/cart/store";
import Image from "next/image";

interface Props {
	id: number;
	price: number;
	image: string;
	title: string;
	color: string;
}

export function BigRow({ id, image, price, title, color }: Props) {
	const { addProduct, decreaseItemCount, removeProduct, cart } = useCartStore();
	const quantity = selectProductQuantity(cart, id);
	return (
		<tr
			key={id}
			className='h-15 md:h-17 border-b-1 border-white_grey border-solid'
		>
			<Cell>
				<div className='flex flex-row gap-4'>
					<Image
						src={image}
						alt={title}
						fill
						className='object-cover'
						sizes='100vw'
					/>
					<span className='flex flex-col gap-2'>
						<h5 className='font-inter text-14 font-600 leading-160'>{title}</h5>
						<p className='font-inter text-12 font-400 leading-170'>
							Color: {color}
						</p>
						<ButtonCross
							size={20}
							onClick={() => removeProduct(id)}
							text='Remove'
						/>
					</span>
				</div>
			</Cell>
			<Cell>
				<Counter
					quantity={quantity}
					decrement={() => decreaseItemCount({ id, quantity })}
					increment={() => addProduct({ id, quantity })}
				/>
			</Cell>
			<Cell>
				<p className='text-18 font-400 font-inter leading-160'>{"$" + price}</p>
			</Cell>
			<Cell>
				<p className='text-18 font-600 font-inter leading-160'>
					{"$" + price * quantity}
				</p>
				<ButtonCross size={20} onClick={() => removeProduct(id)} />
			</Cell>
		</tr>
	);
}
