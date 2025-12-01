import type { Category } from "@/config/product.config";

export interface ICreateProduct {
	id?: number;
	productGroupId: number;
	title: string;
	quantityWarehouse: number;
	description: string;
	price: number;
	haveSale: boolean;
	sale?: number;
	offerExpires?: Date;
	isNew: boolean;
	color: string;
	measurements: string;
	category: string[];
	image: File[];
}