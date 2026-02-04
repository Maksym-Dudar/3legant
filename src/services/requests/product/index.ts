// import type { QueryFunctionContext } from "@tanstack/react-query";
// import axios from "axios";

// export async function fetchProductCard({
// 	queryKey,
// 	signal,
// 	pageParam = 1,
// }: QueryFunctionContext) {
// 	const [_key, category, sort, take, topPrice, lowPrice, gropId] = queryKey;
// 	const params: any = {
// 		category,
// 		sort,
// 		take,
// 		page: pageParam,
// 		topPrice,
// 		lowPrice,
// 	};
// 	if (gropId) {
// 		params.gropId = gropId;
// 	}
// 	const res = await axios.get("https://localhost:4200/product/shop", {
// 		params,
// 		signal,
// 	});
// 	console.log(res);

// 	return res.data;
// }

// export async function fetchNewArrivals() {
// 	const res = await axios.get(`https://localhost:4200/product/new`, {
// 		params: { take: 8 },
// 	});
// 	return res.data;
// }

// export async function fetchCardPage({
// 	queryKey,
// 	signal,
// }: QueryFunctionContext) {
// 	const [id] = queryKey;
// 	const res = await axios.get("https://localhost:4200/product/page", {
// 		params: {
// 			id: id,
// 		},
// 		signal,
// 	});
// 	return res.data;
// }

// export async function fetchComment({ queryKey, signal }: QueryFunctionContext) {
// 	const [_key, id] = queryKey;
// 	const res = await axios.get(
// 		"https://localhost:4200/comment",
// 		{
// 			params: {
// 				product_id: id,
// 			},
// 			signal,
// 		}
// 	);
// 	console.log(res)
// 	return res.data;
// }

// export async function getSearchProduct({ signal }: QueryFunctionContext) {
// 	const res = await axios.get("https://localhost:4200/product/search", {
// 		signal,
// 	});
// 	return res.data;
// }

// export async function creaeteComment({
// 	rating,
// 	text,
// 	productId,
// }: {
// 	rating: number;
// 	text: string;
// 	productId: number;
// }) {
// 	const res = await axios.post(
// 		"https://localhost:4200/comment",
// 		{ rating, text, productId },
// 		{
// 			headers: {
// 				"Content-Type": "application/json",
// 			},
// 			withCredentials: true,
// 		}
// 	);
// 	console.log(res)
// 	return res.data;
// }

