import type { CreateProductSchema } from "@/features/admin/model/create-product.schema";

export interface IGetSearchRequest {
	search: string;
}

export interface IGetWishlistRequest {
	ids: string;
}

export interface ICreateProduct extends CreateProductSchema {}