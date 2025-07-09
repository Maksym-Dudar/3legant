import { BagCard } from "@/shared/types/bag";
import { NextResponse } from "next/server";

const bagCard:BagCard[] = [
	{
		id: 1,
		title: "Loveseat Sofa",
		price: 400,
		color: "red",
		img: `/request/images/card/id1.png`,
	},
	{
		id: 2,
		title: "Loveseat Sofa",
		price: 600,
		color: "yellow",
		img: `/request/images/card/id2.png`,
	},
	{
		id: 3,
		title: "Loveseat Sofa",
		price: 40,
		color: "blue",
		img: `/request/images/card/id3.png`,
	},
	{
		id: 4,
		title: "Loveseat Sofa",
		price: 432,
		color: "white",
		img: `/request/images/card/id4.png`,
	},
	{
		id: 5,
		title: "Loveseat Sofa",
		price: 430,
		color: "black",
		img: `/request/images/card/id5.png`,
	},
];

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url);
	const ids = searchParams.get("id");
	if (!ids) return NextResponse.json({ data: {} });

	let idsArray: string[] = [];

	if (typeof ids === "string") {
		idsArray = ids.split(",");
	} else if (Array.isArray(ids)) {
		idsArray = ids;
    }
    
	let data: BagCard[] = [];
	idsArray.forEach((value) => {
		const found = bagCard.find((item) => item.id == parseInt(value));
		if (found) {
			data.push(found);
		}
	});

	return NextResponse.json({data: data});
}
