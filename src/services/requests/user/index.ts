// import axios from "axios";
// import type { IPassword, IUser } from "@/shared/types/user";
// import type { IAddress, IAddressCreate } from "@/shared/types/address.type";
// import type { QueryFunctionContext } from "@tanstack/react-query";
//  interface IApiError {
// 	message: string;
// }
// export async function sendAvatar(file: File) {
//       try {
// 				const formData = new FormData();
// 				formData.append("file", file);
// 				const res = await axios.put(
// 					`https://localhost:4200/user/avatar`,
// 					formData,
// 					{
// 						headers: {
// 							"Content-Type": "multipart/form-data",
// 						},
// 						withCredentials: true,
// 					}
// 				);
// 				return res;
// 			} catch (error) {
// 				if (axios.isAxiosError(error)) {
// 					const serverMessage = (error.response?.data as IApiError)?.message;

// 					throw new Error(serverMessage || "Server error");
// 				}

// 				throw error;
// 			}
// }
// export async function getUserData() {
// 	const res = await axios.get("https://localhost:4200/user", {
// 		withCredentials: true,
// 	});
// 	if (res.status != 200) {
// 		throw new Error(res.statusText);
// 	}
// 	return res;
// }

// export async function updateUserData(payload: IUser & IPassword) {
// 	const res = await axios.put(`https://localhost:4200/user`, payload, { //put
// 		headers: {
// 			"Content-Type": "application/json",
// 		},
// 		withCredentials: true,
// 	});
// 	if (res.status != 201) {
// 		throw new Error(res.statusText);
// 	}
// 	return res;
// }

// export async function createUserAddress(
// 	payload: IAddressCreate 
// ) {
// 	const data = { ...payload, country: payload.country.value };
// 	const res = await axios.post(`https://localhost:4200/user/address`, data, {
// 		headers: {
// 			"Content-Type": "application/json",
// 		},
// 		withCredentials: true,
// 	});
// 	if (res.status != 201) {
// 		throw new Error(res.statusText);
// 	}
// 	return res;
// }

// export async function updateUserAddress(
// 	payload: IAddress & { userId: number }
// ) {
// 	const data = { ...payload, country: payload.country.value };
// 	const res = await axios.put(`https://localhost:4200/user/address`, data, {
// 		headers: {
// 			"Content-Type": "application/json",
// 		},
// 		withCredentials: true,
// 	});
// 	if (res.status != 200) {
// 		throw new Error(res.statusText);
// 	}
// 	return res;
// }

// export async function getUserOrders({
// 	queryKey,
// 	signal,
// }: QueryFunctionContext) {
// 	const [_key, userId] = queryKey;
// 	const res = await axios.get("https://localhost:4200/user/orders", {
// 		params: {
// 			userId: userId,
// 		},
// 		signal,
// 	});
// 	return res.data;
// }

// export async function getUserWishlist({
// 	queryKey,
// 	signal,
// }: QueryFunctionContext) {
// 	const [_key, wishlist] = queryKey;
// 	const res = await axios.get("https://localhost:4200/user/orders", {
// 		params: {
// 			wishlist: wishlist,
// 		},
// 		signal,
// 	});
// 	return res.data;
// }
