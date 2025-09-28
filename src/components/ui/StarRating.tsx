"use client";

import { IMAGE } from "@/config/image.config";
import { mobileSize } from "@/constants/windowSize";
import { useWindowSize } from "@/hooks";
import Image from "next/image";
import { useState } from "react";


export function StarRating({
	rating,
	setRating,
}: {
	rating: number;
	setRating: (value: number) => void;
}) {
	const [ratingOnMouse, setRatingOnMouse] = useState<number>(0);
	const { width } = useWindowSize();

	const starSize = width > mobileSize ? 16 : 13;
	

	return (
		<div className='flex flex-rov'>
			{[1, 2, 3, 4, 5].map((value) => {
				return (
					<button
						onClick={() => (rating == value ? setRating(0) : setRating(value))}
						onMouseEnter={() => setRatingOnMouse(value)}
						onMouseLeave={() => setRatingOnMouse(0)}
						key={value}
					>
						{rating >= value || ratingOnMouse >= value ? (
							<Image
								src={IMAGE.STAR_ACTIVE.href}
								alt={IMAGE.STAR_ACTIVE.alt}
								width={starSize}
								height={starSize}
							/>
						) : (
							<Image
								src={IMAGE.STAR_NOT_ACTIVE.href}
								alt={IMAGE.STAR_NOT_ACTIVE.alt}
								width={starSize}
								height={starSize}
							/>
						)}
					</button>
				);
			})}
		</div>
	);
}
