import Image from "next/image";
import { selectProductQuantity } from "../model/cart.selector";
import { ButtonCross } from "@/components/ui";
import { useCartStore } from "@/store/cart/store";
import { memo } from "react";
import type { ICartItem } from "@/shared/types/product/product.type";

interface Props extends ICartItem {}

function CartItem({ image, title, color, price, id }: Props) {
	const { addProduct, decreaseItemCount, removeProduct, cart } = useCartStore();
	const quantity = selectProductQuantity(cart, id);

	return (
		<article className='flex w-full flex-row justify-between border-b py-6 shrink-0'>
			<div className='flex flex-row gap-4'>
				<Image src={image} alt={image} width={90} height={0} />
				<div className='flex flex-col gap-2'>
					<h6 className='font-inter font-600 text-14 sm:text-16 leading-160'>
						{title}
					</h6>
					<p className='font-inter font-400 text-12 md:text-14 leading-170 text-description_gray'>
						Color: {color}
					</p>
					<div className='flex flex-row items-center text-12 font-600 leading-170 w-fit px-1 md:px-2 py-0.5 md:py-1 gap-3 bg-white rounded-lg border border-not_active'>
						<button
							className='text-16 sm:text-20 font-200 leading-100'
							onClick={() => decreaseItemCount({ id, quantity })}
						>
							-
						</button>
						<p className='flex w-1 justify-center'>{quantity}</p>
						<button
							className='text-16 sm:text-20 font-200 leading-100'
							onClick={() => addProduct({ id, quantity })}
						>
							+
						</button>
					</div>
				</div>
			</div>
			<div className='flex flex-col items-end gap-2'>
				<p className='text-14 sm:text-16 font-500 leading-160'>${price}</p>
				<ButtonCross size={5} onClick={() => removeProduct({ id, quantity })} />
			</div>
		</article>
	);
}

export default memo(CartItem);
