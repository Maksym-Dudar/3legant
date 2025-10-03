"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useHasMouse, useWindowSize } from "@/hooks";
import {
	togleProductToWishlistStore,
	useWishlistStored,
} from "@/store/wishlist/store";
import { mobileSize } from "@/constants/windowSize";
import { FooterCard } from "./FooterCard";
import { HeroCard } from "./HeroCard";
import { ButtonAction } from "@/components/ui";
import { addProductToBagStore } from "@/store/bag/store";
import { IMAGE } from "@/config/image.config";
import type { IProductCard } from "@/shared/types";

export function ProductCard({
	id,
	title,
	price,
	nstar,
	sale,
	isnew,
	img,
}: IProductCard) {
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

	const priceWithSale = price; // todo
	const starSize = width > mobileSize ? 16 : 13;
	const buttonActionPading = hasMouse ? 2 : 1;

	return (
		<div
			onMouseEnter={hasMouse ? handleMouseEnter : undefined}
			onMouseLeave={hasMouse ? handleMouseLeave : undefined}
		>
			<div className='flex relative overflow-hidden w-full'>
				<HeroCard id={id} title={title} isnew={isnew} sale={sale} img={img} />
				<button
					className='absolute right-2 sm:right-4 md:right-5 top-2 sm:top-4 md:top-5 p-1 sm:p-2 rounded-full bg-white cursor-pointer'
					ref={buttonFavoriteRef}
					onClick={() => {
						togleProductToWishlistStore({ id });
					}}
				>
					{isInWishlist ? (
						<Image
							src={IMAGE.LIKE_ACTIVE.href}
							alt={IMAGE.LIKE_ACTIVE.alt}
							width={0}
							height={0}
							sizes='100vw'
							style={{ width: "100%", height: "100%" }}
						/>
					) : (
						<Image
							src={IMAGE.LIKE_NOT_ACTIVE.href}
							alt={IMAGE.LIKE_NOT_ACTIVE.alt}
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
						padding={buttonActionPading}
						onClick={() => addProductToBagStore({ id: id, quantity: 1 })}
					/>
				</div>
			</div>
			<FooterCard
				id={id}
				title={title}
				nstar={nstar}
				prise={price}
				priceWithSale={priceWithSale}
				starSize={starSize}
				sale={!!sale}
			/>
		</div>
	);
}
