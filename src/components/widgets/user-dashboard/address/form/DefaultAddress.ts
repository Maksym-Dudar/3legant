import type {
	IAddress,
	IAddressCreate,
} from "@/shared/types/address/address.type";

export function getDefaultAddress(): IAddressCreate {
	return {
		firstName: "",
		lastName: "",
		phoneNumber: "",
		email: "",
		country: { label: "", value: "" },
		state: "",
		city: "",
		street: "",
		buildingNumber: "",
		zipCode: "",
	};
}
