export interface IUpdateAvatarResponse {
	id: number;
	email: string;
	avatar: string;
}

export interface IOrdersDto {
	id: number;
	createdAt: Date;
	status: string;
	price: number;
}