import type { IProductDetails } from "@/shared/types/product/product.type";
import type { QueryFunctionContext } from "@tanstack/react-query";
import axios from "axios";

export async function getProductGroup({
	queryKey,
	signal,
}: QueryFunctionContext) {
	const res = await axios.get(`https://localhost:4200/product/group`, {
		signal,
	});
	if (res.status != 200 || !res.data) {
		throw new Error("Помилка отримання груп");
	}

	return res.data;
}

export async function createProduct(payload: IProductDetails) {
	const formData = new FormData();

	payload.image.forEach((file, i) => {
		formData.append(`file${i}`, file);
	});

	const { image, ...rest } = payload;
	Object.entries(rest).forEach(([key, value]) => {
		formData.append(key, String(value));
	});
	const res = await axios.post(`https://localhost:4200/product`, formData, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
		withCredentials: true,
	});

	if (res.status !== 201) {
		throw new Error(res.statusText);
	}
	return res.data;
}
