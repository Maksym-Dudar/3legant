"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { ButtonPage } from "../ui/ButtonPage";
import PadingXLayouts from "../layouts/PadingXLayouts";
import "swiper/css";
import { CarouselCard } from "../ui/cards/Card";
import { useEffect, useRef, useState } from "react";
import { error } from "console";

interface Card {
	id: number;
	title: string;
	price: number;
	nstar: number;
	sale: number;
	isnew: boolean;
	img: string;
}

export function ProductCarousel() {
	const [data, setData] = useState<Card[]>();
	const scrollRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		fetch("/api/carousel")
			.then((ref) => ref.json())
			.then((data: Card[]) => setData(data))
			.catch((error) => console.log("Error fetch data"));
	}, []);

	return (
		<PadingXLayouts>
			<div className='flex flex-col w-full py-12 gap-12'>
				<div className='flex justify-between items-end h-fit'>
					<h3 className='text-4xl grid grid-rows-2 h-20'>
						<span>New</span>
						<span>Arrivals</span>
					</h3>
					<ButtonPage title='More Products' href='/shop' />
				</div>
				<div
					ref={scrollRef}
					className='flex gap-6 overflow-x-scroll custom-scrollbar scroll-smooth pb-12'
				>
					{" "}
					{data?.map((item) => (
						<div key={item.id} className='flex-shrink-0 w-72'>
							<CarouselCard {...item} />
						</div>
					))}
				</div>
			</div>
		</PadingXLayouts>
	);
}
