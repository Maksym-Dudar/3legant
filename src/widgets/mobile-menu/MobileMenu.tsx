"use client";

import { LINK_NAV_ITEMS } from "@/shared/constants/links";
import { useMobileMenuContext } from "@/shared/context/MobileMenuContext";
import { useOverlayContext } from "@/shared/context/OverlayContext";
import { useCountProductInBagStore } from "@/shared/store/bag/store";
import { getUserStore } from "@/shared/store/user/store";
import { useCountProductInWishlistStore } from "@/shared/store/wishlist/store";
import { ButtonAction } from "@/shared/ui";
import { ButtonClose } from "@/shared/ui/ButtonClose";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export function MobileMenu() {
	const { isOpenMobileMenu, closeMobileMenu } = useMobileMenuContext();
	const { offOverlay } = useOverlayContext();

	const bagSize = useCountProductInBagStore();
	const wishlistSize = useCountProductInWishlistStore();
	const pathname = usePathname();
	const router = useRouter();

	return (
		isOpenMobileMenu && (
			<div className='flex'>
				<aside className='flex flex-col justify-between fixed h-full w-11/12 sm:w-8/12  z-50 bg-white py-6 sm:py-8 px-6'>
					<section className='flex flex-col gap-4'>
						<div className='flex flex-row justify-between'>
							<h1 className='text-16 leading-150 font-500 sm:text-20'>
								3legant
							</h1>
							<ButtonClose size={6} onClick={closeMobileMenu} />
						</div>
						<label className='flex relative'>
							<input
								type='text'
								placeholder='Search'
								className='text-14 font-400 leading-160 font-inter pl-11 py-2 border-1 border-descriptiongrey rounded-lg w-full'
							/>
							<Image
								src='/images/ui/search.svg'
								width={20}
								height={20}
								alt=''
								className='absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5'
							/>
						</label>
						<div className='flex flex-col gap-4'>
							{LINK_NAV_ITEMS.map((item) => (
								<div
									key={item.href}
									className='w-full border-b-2/3 border-whitegray pb-2'
								>
									<Link
										href={item.href}
										className={
											pathname !== item.href
												? "hover:scale-105 text-notactive text-14 font-500 leading-170"
												: ""
										}
									>
										{item.label}
									</Link>
								</div>
							))}
						</div>
					</section>
					<section className='flex flex-col gap-4'>
						<div className='flex flex-col'>
							<div className='w-full border-b-2/3 border-whitegray pb-2'>
								<Link
									href='/cart'
									className='flex flex-row justify-between text-16 font-500 leading-170'
								>
									Cart
									<div className='flex flex-row gap-1 items-center'>
										<Image
											src='/images/ui/shopping_bag.svg'
											width={24}
											height={24}
											alt='acount'
										/>
										<div className='w-5 h-5 bg-black text-white flex items-center justify-center rounded-full text-12 font-700 leading-80'>
											{bagSize}
										</div>
									</div>
								</Link>
							</div>
							<div className='w-full border-b-2/3 border-whitegray pb-2'>
								<Link
									href='/wishlist'
									className='flex flex-row justify-between text-16 font-500 leading-170'
								>
									Wishlist
									<div className='flex flex-row gap-1 items-center'>
										<Image
											src='/images/ui/shape.svg'
											width={24}
											height={24}
											alt='acount'
										/>
										<div className='w-5 h-5 bg-black text-white flex items-center justify-center rounded-full text-12 font-700 leading-80'>
											{wishlistSize}
										</div>
									</div>
								</Link>
							</div>
						</div>
						{getUserStore().email ? (
							<ButtonAction
								type='button'
								text='Acount'
								onClick={() => {
									router.push("/acount");
								}}
								pading={2}
							/>
						) : (
							<ButtonAction
								type='button'
								text='Sign In'
								onClick={() => {
									offOverlay();
									router.push("/signin");
								}}
								pading={2}
							/>
						)}
						<div className='flex gap-6'>
							<Image
								src='/images/socialmessenger_icon/instagram-black.svg'
								width={20}
								height={20}
								alt='instagram'
							/>
							<Image
								src='/images/socialmessenger_icon/facebook-black.svg'
								width={20}
								height={20}
								alt='facebook'
							/>
							<Image
								src='/images/socialmessenger_icon/youtube-black.svg'
								width={20}
								height={20}
								alt='youtube'
							/>
						</div>
					</section>
				</aside>
			</div>
		)
	);
}
