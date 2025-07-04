"use client";

import "swiper/css";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import PadingXLayouts from "@/shared/layout/PadingXLayouts";
import { ButtonPage } from "@/shared/ui";
import { Card } from "@/entities/product/Card";
import { CardType } from "@/entities/product/card";

export default function NewArrivals() {
	const [data, setData] = useState<CardType[]>();
	const scrollRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		axios
			.get(`/api/card/new`)
			.then((res) => setData(res.data))
			.catch((error) => console.log("Error fetch data"));
	}, []);

	return (
		<PadingXLayouts>
			<div className='flex flex-col w-full'>
				<div className='flex flex-col w-full py-12 gap-12'>
					<div className='flex justify-between items-end h-fit'>
						<h3 className='text-40 font-500 leading-110 grid grid-rows-2 h-20'>
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
								<Card {...item} />
							</div>
						))}
					</div>
				</div>
			</div>
		</PadingXLayouts>
	);
}
