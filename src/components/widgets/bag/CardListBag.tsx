"use client";

import type { BagCard } from "../../../shared/types/bag.type";
import { useRef } from "react";
import { CardProductInBag } from "./CardProductInBag";

interface Props {
	data: BagCard[];
	bag: Map<number, number>;
}

export function CardListBag({data, bag}: Props) {
	const scrollRef = useRef<HTMLDivElement>(null);

	return (
		<div ref={scrollRef} className='flex flex-col gap-3'>
			{data?.map((item) => (
				<CardProductInBag
					key={item.id}
					{...item}
					count={bag.get(item.id) ?? 1}
				/>
			))}
		</div>
	);
}
