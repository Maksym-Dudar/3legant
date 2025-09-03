"use client";

import Image from "next/image";
import { useState } from "react";
import { useWindowSize } from "../hooks/useWindowSize";
import { mobileSize } from "../constants/windowSize";

export function StarRating({
	rating,
	setRating,
}: {
	rating: number;
	setRating: (value: number) => void;
}) {
	const [ratingOnMouse, setRatingOnMouse] = useState<number>(0);
	const { width } = useWindowSize();

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
								src='/images/ui/star_active.svg'
								alt='Star'
								width={width > mobileSize ? 16 : 13}
								height={width > mobileSize ? 16 : 13}
							/>
						) : (
							<Image
								src='/images/ui/star_not_active.svg'
								alt='Star'
								width={width > mobileSize ? 16 : 13}
								height={width > mobileSize ? 16 : 13}
							/>
						)}
					</button>
				);
			})}
		</div>
	);
}
