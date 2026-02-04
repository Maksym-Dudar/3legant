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
	firstName: string;
	createdAt: Date;
	rating: number;
	avatar: string;
	text: string;
}