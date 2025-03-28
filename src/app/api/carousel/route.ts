import { NextResponse } from "next/server";

interface Card{
    id: number;
    title: string;
    price: number;
    nstar: number;
    sale: number;
    isnew: boolean;
    img: string;
}

export async function GET ( req: Request) {
    const card: Card[] = [
        {id: 1, title: 'Loveseat Sofa', price: 400, nstar: 4, sale: 0.5, isnew: true, img: `/request/images/carousel/id1.png` },
        {id: 2, title: 'Table Lamp', price: 40, nstar: 5, sale: 0.4, isnew: true, img: `/request/images/carousel/id2.png` },
        {id: 3, title: 'Beige Table Lamp', price: 24, nstar: 4, sale: 0.5, isnew: true, img: `/request/images/carousel/id3.png` },
        {id: 4, title: 'Bamboo basket', price: 19.56, nstar: 5, sale: 0.33, isnew: true, img: `/request/images/carousel/id4.png` },
        {id: 5, title: 'Toasted', price: 239.99, nstar: 4, sale: 0.0, isnew: false, img: `/request/images/carousel/id5.png` },


    ]
    
    return NextResponse.json(card);
}


