export interface IUser {
	id: number;
	email: string;
	firstName: string;
	lastName: string;
	avatar: string;
}

export type IUserBasic = Partial<IUser> & Pick<IUser, "id" | "email" | "firstName">
	
export interface IOrders {
	id: number;
	createdAt: Date;
	status: string;
	price: number;
}

export interface IWishlist {
	id: number;
	color: string;
	price: number;
	image: string;
	title: string;
}

