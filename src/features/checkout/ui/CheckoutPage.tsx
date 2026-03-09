"use client";

import { useCart } from "../../cart/hook/useCart";
import { useForm } from "react-hook-form";
import { CheckoutSchema } from "../model/checkout.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { OderSummary } from "./OderSummary";
import { ErrorToast, Input } from "@/components/ui";
import { ContactInformation } from "./ContactInformation";
import { ShippingAddress } from "./ShippingAddress";
import { AddressMode } from "./AddressMode";
import { useCheckout } from "../hook/useCheckout";
import { Loading } from "@/components/widgets";
import { useErrorToast } from "@/hooks/useErrorToast";

type AddressMode = "existing" | "new";

export function CheckoutPage() {
	const { data: cartData, shippingMethod, total, subtotal } = useCart();
	const {
		addressData,
		userData,
		addressOptions,
		countryOptions,
		isLoading,
		isError,
		error,
	} = useCheckout();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
		control,
	} = useForm<CheckoutSchema>({
		resolver: zodResolver(CheckoutSchema),
	});
		const { errorMessage, closeError } = useErrorToast( error, isError );

	const handleAddressSelect = (addressId: number) => {
		if (!addressData || !userData) return;

		const found = addressData.find((item) => item.id === addressId);
		if (!found) return;

		const { id: addressIdValue, name, ...restAddress } = found;
		const { id: userId, avatar, ...restUser } = userData;

		const existingAddress = { ...restAddress, ...restUser };

		reset(existingAddress);
	};

		const submit = () =>
			handleSubmit((data) => {});


	if (isLoading) return <Loading />;

	return (
		<>
			{!!errorMessage && (
				<ErrorToast message={errorMessage} onClose={closeError} />
			)}
			<div className='flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 xl:gap-16 py-10 md:py-15 lg:py-20 '>
				<form className='flex flex-col w-full gap-6' onSubmit={submit}>
					<AddressMode
						options={addressOptions}
						handleAddressSelect={handleAddressSelect}
					/>
					<ContactInformation register={register} errors={errors} />
					<ShippingAddress
						register={register}
						errors={errors}
						control={control}
						options={countryOptions}
					/>
				</form>
				<OderSummary
					data={cartData || []}
					shippingMethod={shippingMethod}
					total={total}
					subtotal={subtotal}
				/>
			</div>
		</>
	);
}
