"use client";

import { Prices, Sorts, Category } from "@/config/product.config";
import {
	createContext,
	useContext,
	useMemo,
	useState,
	type Dispatch,
	type ReactNode,
	type SetStateAction,
} from "react";

interface IFilterState {
	categorie: Category;
	price: Prices;
	sort: Sorts;
}

export enum FilterOpen { "categorie" , "price" , "sort", "none"};

interface ShopContextType {
	filter: IFilterState;
	setFilter: Dispatch<SetStateAction<IFilterState>>;
	openFilter: FilterOpen ;
	setOpenFilter: Dispatch<SetStateAction<FilterOpen>>;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export function ShopProvider({ children }: { children: ReactNode }) {
	const [filter, setFilter] = useState<IFilterState>({
		categorie: Category.All,
		price: Prices.All,
		sort: Sorts.Top_rated,
	});
	const [openFilter, setOpenFilter] = useState<FilterOpen>(FilterOpen.none);

	const contextValue = useMemo(
		() => ({
			filter,
			setFilter,
			openFilter,
			setOpenFilter,
		}),
		[filter, openFilter, setFilter, setOpenFilter]
	);
	return (
		<ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
	);
}

export function useShopContext() {
	const context = useContext(ShopContext);
	if (!context) {
		throw new Error("useShopContext must be used within a ShopProvider");
	}
	return context;
}
