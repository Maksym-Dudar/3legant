"use client";

import { useEffect, useRef } from "react";
import { ButtonAction } from "@/shared/ui";
import { addProductToBagStore } from "@/features/store/bag/store";
import Image from "next/image";
import gsap from "gsap";
import Link from "next/link";
import { CardType } from "./card.types";
import { togleProductToWishlistStore, useWishlistStored } from "@/features/store/wishlist/store";
import { useHasMouse } from "@/shared/hooks/useHasMouse";
import { useWindowSize } from "@/shared/hooks/useWindowSize";
import { mobileSize } from "@/shared/constants/windowSize";

export function Card({ id, title, price, nstar, sale, isnew, img }: CardType) {
	const buttonRef = useRef<HTMLDivElement>(null);
	const buttonFavoriteRef = useRef<HTMLButtonElement>(null);
	const hasMouse = useHasMouse();
	const { width } = useWindowSize();
	const wishlist = useWishlistStored();
	const isInWishlist = [...wishlist].some((x) => x.id === id);


	useEffect(() => {
		if (hasMouse) {
			gsap.set(buttonFavoriteRef.current, { y: -70 });
			gsap.set(buttonRef.current, { y: 70 });
		} else {
			gsap.set(buttonFavoriteRef.current, { y: 0 });
			gsap.set(buttonRef.current, { y: 0 });
		}
	}, [hasMouse]);

	const handleMouseEnter = () => {
		gsap.to(buttonFavoriteRef.current, {
			y: 0,
			duration: 0.3,
			ease: "power2.out",
		});
		gsap.to(buttonRef.current, {
			y: 0,
			duration: 0.3,
			ease: "power2.out",
		});
	};

	const handleMouseLeave = () => {
		gsap.to(buttonFavoriteRef.current, {
			y: -70,
			duration: 0.3,
			ease: "power2.out",
		});
		gsap.to(buttonRef.current, {
			y: 70,
			duration: 0.3,
			ease: "power2.out",
		});
	};

	const priceWithSale = (price - price * sale).toFixed(2);
	return (
		<div
			onMouseEnter={hasMouse ? handleMouseEnter : undefined}
			onMouseLeave={hasMouse ? handleMouseLeave : undefined}
		>
			<div className='flex relative overflow-hidden w-full'>
				<Link href={`/shop/${id}`} className='flex w-full'>
					<div className='flex w-full'>
						<Image
							src={img}
							alt={title}
							width={0}
							height={0}
							sizes='100vw'
							style={{ width: "100%", height: "100%" }}
						/>
						<div className='flex absolute p-2 sm:p-4 md:p-5'>
							<div className='flex flex-col gap-2'>
								{isnew ? (
									<div className='font-inter px-1 sm:px-2 md:px-3 py-1 bg-white rounded text-center text-12 sm:text-14 md:text-16 font-700 leading-100'>
										NEW
									</div>
								) : (
									<></>
								)}
								{sale ? (
									<div className='font-inter px-1 sm:px-2 md:px-3 py-1 bg-green rounded text-center text-white text-12 sm:text-14 md:text-16 font-700 leading-100'>
										-{sale * 100}%
									</div>
								) : (
									<></>
								)}
							</div>
						</div>
					</div>
				</Link>
				<button
					className='absolute right-2 sm:right-4 md:right-5 top-2 sm:top-4 md:top-5 p-1 sm:p-2 rounded-full bg-white cursor-pointer'
					ref={buttonFavoriteRef}
					onClick={() =>{togleProductToWishlistStore({ id })}}
				>
					{isInWishlist ? (
						<Image
							src='/images/ui/like.svg'
							alt={title}
							width={0}
							height={0}
							sizes='100vw'
							style={{ width: "100%", height: "100%" }}
						/>
					) : (
						<Image
							src='/images/ui/shape.svg'
							alt={title}
							width={0}
							height={0}
							sizes='100vw'
							style={{ width: "100%", height: "100%" }}
						/>
					)}
					
				</button>
			
				<div
					className='absolute bottom-2 md:bottom-4 px-2 md:px-4 w-full'
					ref={buttonRef}
				>
					<ButtonAction
						text={"Add to cart"}
						pading={hasMouse ? 2 : 1}
						onClick={() => addProductToBagStore({ id: id, quantity: 1 })}
					/>
				</div>
			</div>
			<div className='flex flex-col gap-1 pt-2 sm:pt-3 md:pt-4'>
				<div className='flex gap-1/2'>
					{Array(nstar)
						.fill(0)
						.map((_, i) => (
							<Image
								src='/images/ui/star.svg'
								alt='Star'
								width={width > mobileSize ? 16 : 13}
								height={width > mobileSize ? 16 : 13}
								key={i}
							/>
						))}
				</div>
				<Link href={`/shop/${id}`}>
					<h5 className='text-14 sm:text-16 md:text-18 font-600 leading-160'>
						{title}
					</h5>
					<div className='flex gap-3'>
						<p className='text-10 sm:text-12 md:text-14 font-600 leading-160'>
							${priceWithSale}
						</p>
						{sale ? (
							<s className='text-notactive text-10 sm:text-12 md:text-14  font-400 leading-160'>
								${price.toFixed(2)}
							</s>
						) : (
							<></>
						)}
					</div>
				</Link>
			</div>
		</div>
	);
}
