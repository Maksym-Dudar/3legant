import type { Category } from "@/config/product.config";

export interface IProductPage {
	id: number;
	titel: string;
	description: string;
	price: number;
	priceWithoutSale: number;
	sale: number;
	nstar: number;
	isNew: boolean;
	offerExpiresIn: Date;
	measurements: string;
	same: ISameColorCard[];
	color: string;
	images: string[];
	category: Category[];
	reviews: number;
}

export interface ISameColorCard {
	color: string;
	productId: number;
	image: string;
	isactive: boolean;
}

export interface IComment {
	id: number;
	name: string;
	date: Date;
	nstar: number;
	avatar: string;
	comment: string;
}