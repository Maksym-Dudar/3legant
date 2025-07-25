"use client";

import { categories, prices, sorts } from "@/shared/constants/filters";
import PadingXLayouts from "@/shared/layout/PadingXLayouts";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { DropdownFilter } from "@/shared/ui/DropdownFilter";
import { DropdownSort } from "@/shared/ui/DropdownSort";
import {
	QueryFunctionContext,
	useInfiniteQuery,
} from "@tanstack/react-query";
import axios from "axios";
import { CardType } from "@/entities/product/card.types";
import { Card } from "@/entities/product/Card";

async function fetchProductCard({
	pageParam = 1,
	queryKey,
	signal,
}: QueryFunctionContext) {
	const [_key, categorie, price, sort, limit] = queryKey;

	const res = axios.get("/api/card/all", {
		params: {
			categorie: categorie,
			price: price,
			sort: sort,
			limit: limit,
			page: pageParam,
		},
		signal,
	});

	return (await res).data;
}

export function CardGrid() {
	const searchParams = useSearchParams();
	const initialCategorie = searchParams.get("categorie") || "All";

	const router = useRouter();
	const pathname = usePathname();

	const [filter, setFilter] = useState({
		categorie: initialCategorie,
		price: prices[0],
		sort: sorts[0],
	});
	const [openFilter, setOpenFilter] = useState<
		"categorie" | "price" | "sort" | null
	>(null);

	const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
		useInfiniteQuery({
			queryKey: [
				"product_card",
				filter.categorie,
				filter.price,
				filter.sort,
				8,
			],
			queryFn: fetchProductCard,
			initialPageParam: 1,
			getNextPageParam: (lastPage, pages) => {
				if (lastPage.isend) return undefined;
				return pages.length + 1;
			},
		});

	console.log(data);

	return (
		<PadingXLayouts>
			<div className='flex flex-col justify-center items-center pt-15 pb-25 w-full'>
				<div className='flex flex-col w-full items-center'>
					<div className='flex flex-col md:flex-row w-full md:justify-between gap-6 md:gap-0'>
						<div className='flex gap-4 sm:gap-6 flex-col md:flex-row w-full'>
							<DropdownFilter
								label='CATEGORIES'
								value={filter.categorie}
								options={categories}
								onChange={(val) => setFilter({ ...filter, categorie: val })}
								onToggle={() =>
									setOpenFilter(openFilter === "categorie" ? null : "categorie")
								}
								isOpen={openFilter == "categorie"}
								close={() => setOpenFilter(null)}
							/>
							<DropdownFilter
								label='PRICE'
								value={filter.price}
								options={prices}
								onChange={(val) => setFilter({ ...filter, price: val })}
								onToggle={() =>
									setOpenFilter(openFilter === "price" ? null : "price")
								}
								isOpen={openFilter == "price"}
								close={() => setOpenFilter(null)}
							/>
						</div>
						<DropdownSort
							value={filter.sort}
							options={sorts}
							onChange={(val) => setFilter({ ...filter, sort: val })}
							onToggle={() =>
								setOpenFilter(openFilter === "sort" ? null : "sort")
							}
							isOpen={openFilter == "sort"}
							close={() => setOpenFilter(null)}
						/>
					</div>
					<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 py-10 w-full'>
						{data?.pages
							?.flatMap((page) => page.cards)
							?.map((item: CardType) => (
								<div key={item.id} className='w-full h-auto'>
									<Card {...item} />
								</div>
							))}
					</div>
					{hasNextPage && (
						<button
							className='text-16 font-500 leading-170 text-black border-1 rounded-full border-black w-fit px-10 py-2'
							onClick={() => fetchNextPage()}
							disabled={isFetchingNextPage}
						>
							Show more
						</button>
					)}
				</div>
			</div>
		</PadingXLayouts>
	);
}
