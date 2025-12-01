import type { Category } from "@/config/product.config";

export interface IProductPage {
	id: number;
	title: string;
	description: string;
	price: number;
	priceWithoutSale: number;
	sale: number;
	rating: number;
	isNew: boolean;
	offerExpires: Date;
	measurements: string;
	same: ISameColorCard[];
	color: string;
	image: string[];
	category: Category[];
	reviews: number;
}

export interface ISameColorCard {
	color: string;
	id: number;
	image: string;
	isactive: boolean;
}

export interface IComment {
	id: number;
	name: string;
	date: Date;
	rating: number;
	avatar: string;
	comment: string;
}