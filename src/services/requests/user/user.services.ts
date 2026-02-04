import type {
	IGetWishlistRequest,
	IUpdateAvatarRequest,
	IUpdateUserRequest,
} from "@/services/requests/user/requests.type";
import { instance } from "../axios.interceptor";
import { API } from "@/config/api.config";
import type { AxiosResponse } from "axios";
import type { IOrders, IUser, IWishlist } from "@/shared/types/user/user.type";
import type { IAddress } from "@/shared/types/address/address.type";
import type { IOrdersDto, IUpdateAvatarResponse } from "./dto.type";

class UserService {
	constructor() {}

	updateAvatar(
		payload: IUpdateAvatarRequest
	): Promise<AxiosResponse<IUpdateAvatarResponse>> {
		const formData = new FormData();
		formData.append("file", payload.avatar);
		return instance.put(API.USER_AVATAR, formData);
	}

	getUser(signal?: AbortSignal): Promise<AxiosResponse<IUser>> {
		return instance.get(API.USER, { signal });
	}

	updateUser(payload: IUpdateUserRequest): Promise<AxiosResponse<IUser>> {
		return instance.patch(API.USER, payload);
	}

	createAddress(payload: IAddress): Promise<AxiosResponse<IAddress>> {
		return instance.post(API.USER_ADDRESS, payload);
	}

	updateAddress(payload: IAddress): Promise<AxiosResponse<IAddress>> {
		return instance.put(API.USER_ADDRESS, payload);
	}

	async getOrders(signal?: AbortSignal): Promise<AxiosResponse<IOrders[]>> {
		const res = await instance.get<IOrdersDto[]>(API.USER_ORDERS, { signal });
		const data = res.data.map((val) => {
			return { ...val, createdAt: new Date(val.createdAt) };
		});
		return { ...res, data };
	}

	getWishlist(
		params: IGetWishlistRequest,
		signal?: AbortSignal
	): Promise<AxiosResponse<IWishlist[]>> {
		return instance.get(API.USER_WISHLIST, { params, signal });
	}
}

export const userService = new UserService();
