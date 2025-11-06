export interface IUser {
	id: number;
	firstName?: string | null;
	lastName?: string | null;
	email?: string | null;
	avatar?: string | null;
	password?: null;

}

export interface IPassword {
	oldPassword?: string;
	newPassword?: string;
}


