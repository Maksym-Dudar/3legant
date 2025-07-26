"use client";

import "swiper/css";
import { useRef } from "react";
import PadingXLayouts from "@/shared/layout/PadingXLayouts";
import { ButtonPage } from "@/shared/ui";
import { CardType } from "@/entities/product/card.types";
import Loading from "@/entities/loading/loading";
import { Card } from "@/entities/product/Card";
import { useQuery } from "@tanstack/react-query";
import { Erro } from "@/entities/erro/erro";
import axios from "axios";

async function fetchNewArrivals() {
	return await axios.get(`/api/card/new`);
}

export default function NewArrivals() {
	const scrollRef = useRef<HTMLDivElement>(null);
	const { isLoading, error, data } = useQuery({
		queryKey: ['newArrivals'],
		queryFn: fetchNewArrivals,
	});

	if (isLoading) return <Loading />;
	
	if (error) return <Erro />


	return (
		<PadingXLayouts>
			<div className='flex flex-col w-full'>
				<div className='flex flex-col w-full py-12 gap-12'>
					<div className='flex justify-between items-end h-fit'>
						<h3 className='text-32 sm:text-36 md:text-38 lg:text-40 font-500 leading-110 grid grid-rows-2 h-20'>
							<span>New</span>
							<span>Arrivals</span>
						</h3>
						<ButtonPage title='More Products' href='/shop' />
					</div>
					{data && (
						<div
							ref={scrollRef}
							className='flex gap-4 md:gap-5 lg:gap-6 overflow-x-scroll custom-scrollbar scroll-smooth pb-12'
						>
							{data.data?.map((item: CardType) => (
								<div key={item.id} className='flex-shrink-0 w-52 sm:w-60 lg:w-72'>
									<Card {...item} />
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</PadingXLayouts>
	);
}
