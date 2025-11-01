import Link from "next/link";
import Image from "next/image";
import { useCountProductInBagStore } from "@/services/store/bag/store";
import { useCountProductInWishlistStore } from "@/services/store/wishlist/store";
import { PAGE } from "@/config/page.config";
import { IMAGE } from "@/config/image.config";

export function StoreList() {
	const bagSize = useCountProductInBagStore();
	const wishlistSize = useCountProductInWishlistStore();
	return (
		<div className='flex flex-col'>
			<div className='w-full border-b-2/3 border-whitegray pb-2'>
				<Link
					href={PAGE.CART.link}
					className='flex flex-row justify-between text-16 font-500 leading-170'
				>
					{PAGE.CART.label}
					<div className='flex flex-row gap-1 items-center'>
						<Image
							src={IMAGE.SHOPPINGBAG.href}
							alt={IMAGE.SHOPPINGBAG.alt}
							width={24}
							height={24}
						/>
						<div className='w-5 h-5 bg-black text-white flex items-center justify-center rounded-full text-12 font-700 leading-80'>
							{bagSize}
						</div>
					</div>
				</Link>
			</div>
			<div className='w-full border-b-2/3 border-whitegray pb-2'>
				<Link
					href={PAGE.WISHLIST.link}
					className='flex flex-row justify-between text-16 font-500 leading-170'
				>
					{PAGE.WISHLIST.label}{" "}
					<div className='flex flex-row gap-1 items-center'>
						<Image
							src={IMAGE.LIKE_NOT_ACTIVE.href}
							alt={IMAGE.LIKE_ACTIVE.alt}
							width={24}
							height={24}
						/>
						<div className='w-5 h-5 bg-black text-white flex items-center justify-center rounded-full text-12 font-700 leading-80'>
							{wishlistSize}
						</div>
					</div>
				</Link>
			</div>
		</div>
	);
}
