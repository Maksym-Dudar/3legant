"use client";

import { DropdownFilter, DropdownSort } from "@/components/ui";
import { FilterOpen, useShopContext } from "@/provider/ShopContext";
import { Prices, Sorts, CategoryFilter } from "@/config/product.config";

export function FilterShop() {
	const { filter, openFilter, setOpenFilter, setFilter } = useShopContext(); // todo use react hook forms
	return (
			<div className='flex flex-col md:flex-row md:justify-between gap-6 md:gap-0 pt-10 md:pt-15 w-full'>
				<div className='flex gap-4 sm:gap-6 flex-col md:flex-row w-full'>
					<DropdownFilter
						label='CATEGORYS'
						value={filter.category}
						options={Object.values(CategoryFilter)}
						onChange={(val) =>
							setFilter((prev) => ({
								...prev,
								category: val as CategoryFilter,
							}))
						}
						onToggle={() =>
							setOpenFilter((prev) =>
								prev === FilterOpen.category
									? FilterOpen.none
									: FilterOpen.category
							)
						}
						isOpen={openFilter == FilterOpen.category}
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
