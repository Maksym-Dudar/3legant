import { useAddress } from "@/features/address/hook/useAddress";
import { useUser } from "@/features/user/hook/useUser";
import { getCode, getNames } from "country-list";
import { useMemo } from "react";

export function useCheckout() {
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
		addressData,
		userData,
		addressOptions,
		countryOptions,
		isLoading: isLoadingAddress || isLoadingUser,
		isError: isErrorAddress || isErrorUser,
		error: errorAddress || errorUser,
	};
}
