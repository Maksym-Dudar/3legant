import type { IUser } from "@/shared/types/user";

export interface IInitialUserStore {
	user: IUser | null;
}

interface IAction {
	updateUser: (fields: Partial<IUser>  & {id: number}) => void;
	clearUser: () => void;
}

export interface IUserStore extends IInitialUserStore, IAction {}
