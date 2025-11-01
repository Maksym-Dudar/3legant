import type { IUser } from "@/shared/types/user";

export interface IInitialUserStore {
	user: IUser | null;
}

interface IAction {
	updateUser: (fields: Partial<IUser>) => void;
	clearUser: () => void;
}

export interface IUserStore extends IInitialUserStore, IAction {}
