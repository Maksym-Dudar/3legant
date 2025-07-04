export interface cardPageType {
	id: number;
	name: string;
	description: string;
	price: number;
	sale: number;
	nstar: number;
	isnew: boolean;
	offerExpiresIn: Date;
	measurements: string;
	same: sameColorCard[];
	color: string;
	images: string[];
	category: string;
	reviews: number;
}

interface sameColorCard {
	color: string;
	href: string;
	image: string;
	isactive: boolean;
}
