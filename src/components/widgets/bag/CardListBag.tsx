"use client";

import type { IBagCard } from "../../../shared/types/bag.type";
import { useRef } from "react";
import { CardProductInBag } from "./CardProductInBag";

interface Props {
	data: IBagCard[];
	bag: Map<number, number>;
}

export function CardListBag({data, bag}: Props) {
	const scrollRef = useRef<HTMLDivElement>(null);

	return (
		<div ref={scrollRef} className='flex flex-col gap-3'>
			{data?.map((item) => (
				<CardProductInBag
					key={item.product_id}
					{...item}
					count={bag.get(item.product_id) ?? 1}
				/>
			))}
		</div>
	);
}
