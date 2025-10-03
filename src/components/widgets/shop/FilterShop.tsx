"use client";

import { DropdownFilter, DropdownSort } from "@/components/ui";
import { FilterOpen, useShopContext } from "@/provider/ShopContext";
import { Prices, Sorts, Category } from "@/config/product.config";
import PadingXLayouts from "@/layout/PadingXLayouts";

export function FilterShop() {
	const { filter, openFilter, setOpenFilter, setFilter } = useShopContext();
	return (
		<PadingXLayouts>
			<div className='flex flex-col md:flex-row md:justify-between gap-6 md:gap-0 pt-10 md:pt-15 w-full'>
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
		</PadingXLayouts>
	);
}
