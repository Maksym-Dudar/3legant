import axios from "axios";
import type { IUser } from "@/shared/types/user";

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

export async function updateUserData(payload: IUser) {
	const res = await axios.post(`https://localhost:4200/user`, payload, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
		withCredentials: true,
	});
	if (res.status != 201) {
		throw new Error(res.statusText);
	}
	return res.data;
}
