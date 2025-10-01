// import { authUrl } from "@/constants/url";
// import { updateUserData } from "@/store/user/store";
// import type { QueryFunctionContext } from "@tanstack/react-query";
// import axios from "axios";

// export async function createUser({ queryKey, signal }: QueryFunctionContext) {
// 	const [_key, name, email, password] = queryKey;

// 	const res = await axios.post(
// 		`${authUrl}/signup"`,
// 		{
// 			params: {
// 				name: name,
// 				email: email,
// 				password: password,
// 			},
// 			signal,
// 		},
// 		{
// 			headers: {
// 				"Content-Type": "application/json",
// 			},
// 			withCredentials: true,
// 		}
// 	);
	
// 	updateUserData(res.data);

// 	return res;
// }

// export async function getUser({ queryKey, signal }: QueryFunctionContext) {
// 	const [_key, email, password] = queryKey;

// 	const res = await axios.post(
// 		`${authUrl}/signin"`,
// 		{
// 			params: {
// 				email: email,
// 				password: password,
// 			},
// 			signal,
// 		},
// 		{
// 			headers: {
// 				"Content-Type": "application/json",
// 			},
// 			withCredentials: true,
// 		}
// 	);

// 	return res.data;
// }

// export async function updatePasswordUser({ queryKey, signal }: QueryFunctionContext) {
// 	const [_key, email, password, otpCode] = queryKey;

// 	const res = await axios.post(
// 		`${authUrl}/reset_password"`,
// 		{
// 			params: {
// 				email: email,
// 				password: password,
// 				otp: otpCode,
// 			},
// 			signal,
// 		},
// 		{
// 			headers: {
// 				"Content-Type": "application/json",
// 			},
// 			withCredentials: true,
// 		}
// 	);

// 	return res.data;
// }

