"use client";

import "swiper/css";
import { useQuery } from "@tanstack/react-query";
import { useRef } from "react";
import PadingXLayouts from "@/layout/PadingXLayouts";
import { ButtonPage } from "@/components/ui";
import type { IProductCard } from "@/shared/types";
import { ProductCard } from "@/components/cards";
import { Loading, Error } from "..";
import { PAGE } from "@/config/page.config";
import { fetchNewArrivals } from "@/services/requests/product";

export function NewArrivals() {
	const scrollRef = useRef<HTMLDivElement>(null);
	const { isLoading, error, data } = useQuery({
		queryKey: ["newArrivals"],
		queryFn: fetchNewArrivals,
	});

	if (isLoading) return <Loading />;
	if (error) return <Error masage={error.message} />;

	return (
		<PadingXLayouts>
				<div className='flex flex-col w-full'>
					<div className='flex flex-col w-full py-12 gap-12'>
						<div className='flex justify-between items-end h-fit'>
							<h3 className='text-32 sm:text-36 md:text-38 lg:text-40 font-500 leading-110 grid grid-rows-2 h-20'>
								<span>New</span>
								<span>Arrivals</span>
							</h3>
							<ButtonPage title='More Products' href={PAGE.SHOP.link} />
						</div>
						<div
							ref={scrollRef}
							className='flex gap-4 md:gap-5 lg:gap-6 overflow-x-scroll custom-scrollbar scroll-smooth pb-8 md:pb-12'
						>
							{data.map((item: IProductCard) => (
								<div
									key={item.id}
									className='flex-shrink-0 w-52 sm:w-60 lg:w-72'
								>
									<ProductCard {...item} />
								</div>
							))}
						</div>
					</div>
				</div>
		</PadingXLayouts>
	);
}
