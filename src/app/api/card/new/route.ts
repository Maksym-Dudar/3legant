import type { IProductCard } from "@/shared/types";
import { NextResponse } from "next/server";

const cards: IProductCard[] = [
	{
		product_id: 1,
		title: "Loveseat Sofa",
		price: 400,
		nstar: 4,
		sale: 0.5,
		isnew: true,
		img: `/request/images/card/id1.png`,
		categorie: "Furniture",
	},
	{
		product_id: 2,
		title: "Table Lamp",
		price: 40,
		nstar: 5,
		sale: 0.4,
		isnew: true,
		img: `/request/images/card/id2.png`,
		categorie: "Lighting",
	},
	{
		product_id: 3,
		title: "Beige Table Lamp",
		price: 24,
		nstar: 4,
		sale: 0.5,
		isnew: true,
		img: `/request/images/card/id3.png`,
		categorie: "Lighting",
	},
	{
		product_id: 4,
		title: "Bamboo basket",
		price: 19.56,
		nstar: 5,
		sale: 0.33,
		isnew: true,
		img: `/request/images/card/id4.png`,
		categorie: "Decor",
	},
	{
		product_id: 5,
		title: "Toasted",
		price: 239.99,
		nstar: 4,
		sale: 0.0,
		isnew: false,
		img: `/request/images/card/id5.png`,
		categorie: "Appliances",
	},
];

export async function GET ( req: Request) {
    
    return NextResponse.json(cards);
}

