import { useAddress } from "@/features/address/hook/useAddress";
import { useUser } from "@/features/user/hook/useUser";
import { ordersService } from "@/services/requests";
import { useQuery } from "@tanstack/react-query";
import { getCode, getNames } from "country-list";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

export function useCheckout() {
	const sp = useSearchParams();
	const [error, setError] = useState<Error | null>(null);

	const orderId = Number(sp.get("orderId"));

	useEffect(() => {
		if (!orderId) setError(new Error("Order not found"));
	}, [orderId, orderId]);

	const {
		data: orderData,
		isLoading: isLoadingOrder,
		isError: isErrorOrder,
		error: errorOrder,
	} = useQuery({
		queryKey: ["order", orderId],
		queryFn: () => ordersService.getOrder(orderId),
	});
	const {
		addressData,
		isLoading: isLoadingAddress,
		isError: isErrorAddress,
		error: errorAddress,
	} = useAddress();
	const {
		userData,
		isLoading: isLoadingUser,
		isError: isErrorUser,
		error: errorUser,
	} = useUser();
	const addressOptions = useMemo(
		() =>
			addressData?.map((item) => ({
				label: item.name,
				value: item.id,
			})) ?? [],
		[],
	);

	const countryOptions = useMemo(
		() =>
			getNames()
				.map((name) => {
					const code = getCode(name);
					return code ? { label: name, value: code } : null;
				})
				.filter(
					(item): item is { label: string; value: string } => item !== null,
				),
		[],
	);
	return {
		orderData,
		addressData,
		userData,
		addressOptions,
		countryOptions,
		isLoading: isLoadingAddress || isLoadingUser || isLoadingOrder,
		isError: isErrorAddress || isErrorUser || !!error || isErrorOrder,
		error: errorAddress || errorUser || error || errorOrder,
	};
}
