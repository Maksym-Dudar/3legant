import axios from "axios";
import type { IForgotPassword, ISignIn, ISignUp } from "./type";

export async function signIn(payload: ISignIn) {
	const res = await axios.post(
		`${process.env.AUTH_URL}/sign-in`,
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
		`${process.env.AUTH_URL}/sign-up`,
		{
			name: payload.name,
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
		`${process.env.AUTH_URL}/forgot-password`,
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
	if (res.status != 200) {
		throw new Error("Помилка авторизації");
	}
	return res.data;
}

export async function sendOtpCode(email: string) {
	axios.post(
		`${process.env.AUTH_URL}/otpcode`,
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