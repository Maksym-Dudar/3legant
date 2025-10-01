import { backendUrl } from "@/constants/url";
import type { IBagCard } from "@/shared/types/bag.type";
import { quantityProductInBagStore } from "@/store/bag/store";
import type { QueryFunctionContext } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/router";

export async function fetchBagStorage({
	queryKey,
	signal,
}: QueryFunctionContext): Promise<IBagCard[]> {
	const [_key, bag] = queryKey as ["bag", Map<number, number>];
	const idArray = Array.from(bag.keys()).join(",");
	const res = await axios.get(`${backendUrl}/bag`, {
		params: { id: idArray },
		signal,
	});
	return res.data;
}

export function calculateSubtotal(data: IBagCard[]) {
	let subtotal = 0;
	data.map(
		(item) =>
			(subtotal += item.price * (quantityProductInBagStore(item.id) ?? 0))
	);
	return subtotal;
}

export function checkout() {
	const router = useRouter()
	router.push("/checkout");
}
