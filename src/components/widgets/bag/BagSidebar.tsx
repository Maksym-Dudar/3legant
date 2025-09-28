"use client";

import { useBagContext } from "@/provider";
import { useBagStored } from "@/store/bag/store";
import { ButtonClose } from "@/components/ui";
import { useQuery } from "@tanstack/react-query";
import { calculateSubtotal, checkout, fetchBagStorage } from "@/services/bag";
import { FoterBag } from "./FoterBag";
import { CardListBag } from "./CardListBag";
import type { IBagCard } from "@/shared/types/bag.type";
import { Loading, Error } from "..";


export function BagSidebar() {
	const { isOpenBag, closeBag } = useBagContext();
	const bag = useBagStored();

	const { isLoading, error, data } = useQuery<IBagCard[]>({
		queryKey: ["bag", bag],
		queryFn: fetchBagStorage,
	});

	if (isLoading) return <Loading />;
	if (error) return <Error />;
	

	return (
		isOpenBag && (
			<aside className='flex flex-col justify-between fixed h-full w-4/5 sm:w-3/5 lg:w-1/2 xl:w-1/3 z-50 bg-white right-0 py-10 px-6'>
				<section className='flex flex-col gap-4'>
					<div className='flex flex-row justify-between'>
						<h3 className='text-black text-20 sm:text-24 md:text-28 font-500 leading-120'>
							Cart
						</h3>
						<ButtonClose size={8} onClick={closeBag} />
					</div>
					<CardListBag bag={bag} data={data ?? []} />
				</section>
				<FoterBag
					subtotal={calculateSubtotal(data ?? [])}
					total={0}
					checkout={checkout}
				/>
			</aside>
		)
	);
}
