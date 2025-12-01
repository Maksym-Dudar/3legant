import type { QueryFunctionContext } from "@tanstack/react-query";
import axios from "axios";

export async function fetchProductCard({
	queryKey,
	signal,
	pageParam = 1 ,
}: QueryFunctionContext) {
	const [_key, category, sort, take, topPrice, lowPrice] = queryKey;
	const res = await axios.get("https://localhost:4200/product/shop", {
		params: {
			category: category,
			sort: sort,
			take: take,
			page: pageParam,
			topPrice: topPrice,
			lowPrice: lowPrice,
		},
		signal,
	});

	return res.data;
}

export async function fetchNewArrivals() {
	const res = await axios.get(`https://localhost:4200/product/new`, {params:{ take: 8}});
	return res.data;
}


export async function fetchCardPage({
	queryKey,
	signal,
}: QueryFunctionContext) {
	const [id] = queryKey;
	const res = await axios.get("https://localhost:4200/product/page", {
		params: {
			id: id,
		},
		signal,
	});
	return res.data;
}

export async function fetchComment({ queryKey, signal }: QueryFunctionContext) {
	const [_key, id] = queryKey;
	const res = await axios.get("/api/cardPage/comment", {
		params: {
			id: id,
		},
		signal,
	});
	return res.data;
}