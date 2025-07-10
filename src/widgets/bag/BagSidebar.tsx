"use client";

import { quantityProductInBagStore, useBag } from "@/shared/store/bag/store";
import { BagCard } from "@/shared/types/bag";
import { ButtonAction } from "@/shared/ui";
import axios from "axios";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { CardProductInBag } from "./CardProductInBag";

export function BagSidebar({
	onToggleBag,
}: {
	onToggleBag: Dispatch<SetStateAction<boolean>>;
}) {
	const [data, setData] = useState<BagCard[]>([]);
	const scrollRef = useRef<HTMLDivElement>(null);
	const bag = useBag();

	useEffect(() => {
		let idArray: string = "";
		bag.forEach((value) => (idArray += value.id + ","));
		axios
			.get("/api/bag", {
				params: {
					id: idArray,
				},
			})
			.then((res) => setData(res.data.data));
	}, [bag]);

	let subtotal: number = 0;
	data.map(
		(item) =>
			(subtotal += item.price * (quantityProductInBagStore(item.id) ?? 0))
	);
	console.log(subtotal);
	return (
		<div className='flex'>
			<div
				className='flex fixed w-full h-full z-40 bg-opacity-60 bg-black'
				onClick={() => onToggleBag(false)}
			></div>
			<aside className='flex flex-col justify-between fixed h-full w-1/3 z-50 bg-white right-0 py-10 px-6'>
				<section className='flex flex-col gap-4'>
					<h3 className='text-black text-28 font-500 leading-120'>Cart</h3>
					<div ref={scrollRef} className='flex flex-col gap-6'>
						{data?.map((item) => (
							<CardProductInBag
								key={item.id}
								{...item}
								count={bag.get(item.id)?.quantity ?? 1}
							/>
						))}
					</div>
				</section>
				<section>
					<div className=''>
						<p></p>
						<p></p>
					</div>
					<div className=''>
						<p></p>
						<p></p>
					</div>
					<div className='flex '>
						<ButtonAction
							type='button'
							text='Checkout'
							pading={3}
							onClick={() => {}}
						/>
						<p></p>
					</div>
				</section>
			</aside>
		</div>
	);
}
