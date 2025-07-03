export interface CardType {
	id: number;
	title: string;
	price: number;
	nstar: number;
	sale: number;
	isnew: boolean;
	img: string;
	categorie: string;
}

export interface CardBagType {
	id: number;
	title: string;
	price: number;
	img: string;
	color: string;
	quantity: number;
}