import type { IBagCard } from "@/shared/types/bag.type";
import { quantityProductInBagStore } from "@/services/store/bag/store";
import { useRouter } from "next/router";

export function calculateSubtotal(data: IBagCard[]) {
	if (!data.length) return 0;
	return data.reduce((sum, item) => {
		const quantity = quantityProductInBagStore(item.product_id) ?? 0;
		return sum + item.price * quantity;
	}, 0);
}

export function checkout() {
	const router = useRouter();
	router.push("/checkout");
}
