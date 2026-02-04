import type { IUser, IUserBasic } from "@/shared/types/user/user.type";

export interface IInitialUserStore {
	user: IUser | null;
}

interface IAction {
	updateUser: (fields: IUserBasic) => void;
	clearUser: () => void;
}

export interface IUserStore extends IInitialUserStore, IAction {}
