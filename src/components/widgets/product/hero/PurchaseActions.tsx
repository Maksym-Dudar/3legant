import Image from "next/image";
import { ButtonAction } from "@/components/ui";
import {
	togleProductToWishlistStore,
	useWishlistStored,
} from "@/services/store/wishlist/store";
import { useState } from "react";
import { addProductToBagStore } from "@/services/store/bag/store";
import { IMAGE } from "@/config/image.config";

interface Props {
	product_id: number;
}

export function PurchaseActions({ product_id }: Props) {
	const [counter, setCount] = useState<number>(1);

	const wishlist = useWishlistStored();
	const isInWishlist = [...wishlist].some((x) => x.product_id === product_id);

	const itemToAddBag = { product_id: product_id, quantity: counter };

	return (
		<section className='flex flex-col gap-4 py-8 border-b border-grey'>
			<div className='flex gap-6'>
				<div className='flex flex-row text-18 md:text-20 font-300 leading-170 w-fit px-3 md:px-4 py-[6px] md:py-3 gap-6 bg-grey rounded-lg'>
					<button
						onClick={() => setCount((prev) => (prev > 1 ? prev - 1 : prev))}
					>
						-
					</button>
					<p className='flex w-1 justify-center'> {counter}</p>
					<button onClick={() => setCount((prev) => prev + 1)}>+</button>
				</div>
				<button
					onClick={() => togleProductToWishlistStore({ product_id })}
					className='flex w-full text-center border border-black py-1 sm:py-2 rounded-lg justify-center items-center gap-2'
				>
					{isInWishlist ? (
						<Image
							src={IMAGE.LIKE_ACTIVE.href}
							alt={IMAGE.LIKE_ACTIVE.alt}
							width={24}
							height={24}
						/>
					) : (
						<Image
							src={IMAGE.LIKE_NOT_ACTIVE.href}
							alt={IMAGE.LIKE_NOT_ACTIVE.alt}
							width={24}
							height={24}
						/>
					)}
					<p className='font-inter text-14 md:text-16 font-500 leading-180'>
						Wishlist
					</p>
				</button>
			</div>

			<ButtonAction
				text='Add to Cart'
				paddingY={3}
				onClick={() => {
					if (itemToAddBag) {
						addProductToBagStore(itemToAddBag);
					}
				}}
			/>
		</section>
	);
}
