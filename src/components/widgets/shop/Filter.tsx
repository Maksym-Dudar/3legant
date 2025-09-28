"use client"

import { DropdownFilter, DropdownSort } from "@/components/ui";
import { FilterOpen, useShopContext } from "@/provider/ShopContext";
import { Prices, Sorts, Category } from "@/config/product.config";

interface Props {}

export function Filter({}: Props) {
	const { filter, openFilter, setOpenFilter, setFilter } = useShopContext();
	console.log(Object.values(Category));
	return (
		<div className='flex flex-col md:flex-row w-full md:justify-between gap-6 md:gap-0'>
			<div className='flex gap-4 sm:gap-6 flex-col md:flex-row w-full'>
				<DropdownFilter
					label='CATEGORIES'
					value={filter.categorie}
					options={Object.values(Category)}
					onChange={(val) =>
						setFilter((prev) => ({ ...prev, categorie: val as Category }))
					}
					onToggle={() =>
						setOpenFilter((prev) =>
							prev === FilterOpen.categorie
								? FilterOpen.none
								: FilterOpen.categorie
						)
					}
					isOpen={openFilter == FilterOpen.categorie}
					close={() => setOpenFilter(FilterOpen.none)}
				/>
				<DropdownFilter
					label='PRICE'
					value={filter.price}
					options={Object.values(Prices)}
					onChange={(val) =>
						setFilter((prev) => ({ ...prev, price: val as Prices }))
					}
					onToggle={() =>
						setOpenFilter((prev) =>
							prev === FilterOpen.price ? FilterOpen.none : FilterOpen.price
						)
					}
					isOpen={openFilter == FilterOpen.price}
					close={() => setOpenFilter(FilterOpen.none)}
				/>
			</div>
			<DropdownSort
				value={filter.sort}
				options={Object.values(Sorts)}
				onChange={(val) =>
					setFilter((prev) => ({ ...prev, sort: val as Sorts }))
				}
				onToggle={() =>
					setOpenFilter((prev) =>
						prev === FilterOpen.sort ? FilterOpen.none : FilterOpen.sort
					)
				}
				isOpen={openFilter == FilterOpen.sort}
				close={() => setOpenFilter(FilterOpen.none)}
			/>
		</div>
	);
}
