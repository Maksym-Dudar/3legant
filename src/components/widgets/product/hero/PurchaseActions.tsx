import Image from "next/image";
import { ButtonAction } from "@/components/ui";
import {
	togleProductToWishlistStore,
	useWishlistStored,
} from "@/store/wishlist/store";
import { useState } from "react";
import { addProductToBagStore } from "@/store/bag/store";
import { IMAGE } from "@/config/image.config";

interface Props {
	id: number;
}

export function PurchaseActions({ id }: Props) {
	const [counter, setCount] = useState<number>(1);

	const wishlist = useWishlistStored();
    const isInWishlist = [...wishlist].some((x) => x.id === id);
    
	const itemToAddBag = { id: id, quantity: counter };

	return (
		<section className='flex flex-col gap-4 py-8 border-b-1'>
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
					onClick={() => togleProductToWishlistStore({ id })}
					className='flex w-full text-center border-1 border-black py-1 sm:py-2 rounded-lg justify-center items-center gap-2'
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
				padding={3}
				onClick={() => {
					if (itemToAddBag) {
						addProductToBagStore(itemToAddBag);
					}
				}}
			/>
		</section>
	);
}
