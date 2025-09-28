import { IMAGE } from "@/config/image.config";
import { mobileSize } from "@/constants/windowSize";
import { useWindowSize } from "@/hooks";
import Image from "next/image";

interface Props {
	name: string;
	nstar: number;
	reviews: number;
	description: string;
	price: number;
	priceWithoutSale: number;
	sale: boolean;
}

export function InfoProduct({
	name,
	nstar,
	reviews,
	description,
	price,
	priceWithoutSale,
	sale,
}: Props) {
	const { width } = useWindowSize();

	const starSize = width > mobileSize ? 16 : 14;

	return (
		<section className='flex flex-col w-full h-fit gap-4 pb-6 border-b-1'>
			<div className='flex gap-3 '>
				<div className='flex flex-row gap-1/2'>
					{Array(nstar)
						.fill(0)
						.map((_, i) => (
							<Image
								src={IMAGE.STAR_ACTIVE.href}
								alt={IMAGE.STAR_ACTIVE.alt}
								width={starSize}
								height={starSize}
								key={i}
							/>
						))}
				</div>
				<p className='font-inter font-400 text-10 md:text-12 leading-170'>
					{reviews} Reviews
				</p>
			</div>
			<h3 className='text-36 md:text-40 font-500 leading-110'>{name}</h3>
			<p className='text-14 md:text-16 leading-160 font-inter font-400 text-descriptiongrey'>
				{description}
			</p>
			{sale && (
				<div className='flex gap-3 items-center'>
					<p className='text-24 md:text-28 font-400 leading-120'>${price}</p>

					<s className='text-notactive text-18 md:text-20 font-500 leading-140'>
						${priceWithoutSale}
					</s>
				</div>
			)}
		</section>
	);
}
