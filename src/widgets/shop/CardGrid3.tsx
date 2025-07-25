"use client";

import { categories, prices, sorts } from "@/shared/constants/filters";
import PadingXLayouts from "@/shared/layout/PadingXLayouts";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { DropdownFilter } from "@/shared/ui/DropdownFilter";
import { DropdownSort } from "@/shared/ui/DropdownSort";
import axios from "axios";

async function fetchProductCard({ categorie, price, sort, limit, page}: ) {
	axios.get("/api/card/all", {
		params: {
			categorie: categorie,
			price: price,
			sort: sort,
			limit: limit,
			page: page,
		},
	});
}

export function CardGrid3() {
	const searchParams = useSearchParams();
	const initialCategorie = searchParams.get("categorie") || "All";

	const router = useRouter();
	const pathname = usePathname();

	const [filter, setFilter] = useState({
		categorie: initialCategorie,
		price: prices[0],
		sort: sorts[0],
	});
	const [openFilter, setOpenFilter] = useState< "categorie" | "price" | "sort" | null >(null);
	
	const [page, setPage] = useState<number>(1);

	useEffect(() => {
		
		// }).then(({ data }) => {
		// 	setData(data.data);
		// 	setIsEnd(data.isEnd);
		// })
		// 	.catch((error) => {
		// 		console.log("Error fetch data");
		// 		setData([]);
		// 	})
		// 	.finally(() => { };
	},[])
	return (
		<PadingXLayouts>
			<div className='flex flex-col justify-center items-center pt-15 pb-25 w-full'>
				<div className='flex justify-between w-full'>
					<div className='flex flex-row w-full justify-between'>
						<div className='flex gap-6'>
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
					{/* <div className='grid grid-cols-4 gap-6 py-10 w-full'>
										{data?.map((item) => (
											<div key={item.id} className='w-full h-auto'>
												<Card key={item.id} {...item} />
											</div>
										))}
									</div>
											{!isEnd && (
												<button
													className='text-16 font-500 leading-170 text-black border-1 rounded-full border-black w-fit px-10 py-2'
													onClick={() => setPage((prev) => prev + 1)}
													disabled={loading}
												>
													Show more
												</button>
												)
											} */}
				</div>
			</div>
		</PadingXLayouts>
	);
}
