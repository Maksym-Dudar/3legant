import type { IBagCard } from "@/shared/types/bag.type";
import type { QueryFunctionContext } from "@tanstack/react-query";
import axios from "axios";

export async function fetchBagStorage({
	queryKey,
	signal,
}: QueryFunctionContext): Promise<IBagCard[]> {
	const [_key, arrayProductInBag] = queryKey as ["bag", Map<number, number>];
	const idArray = Array.from(arrayProductInBag.keys()).join(",");
	const res = await axios.get("https://localhost:3000/api/bag", {
		params: { id: idArray },
		signal,
	});
	return res.data;
}
