export interface IUser {
	firstName?: string | null;
	lastName?: string | null;
	email?: string | null;
	avatar?: string | null;
}

export interface IInitialUserStore {
	user: IUser | null;
}

interface IAction {
	updateUser: (fields: Partial<IUser>) => void;
	clearUser: () => void;
}

export interface IUserStore extends IInitialUserStore, IAction {}
