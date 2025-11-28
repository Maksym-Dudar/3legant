"use client";

import type { IBagCard } from "../../../shared/types/bag.type";
import { useRef } from "react";
import { CardProductInBag } from "./CardProductInBag";

interface Props {
	data: IBagCard[];
}

export function CardListBag({ data }: Props) {
	const scrollRef = useRef<HTMLDivElement>(null);

	return (
		<div ref={scrollRef} className='flex flex-col gap-3'>
			{data.length &&
				data.map((item) => (
					<CardProductInBag
						key={item.productId}
						{...item}
						productId={item.productId}
					/>
				))}
		</div>
	);
}
