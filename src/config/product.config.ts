export const DEFAULT_PRODUCTS_LIMIT = 12;


export const Category = {
	LivingRoom: "Living Room",
	Bedroom: "Bedroom",
	Kitchen: "Kitchen",
	Bathroom: "Bathroom",
	Office: "Office",
} as const;

export type Category = (typeof Category)[keyof typeof Category];

export const CategoryFilter = {
	All: "All Room",
	...Category,
} as const;

export type CategoryFilter = (typeof CategoryFilter)[keyof typeof CategoryFilter];

export const Prices = {
	All: "All Price",
	Price_to_100: "0-100",
	Price_to_200: "100-200",
	Price_to_300: "200-300",
	Price_to_400: "300-400",
	Price_to_500: "400-500",
	Price_over_500: "Over 500",
};
export type Prices = (typeof Prices)[keyof typeof Prices];

export interface IPriseValue {
	min: number;
	max: number;
}

export const PriceRanges: Record<Prices, IPriseValue> = {
	[Prices.All]: { min: 0, max: Infinity },
	[Prices.Price_to_100]: { min: 0, max: 100 },
	[Prices.Price_to_200]: { min: 100, max: 200 },
	[Prices.Price_to_300]: { min: 200, max: 300 },
	[Prices.Price_to_400]: { min: 300, max: 400 },
	[Prices.Price_to_500]: { min: 400, max: 500 },
	[Prices.Price_over_500]: { min: 500, max: Infinity },
};

export type PriceOption = {
	label: Prices;
	value: IPriseValue;
};


export const Sorts = {
	Top_rated: "Top Rated",
	Low_to_high_price: "Low to High Price",
	High_to_low_price: "High to Low Price",
	Newest: "Newest Arrivals",
} as const;

export type Sorts = (typeof Sorts)[keyof typeof Sorts];

