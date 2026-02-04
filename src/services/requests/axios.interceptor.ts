import axios from "axios";
import type { MassageResponse } from "./type";

export const instance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
	withCredentials: true,
});

instance.interceptors.request.use();

instance.interceptors.response.use(
	(res) => res,
	(error) => {
		if (axios.isAxiosError(error)) {
			const serverMessage = (error.response?.data as MassageResponse)?.message;
			return Promise.reject(new Error(serverMessage || "Server error"));
		}
		return Promise.reject(error);
	}
);