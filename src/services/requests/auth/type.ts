export interface ISignIn {
	email: string;
	password: string;
}

export interface ISignUp {
	name: string;
	email: string;
	password: string;
	confirmPassword: string;
	agreeWithPolicy: boolean;
}

export interface IForgotPassword {
	email: string;
	otpCode: number;
	password: string;
	confirmPassword: string;
}

export interface IResetPassword {
	oldPassword: string;
	newPassword: string;
}