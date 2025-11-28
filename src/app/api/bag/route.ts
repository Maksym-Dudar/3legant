import type { IBagCard } from "@/shared/types/bag.type";
import { NextResponse } from "next/server";

const bagCard: IBagCard[] = [
	{
		productId: 1,
		title: "Loveseat Sofa",
		price: 400,
		color: "red",
		image: `/request/images/card/id1.png`,
	},
	{
		productId: 2,
		title: "Loveseat Sofa",
		price: 600,
		color: "yellow",
		image: `/request/images/card/id2.png`,
	},
	{
		productId: 3,
		title: "Loveseat Sofa",
		price: 40,
		color: "blue",
		image: `/request/images/card/id3.png`,
	},
	{
		productId: 4,
		title: "Loveseat Sofa",
		price: 432,
		color: "white",
		image: `/request/images/card/id4.png`,
	},
	{
		productId: 5,
		title: "Loveseat Sofa",
		price: 430,
		color: "black",
		image: `/request/images/card/id5.png`,
	},
];

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url);
	const ids = searchParams.get("id");
	if (!ids) return NextResponse.json({ data: [] });

	let idsArray: string[] = [];

	if (typeof ids === "string") {
		idsArray = ids.split(",");
	}

	let data: IBagCard[] = [];
	idsArray.forEach((value) => {
		const found = bagCard.find((item) => item.productId == parseInt(value));
		if (found) {
			data.push(found);
		}
	});

	return NextResponse.json(data);
}
