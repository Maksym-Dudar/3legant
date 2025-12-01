export enum CategoryFilter {
	All = "All",
	LivingRoom = "Living Room",
	Bedroom = "Bedroom",
	Kitchen = "Kitchen",
	Bathroom = "Bathroom",
	Office = "Office",
}

export enum Category {
	LivingRoom = "Living Room",
	Bedroom = "Bedroom",
	Kitchen = "Kitchen",
	Bathroom = "Bathroom",
	Office = "Office",
}


export enum Prices {
	All = "All Price",
	Price_to_100 = "0-100",
	Price_to_200 = "100-200",
	Price_to_300 = "200-300",
	Price_to_400 = "300-400",
	Price_to_500 = "400-500",
}

export const PriceRanges: Record<Prices, { min: number; max: number }> = {
	[Prices.All]: { min: 0, max: Infinity },
	[Prices.Price_to_100]: { min: 0, max: 100 },
	[Prices.Price_to_200]: { min: 100, max: 200 },
	[Prices.Price_to_300]: { min: 200, max: 300 },
	[Prices.Price_to_400]: { min: 300, max: 400 },
	[Prices.Price_to_500]: { min: 400, max: 500 },
};

export enum Sorts {
	Top_rated = "Top Rated",
	Low_to_high_price = "Price: Low to High",
	High_to_low_price = "Price: High to Low",
	Newest = "Newest Arrivals",
}
