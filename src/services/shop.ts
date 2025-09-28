import type { QueryFunctionContext } from "@tanstack/react-query";
import axios from "axios";

export async function fetchProductCard({
	pageParam = 1,
	queryKey,
	signal,
}: QueryFunctionContext) {
	const [_key, categorie, price, sort, limit] = queryKey;
	console.log("Fetch");
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