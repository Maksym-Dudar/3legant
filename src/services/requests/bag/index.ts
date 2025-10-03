import type { IBagCard } from "@/shared/types/bag.type";
import type { QueryFunctionContext } from "@tanstack/react-query";
import axios from "axios";

export async function fetchBagStorage({
	queryKey,
	signal,
}: QueryFunctionContext): Promise<IBagCard[]> {
	const [_key, bag] = queryKey as ["bag", Map<number, number>];
	const idArray = Array.from(bag.keys()).join(",");
	const res = await axios.get(`${process.env.BACKEND_URL}/bag`, {
		params: { id: idArray },
		signal,
	});
	return res.data;
}
