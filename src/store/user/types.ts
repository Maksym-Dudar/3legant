export interface ItemUserType {
	firstName: string;
	email: string;
	exparing: Date;
}
export interface IInitialUserStore {
	firstName: string | null;
	lastName: string | null;
	email: string | null;
	avatar: string | null;
	exparing: Date | null;
}

 interface IAction {
	createUser: (item: ItemUserType) => void;
	removeUser: () => void;

	updateFirstName: (firstName: string) => void;
	updateLastName: (lastName: string) => void;
	updateEmail: (email: string) => void;
	updateAvatar: (avatar: string) => void;
}

export interface IUserStore extends IInitialUserStore, IAction {}
