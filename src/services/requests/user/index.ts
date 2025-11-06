import axios from "axios";
import type { IPassword, IUser } from "@/shared/types/user";
import type { IAddress, IAddressCreate } from "@/shared/types/address.type";

export async function sendAvatar(file: File) {
	const formData = new FormData();
	formData.append("file", file);
	const res = await axios.post(
		`https://localhost:4200/user/avatar`,
		formData,
		{
			headers: {
				"Content-Type": "multipart/form-data",
			},
			withCredentials: true,
		}
	);
	if (res.status != 201) {
		throw new Error(res.statusText);
	}
	return res.data;
}

export async function updateUserData(payload: IUser & IPassword) {
	const res = await axios.post(`https://localhost:4200/user/update`, payload, {
		headers: {
			"Content-Type": "application/json",
		},
		withCredentials: true,
	});
	if (res.status != 201) {
		throw new Error(res.statusText);
	}
	return res;
}


export async function createUserAddress(payload: IAddressCreate & {userId: number} ) {
	const data = { ...payload, country: payload.country.value };
	const res = await axios.post(`https://localhost:4200/user/address/`, data, {
		headers: {
			"Content-Type": "application/json",
		},
		withCredentials: true,
	});
	if (res.status != 201) {
		throw new Error(res.statusText);
	}
	return res;
}

export async function updateUserAddress(payload: IAddress & { userId: number }) {
	const data = { ...payload, country: payload.country.value};
	const res = await axios.put(`https://localhost:4200/user/address/`, data, {
		headers: {
			"Content-Type": "application/json",
		},
		withCredentials: true,
	});
	if (res.status != 200) {
		throw new Error(res.statusText);
	}
	return res;
}

