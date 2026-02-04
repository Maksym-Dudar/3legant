export interface IProductDetailsDto {
	id: number;
	productGroupId: number;
	price: number;
	priceWithSale: number;
	offerExpires: string;
	measurements: string;
	rating: number;
	sale: number;
	isNew: boolean;
	image: string[];
	category: string[];
	reviews: number;
	color: string;
	description: string;
	title: string;
}