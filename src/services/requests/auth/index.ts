import axios from "axios";
import type { IForgotPassword, IResetPassword, ISignIn, ISignUp } from "./type";

export async function signIn(payload: ISignIn) {
	const res = await axios.post(
		`https://localhost:4200/auth/sign-in`,
		{
			email: payload.email,
			password: payload.password,
		},
		{
			headers: {
				"Content-Type": "application/json",
			},
			withCredentials: true,
		}
	);
	if (res.status != 201) {
		throw new Error("Помилка авторизації");
	}
	return res.data;
}

export async function signUp(payload: ISignUp) {
	const res = await axios.post(
		`https://localhost:4200/auth/sign-up`,
		{
			first_name: payload.name,
			email: payload.email,
			password: payload.password,
		},
		{
			headers: {
				"Content-Type": "application/json",
			},
			withCredentials: true,
		}
	);
	if (res.status != 201) {
		throw new Error("Помилка авторизації");
	}
	return res.data;
}

export async function forgotPassword(payload: IForgotPassword) {
	const res = await axios.post(
		`https://localhost:4200/auth/reset-password-otp`,
		{
			email: payload.email,
			password: payload.password,
			otp: payload.otpCode,
		},
		{
			headers: {
				"Content-Type": "application/json",
			},
			withCredentials: true,
		}
	);
	console.log(res)
	if (res.status != 201) {
		throw new Error("Помилка авторизації");
	}
	return res.data;
}

export async function sendOtpCode(email: string) {
	axios.post(
		`https://localhost:4200/auth/otpcode`,
		{
			email: email,
		},
		{
			headers: {
				"Content-Type": "application/json",
			},
			withCredentials: true,
		}
	);
}

export async function resetPassword(payload: IResetPassword) {
	const res = await axios.post(
		`https://localhost:4200/reset-password-token`,
		payload,
		{
			headers: {
				"Content-Type": "application/json",
			},
			withCredentials: true,
		}
	);
	if (res.status != 200) {
		throw new Error(res.statusText);
	}
	return res.data;
}

