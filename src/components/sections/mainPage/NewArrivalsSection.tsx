"use client";

import { ButtonPage } from "../../ui/ButtonPage";
import PadingXLayouts from "../../layouts/PadingXLayouts";
import "swiper/css";
import { Card } from "../../ui/cards/Card";
import { useEffect, useRef, useState } from "react";
import { PATH_TO_ADVANTAGES } from "@/constants/path";
import { AdvantagesCard } from "@/components/ui/cards/AdvantagesCard";
import { CardType } from "@/types/card";

export function NewArrivalsSection() {
	const [data, setData] = useState<CardType[]>();
	const scrollRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		fetch("/api/card/new")
			.then((ref) => ref.json())
			.then((data: CardType[]) => setData(data))
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
				<div className='flex justify-between gap-6 w-full pb-12'>
					{PATH_TO_ADVANTAGES.map(({ title, href, subtitel }) => (
						<AdvantagesCard
							key={title}
							titel={title}
							path={href}
							subtitel={subtitel}
						/>
					))}
				</div>
			</div>
		</PadingXLayouts>
	);
}
