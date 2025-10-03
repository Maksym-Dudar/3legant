import type { QueryFunctionContext } from "@tanstack/react-query";
import axios from "axios";

export async function fetchProductCard({
	pageParam = 1,
	queryKey,
	signal,
}: QueryFunctionContext) {
	const [_key, categorie, price, sort, limit] = queryKey;
	const res = await axios.get("/api/card/all", {
		params: {
			categorie: categorie,
			price: price,
			sort: sort,
			limit: limit,
			page: pageParam,
		},
		signal,
	});

	return res.data;
}

export async function fetchNewArrivals() {
	const res = await axios.get(`/api/card/new`);
	return res.data;
}


export async function fetchCardPage({
	queryKey,
	signal,
}: QueryFunctionContext) {
	const [id] = queryKey;
	const res = await axios.get("/api/cardPage", {
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