"use client";

import { useSearchParams } from "next/navigation";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Error, Loading } from "..";
import { useShopContext } from "@/provider/ShopContext";
import { ProductCard } from "@/components/cards";
import type { IProductCard } from "@/shared/types";
import type { Category } from "@/config/product.config";
import { useEffect } from "react";
import { fetchProductCard } from "@/services/requests/product";
import PadingXLayouts from "@/layout/PadingXLayouts";

export function CardGridShop() {
	const searchParams = useSearchParams();
	const initialCategorie = searchParams.get("categorie") || "All";
	const { filter, setFilter } = useShopContext();
	useEffect(() => {
		setFilter((prev) => ({
			...prev,
			categorie: initialCategorie as Category,
		}));
	}, [initialCategorie]);
	const {
		data,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
		isLoading,
		error,
	} = useInfiniteQuery({
		queryKey: ["product_card", initialCategorie, filter.price, filter.sort, 8],
		queryFn: fetchProductCard,
		initialPageParam: 1,
		getNextPageParam: (lastPage, pages) => {
			if (lastPage.isend) return undefined;
			return pages.length + 1;
		},
	});

	if (error) return <Error masage={error.message} />;
	if (isLoading) return <Loading />;

	return (
		<PadingXLayouts>
			<section className='flex flex-col w-full items-center pb-10'>
				<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 py-10 w-full pb-12 md:pb-25'>
					{data?.pages
						?.flatMap((page) => page.cards)
						?.map((item: IProductCard) => (
							<div key={item.product_id} className='w-full h-auto'>
								<ProductCard {...item} product_id={item.product_id} />
							</div>
						))}
				</div>
				{hasNextPage && (
					<button
						className='text-16 font-500 leading-170 text-black border rounded-full border-black w-fit px-10 py-2'
						onClick={() => fetchNextPage()}
						disabled={isFetchingNextPage}
					>
						{isFetchingNextPage ? "Loading..." : "Show more"}
					</button>
				)}
			</section>
		</PadingXLayouts>
	);
}
