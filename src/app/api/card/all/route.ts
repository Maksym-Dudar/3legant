import type { IProductCard } from "@/shared/types";
import { NextResponse } from "next/server";

const card: IProductCard[] = [
	{
		id: 1,
		title: "Loveseat Sofa",
		price: 400,
		nstar: 4,
		sale: 0.5,
		isnew: true,
		categorie: "Living Room",
		img: `/request/images/card/id1.png`,
	},
	{
		id: 2,
		title: "Table Lamp",
		price: 40,
		nstar: 5,
		sale: 0.4,
		isnew: true,
		categorie: "Living Room",
		img: `/request/images/card/id2.png`,
	},
	{
		id: 3,
		title: "Beige Table Lamp",
		price: 24,
		nstar: 4,
		sale: 0.5,
		isnew: true,
		categorie: "Living Room",
		img: `/request/images/card/id3.png`,
	},
	{
		id: 4,
		title: "Bamboo basket",
		price: 19.56,
		nstar: 5,
		sale: 0.33,
		isnew: true,
		categorie: `Bedroom`,
		img: `/request/images/card/id4.png`,
	},
	{
		id: 5,
		title: "Toasted",
		price: 239.99,
		nstar: 4,
		sale: 0.0,
		isnew: false,
		categorie: `Kitchen`,
		img: `/request/images/card/id5.png`,
	},
	{
		id: 6,
		title: "Cozy Sofa",
		price: 239.99,
		nstar: 4,
		sale: 0.0,
		isnew: false,
		categorie: `Living Room`,
		img: `/request/images/card/id6.png`,
	},
	{
		id: 7,
		title: "White Drawer unit",
		price: 239.99,
		nstar: 4,
		sale: 0.0,
		isnew: false,
		categorie: `Office`,
		img: `/request/images/card/id7.png`,
	},
	{
		id: 8,
		title: "Black Tray table",
		price: 239.99,
		nstar: 5,
		sale: 0.0,
		isnew: false,
		categorie: `Living Room`,
		img: `/request/images/card/id8.png`,
	},
	{
		id: 9,
		title: "Table Lamp",
		price: 239.99,
		nstar: 4,
		sale: 0.0,
		isnew: true,
		categorie: `Bedroom`,
		img: `/request/images/card/id9.png`,
	},
	{
		id: 10,
		title: "Black Brow Side table",
		price: 239.99,
		nstar: 4,
		sale: 0.0,
		isnew: false,
		categorie: `Office`,
		img: `/request/images/card/id10.png`,
	},
	{
		id: 11,
		title: "Light Beige Pillow",
		price: 239.99,
		nstar: 4,
		sale: 0.0,
		isnew: false,
		categorie: `Bedroom`,
		img: `/request/images/card/id11.png`,
	},
	{
		id: 12,
		title: "Off-white Pillow",
		price: 239.99,
		nstar: 4,
		sale: 0.0,
		isnew: false,
		categorie: `Bedroom`,
		img: `/request/images/card/id12.png`,
	},
	{
		id: 13,
		title: "Luxury Sofa",
		price: 239.99,
		nstar: 3,
		sale: 0.0,
		isnew: true,
		categorie: `Living Room`,
		img: `/request/images/card/id13.png`,
	},
];

export async function GET ( req: Request) {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = parseInt(searchParams.get('limit') ||'16',10);
    const categorie = searchParams.get('categorie') || 'All';
    const price = searchParams.get('price') || 'All Price';
    const sort = searchParams.get('sort') || 'Top Rated';

    const datacategorie:IProductCard[] = categorie === 'All' ? card : card.filter((item) => item.categorie === categorie);
    const dataprice: IProductCard[] =
			price === "All Price"
				? datacategorie
				: datacategorie.filter((item) => {
						const itemPrice = item.price * (1 - item.sale);
						const [minPrice, maxPrice] = price.split("-").map(Number);
						return itemPrice >= minPrice && itemPrice <= maxPrice;
				  });
    let sortdata: IProductCard[] = [];
    switch (sort) {
        case "Price: Low to High":
            sortdata = [...dataprice].sort((a, b) => a.price * (1 - a.sale) - b.price * (1 - b.sale));
            break;
        case "Price: High to Low":
            sortdata = [...dataprice].sort((a, b) => b.price * (1 - b.sale) - a.price * (1 - a.sale));
            break;
        case "Newest Arrivals":
            sortdata = [...dataprice].sort((b) => b.isnew ? 1 : -1);
            break;
        case "Top Rated":
            sortdata = [...dataprice].sort((a, b) => b.nstar - a.nstar);
            break;
        default:
            sortdata = [...dataprice].sort(
							(a, b) => a.product_id - b.product_id
						);
            break;
    }


    const end = page * limit;
    
    const data: IProductCard[] = sortdata.slice((page - 1) * limit, end);

    const isEnd:boolean = end >= sortdata.length;

    return NextResponse.json({cards: data, isend:isEnd});
}
