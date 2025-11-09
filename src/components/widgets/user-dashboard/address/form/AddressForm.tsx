"use client";

import { useUserStore } from "@/services/store/user/store";
import ContactInfo from "./ContactInfo";
import ShippingAddress from "./ShippingAddress";
import { ButtonAction, ErrorToast } from "@/components/ui";
import { useEffect, useState } from "react";
import { useAddressStore } from "@/services/store/address/store";
import { createUserAddress, updateUserAddress } from "@/services/requests/user";
import { getDefaultAddress } from "./DefaultAddress";
import {
	useRouter,
	useSearchParams,
} from "next/dist/client/components/navigation";
import type { IAddress, IAddressCreate } from "@/shared/types/address.type";
import { Mode } from "../type";
import { PAGE } from "@/config/page.config";

export function AddressForm() {
	const searchParams = useSearchParams();
	const router = useRouter();
	const { user } = useUserStore();
	const { addressArray, createAddres, updateAddres } = useAddressStore();
	const [errorToast, setErrorToast] = useState<string | null>(null);
	const [address, setAddress] = useState<IAddressCreate>(getDefaultAddress);

	const rawMode = searchParams.get("mode");
	const rawId = searchParams.get("addressId");
	const mode = Object.values(Mode).includes(rawMode as Mode)
		? (rawMode as Mode)
		: undefined;
	const addressId = rawId ? Number(rawId) : undefined;


	useEffect(() => {
		if (mode === Mode.EDIT && addressId !== undefined) {
			const found = addressArray.find((val) => val.id === addressId);
			if (found) {
				const { id, ...addres } = found;
				setAddress(addres);
			}
		}
	}, [mode, addressId, addressArray]);

	async function onSubmit(e: React.ChangeEvent<HTMLFormElement>) {
		e.preventDefault();
		try {
			if (!user || !user.id) throw new Error("User unathorized");
			if (!address) throw new Error("Address is not initialized");
			if (mode == Mode.CREATE) {
				const res = await createUserAddress({ ...address, userId: user?.id });
				createAddres(res.data);
			}
			if (mode == Mode.EDIT && addressId) {
				const res = await updateUserAddress({
					...address,
					userId: user?.id,
					id: addressId,
				});
				updateAddres(res.data);
			}
			router.push(PAGE.ADDRESS.link);
		} catch (error) {
			setErrorToast(String(error));
		}
	}
	return (
		<form onSubmit={onSubmit} className='flex flex-col w-full gap-15 pb-20'>
			{errorToast && (
				<ErrorToast message={errorToast} onClose={() => setErrorToast(null)} />
			)}
			<ContactInfo {...address} setInfo={setAddress} />
			<ShippingAddress {...address} setInfo={setAddress} />
			<ButtonAction
				type='submit'
				text='Save changes'
				paddingY={3}
				paddingX={10}
				width={"fit"}
			/>
		</form>
	);
}
