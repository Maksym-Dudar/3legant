// "use client";

// import { useSearchParams } from "next/navigation";
// import { useInfiniteQuery } from "@tanstack/react-query";
// import { Error, Loading } from "..";
// import { useShopContext } from "@/provider/ShopContext";
// import { ProductCard } from "@/components/cards";
// import { CategoryFilter, PriceRanges } from "@/config/product.config";
// import { useEffect } from "react";

// export function CardGridShop() {
// 	const searchParams = useSearchParams();
// 	const initialCategory = searchParams.get("category") || "All";
// 	const gropId = searchParams.get("gropId");
// 	const { filter, setFilter } = useShopContext();
// 	useEffect(() => {
// 		setFilter((prev) => ({
// 			...prev,
// 			category: initialCategory as CategoryFilter,
// 		}));
// 	}, [initialCategory]);
// 	const range = PriceRanges[filter.price];
// 	const category = String(filter.category)
// 		.toLocaleUpperCase()
// 		.split(" ")
// 		.join("_")
// 	const {
// 		data,
// 		fetchNextPage,
// 		hasNextPage,
// 		isFetchingNextPage,
// 		isLoading,
// 		error,
// 	} = useInfiniteQuery({
// 		queryKey: [
// 			"product_card",
// 			category,
// 			filter.sort,
// 			8,
// 			range.max,
// 			range.min,
// 			gropId,
// 		] as const,
// 		queryFn: fetchProductCard,
// 		initialPageParam: 1,
// 		getNextPageParam: (lastPage, pages) => {
// 			if (lastPage.isend) return undefined;
// 			return pages.length + 1;
// 		},
// 	});

// 	if (error) return <Error masage={error.message} />;
// 	if (isLoading) return <Loading />;

// 	return (
// 			<section className='flex flex-col w-full items-center pb-10'>
// 				<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 py-10 w-full pb-12 md:pb-25'>
// 					{data?.pages
// 						.flatMap((page) => page)
// 						.map((item: IProductCard) => (
// 							<div key={item.id} className='w-full h-auto'>
// 								<ProductCard {...item} id={item.id} />
// 							</div>
// 						))}
// 				</div>
// 				{hasNextPage && (
// 					<button
// 						className='text-16 font-500 leading-170 text-black border rounded-full border-black w-fit px-10 py-2'
// 						onClick={() => fetchNextPage()}
// 						disabled={isFetchingNextPage}
// 					>
// 						{isFetchingNextPage ? "Loading..." : "Show more"}
// 					</button>
// 				)}
// 			</section>
// 	);
// }
