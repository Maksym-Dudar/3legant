"use client";

import { FooterCard } from "./FooterCard";
import { HeroCard } from "./HeroCard";
import type { IProductCard } from "@/shared/types/product/product.type";
import { useProductCard } from "./useProductCard";
import { Button } from "@/components/ui";
import ButtonLike from "@/components/ui/buttons/ButtonLike";

interface Props extends IProductCard {}
export function ProductCard({
	id,
	title,
	price,
	rating,
	sale,
	isNew,
	image,
	priceWithSale,
}: Props) {
	const {
		handleMouseEnter,
		handleMouseLeave,
		buttonRef,
		buttonFavoriteRef,
		toggleWishlist,
		isInWishlist,
		addToBag,
	} = useProductCard({ id });
	return (
		<article
			className='w-full h-auto'
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<div className='flex relative overflow-hidden w-full'>
				<HeroCard
					id={id}
					title={title}
					isNew={isNew}
					sale={sale}
					image={image}
				/>
				<ButtonLike
					ref={buttonFavoriteRef}
					isActive={isInWishlist}
					onClick={toggleWishlist}
				/>
				<Button
					ref={buttonRef}
					text={"Add to cart"}
					className='absolute bottom-2 md:bottom-4 mx-2 md:mx-4 w-full py-1 md:py-2'
					onClick={() => addToBag(1)}
				/>
			</div>
			<FooterCard
				id={id}
				title={title}
				rating={rating}
				prise={price}
				priceWithSale={priceWithSale}
				sale={!!sale}
			/>
		</article>
	);
}
