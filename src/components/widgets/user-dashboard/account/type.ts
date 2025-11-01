export interface IUserInfo {
	firstName: string;
	lastName: string;
	email: string;
}

export interface IUserSecurity {
	oldPassword: string;
	newPassword: string;
	confirmNewPassword: string;
}
