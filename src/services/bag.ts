import type { IBagCard } from "@/shared/types/bag.type";
import { quantityProductInBagStore } from "@/services/store/bag/store";
import { useRouter } from "next/router";

export function calculateSubtotal(data: IBagCard[]) {
	let subtotal = 0;
	console.log(data);
	data.map(
		(item) =>
			(subtotal += item.price * (quantityProductInBagStore(item.product_id) ?? 0))
	);
	return subtotal;
}

export function checkout() {
	const router = useRouter();
	router.push("/checkout");
}
