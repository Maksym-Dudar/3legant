import type { Category } from "@/config/product.config";

export type TCreateProduct = {
    title: string;
	productGroupId: number;
	quantityWarehouse: number;
	description: string;
	price: number;
	haveSale: boolean;
	sale?: number | undefined;
	offerExpires?: Date | undefined;
	isNew: boolean;
	color: string;
	measurements: string;
	category: Category[];
};