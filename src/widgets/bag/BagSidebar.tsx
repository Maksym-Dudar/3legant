"use client";

import { quantityProductInBagStore, useBagStored } from "@/shared/store/bag/store";
import { BagCard } from "@/shared/types/bag.type";
import { ButtonAction } from "@/shared/ui";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { CardProductInBag } from "./CardProductInBag";
import Link from "next/link";
import { useBagContext } from "@/shared/context/BagContext";
import { ButtonClose } from "@/shared/ui/ButtonClose";

export function BagSidebar() {
	const [data, setData] = useState<BagCard[]>([]);
	const scrollRef = useRef<HTMLDivElement>(null);
	const { isOpenBag, closeBag } = useBagContext();
	const bag = useBagStored();

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

	return (
		isOpenBag && (
			<aside className='flex flex-col justify-between fixed h-full w-1/3 z-50 bg-white right-0 py-10 px-6'>
				<section className='flex flex-col gap-4'>
					<div className='flex flex-row justify-between'>
						<h3 className='text-black text-28 font-500 leading-120'>Cart</h3>
						<ButtonClose size={8} onClick={closeBag} />
					</div>
					<div ref={scrollRef} className='flex flex-col gap-3'>
						{data?.map((item) => (
							<CardProductInBag
								key={item.id}
								{...item}
								count={bag.get(item.id)?.quantity ?? 1}
							/>
						))}
					</div>
				</section>
				<section className='flex flex-col'>
					<div className='flex flex-row justify-between border-b-1 border-gray-200 py-3'>
						<p className='text-black font-inter text-16 font-400 leading-160'>
							Subtotal
						</p>
						<p className='text-black font-inter text-16 font-5600 leading-160'>
							{subtotal}
						</p>
					</div>
					<div className='flex flex-row justify-between py-3'>
						<p className='text-black text-20 font-500 leading-140'>Total</p>
						<p className='text-black text-20 font-500 leading-140'></p>
					</div>
					<div className='flex flex-col gap-4 pt-4 items-center'>
						<ButtonAction
							type='button'
							text='Checkout'
							pading={3}
							onClick={() => {}}
						/>
						<div>
							<Link
								href='/view_cart'
								className='flex w-fit pt-2 border-b-1 border-black'
							>
								<div className='py-1 pr-1 font-inter text-14 font-600 leading-160 text-black'>
									View Cart
								</div>
							</Link>
						</div>
					</div>
				</section>
			</aside>
		)
	);
}
