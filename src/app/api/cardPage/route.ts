import { NextResponse } from "next/server";
import { cardPageType } from "@/widgets/product/types";

const productsData: cardPageType[] = [
	{
		id: 1,
		name: "Loveseat Sofa",
		description:
			"Buy one or buy a few and make every space where you sit more convenient. Light and easy to move around with removable tray top, handy for serving snacks.",
		price: 199.0,
		sale: 0.5,
		offerExpiresIn: new Date("2025-04-20T02:12:45"),
		measurements: '15x60x42" ',
		color: "Black",
		same: [
			{
				color: "Black",
				href: "/shop/2",
				image: "/product/8/image-1.png",
				isactive: true,
			},
			{
				color: "Black",
				href: "/shop/3",
				image: "/product/8/image-2.png",
				isactive: true,
			},
			{
				color: "Black",
				href: "/shop/4",
				image: "/product/8/image-3.png",
				isactive: false,
			},
			{
				color: "Black",
				href: "/shop/5",
				image: "/product/8/image-4.png",
				isactive: false,
			},
		],
		images: [
			"/product/8/image-1.png",
			"/product/8/image-2.png",
			"/product/8/image-3.png",
			"/product/8/image-4.png",
			"/product/8/image-5.png",
			"/product/8/image-6.png",
		],
		category: "Living Room",
		reviews: 35,
		nstar: 5,
		isnew: true,
	},
	{
		id: 2,
		name: "Luxury Sofa",
		description:
			"Buy one or buy a few and make every space where you sit more convenient. Light and easy to move around with removable tray top, handy for serving snacks.",
		price: 299.0,
		sale: 0.33,
		offerExpiresIn: new Date("2025-04-20T02:12:45"),
		measurements: '15x60x42" ',
		color: "Black",

		same: [
			{
				color: "Black",
				href: "/shop/3",
				image: "/product/8/image-5.png",
				isactive: true,
			},
			{
				color: "Black",
				href: "/shop/4",
				image: "/product/8/image-6.png",
				isactive: true,
			},
			{
				color: "Black",
				href: "/shop/5",
				image: "/product/8/image-1.png",
				isactive: true,
			},
			{
				color: "Black",
				href: "/shop/6",
				image: "/product/8/image-2.png",
				isactive: true,
			},
		],
		images: [
			"/product/8/image-1.png",
			"/product/8/image-2.png",
			"/product/8/image-3.png",
			"/product/8/image-4.png",
			"/product/8/image-5.png",
			"/product/8/image-6.png",
		],
		category: "Living Room",
		reviews: 52,
		nstar: 4,
		isnew: true,
	},
	{
		id: 3,
		name: "Table Lamp",
		description:
			"Buy one or buy a few and make every space where you sit more convenient. Light and easy to move around with removable tray top, handy for serving snacks.",

		price: 19.0,
		sale: 0.41,
		offerExpiresIn: new Date("2025-04-20T02:12:45"),
		measurements: '15x8 "',
		color: "Black",

		same: [
			{
				color: "Black",
				href: "/shop/2",
				image: "/product/8/image-1.png",
				isactive: true,
			},
			{
				color: "Black",
				href: "/shop/2",
				image: "/product/8/image-2.png",
				isactive: true,
			},
			{
				color: "Black",
				href: "/shop/2",
				image: "/product/8/image-3.png",
				isactive: true,
			},
			{
				color: "Black",
				href: "/shop/2",
				image: "/product/8/image-6.png",
				isactive: true,
			},
		],
		category: "Lighting",
		images: [
			"/product/8/image-1.png",
			"/product/8/image-2.png",
			"/product/8/image-3.png",
			"/product/8/image-4.png",
			"/product/8/image-5.png",
			"/product/8/image-6.png",
		],
		reviews: 14,
		nstar: 6,
		isnew: false,
	},
];

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url);
	const id = searchParams.get("id");
	const product = productsData.find((item) => item.id === Number(id));
	if (!product) {
		return NextResponse.json({ error: "Product not found" }, { status: 404 });
	}
	const card: cardPageType = {
		id: product.id,
		name: product.name,
		description: product.description,
		price: product.price,
		nstar: product.nstar,
		sale: product.sale,
		isnew: product.isnew,
		color: product.color,
		images: product.images,
		category: product.category,
		offerExpiresIn: product.offerExpiresIn,
		measurements: product.measurements,
		same: product.same,
		reviews: product.reviews,
	};

	return NextResponse.json(card);
}
