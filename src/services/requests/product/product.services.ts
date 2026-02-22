import { instance } from "../axios.interceptor";
import { API } from "@/config/api.config";
import type {
	ICartItem,
	IProductCard,
	IProductDetails,
	IProductGroupSearchCard,
	IProductParams,
	IWishlist,
} from "@/shared/types/product/product.type";
import type { IProductDetailsDto } from "./dto.type";
import categoryParser from "@/utils/categoryParser";
import type {
	IGetDetailsRequest,
	IGetSearchRequest,
	IGetWishlistRequest,
} from "./requests.type";

class ProductService {
	constructor() {}

	async getCards(
		params: IProductParams,
		signal?: AbortSignal,
	): Promise<IProductCard[]> {
		return await instance.get(API.PRODUCT_CARDS, { params, signal });
	}

	async getDetails(
		params: IGetDetailsRequest,
		signal?: AbortSignal,
	): Promise<IProductDetails> {
		const res = await instance.get<IProductDetailsDto>(API.PRODUCT, {
			params,
			signal,
		});
		return {
			...res.data,
			offerExpires: new Date(res.data.offerExpires),
			category: res.data.category.map((val) => {
				return categoryParser(val);
			}),
		};
	}

	async getSearchCards(
		params: IGetSearchRequest,
		signal?: AbortSignal,
	): Promise<IProductGroupSearchCard[]> {
		return await instance.get(API.PRODUCT_SEARCH, { params, signal });
	}

	async getCartCards(
		products: number[],
		signal?: AbortSignal,
	): Promise<ICartItem[]> {
		const params = products.join(",");
		return await instance.get(API.PRODUCT_BAG, { params, signal });
	}

	async getWishlist(
		params: IGetWishlistRequest,
		signal?: AbortSignal,
	): Promise<IWishlist[]> {
		return await instance.get(API.USER_WISHLIST, { params, signal });
	}
}

export const productService = new ProductService();
