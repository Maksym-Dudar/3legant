"use client"

import { productService } from "@/services/requests/product/product.services";
import type { ICartItem } from "@/shared/types/product/product.type";
import { useCartStore } from "@/store/cart/store";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import calcSubtotal from "../lib/calcSubtotal";
import calcTotal from "../lib/calcTotal";
import { useRouter } from "next/navigation";
import { PAGE } from "@/config";

export function useCart() {
	const router = useRouter();
	const cart = useCartStore((state) => state.cart);
	const productIds = useMemo(() => cart.map((item) => item.id).sort(), [cart]);
	const { data, isLoading, isError, error } = useQuery<ICartItem[], Error>({
		queryKey: ["cart", productIds],
		queryFn: ({ signal }) => productService.getCartCards(productIds, signal),
		enabled: productIds.length > 0,
	});

	const subtotal = useMemo(() => calcSubtotal(cart, data ?? []), [cart, data]);

	const total = useMemo(() => calcTotal(subtotal, 0), [subtotal]);

	const onCheckout = () => router.push(PAGE.CART.link)
	return {
		data,
		isLoading,
		isError,
		error,
		subtotal,
		total,
		onCheckout,
	};
}
