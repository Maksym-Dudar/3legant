import type { Category } from "@/config/product.config";

export interface IProductCard {
	id: number;
	productGroupId: number;
	description: string;
	title: string;
	price: number;
	rating: number;
	sale: number;
	isNew: boolean;
	image: string;
	quantityWarehouse: number;
	category: Category[];
	color: string;
	offerExpires: Date;
	measurements: string;
}
