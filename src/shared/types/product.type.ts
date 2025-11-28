import type { Category } from "@/config/product.config";

export interface IProductCard {
	productId: number;
	productGroupId: number;
	description: string;
	title: string;
	price: number;
	nstar: number;
	sale: number;
	isNew: boolean;
	img: string;
	quantityWarehouse: number;
	category: Category[];
	color: string;
	offerExpires: Date;
	measurements: string;
}
