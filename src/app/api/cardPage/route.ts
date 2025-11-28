import { NextResponse } from "next/server";
import { Category } from "@/config/product.config";
import type { IProductPage } from "@/components/widgets/product/types";

const productsData: IProductPage[] = [
	{
		id: 1,
		titel: "Loveseat Sofa",
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
				productId: 2,
				image: "/product/8/image-1.png",
				isactive: true,
			},
			{
				color: "Black",
				productId: 2,
				image: "/product/8/image-2.png",
				isactive: true,
			},
			{
				color: "Black",
				productId: 2,
				image: "/product/8/image-3.png",
				isactive: false,
			},
			{
				color: "Black",
				productId: 2,
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
		category: Category.LivingRoom,
		priceWithoutSale: 299.543,
		reviews: 35,
		nstar: 5,
		isNew: true,
	},
	{
		id: 2,
		titel: "Luxury Sofa",
		description:
			"Buy one or buy a few and make every space where you sit more convenient. Light and easy to move around with removable tray top, handy for serving snacks.",
		price: 299.0,
		priceWithoutSale: 299.543,
		sale: 0.33,
		offerExpiresIn: new Date("2025-04-20T02:12:45"),
		measurements: '15x60x42" ',
		color: "Black",

		same: [
			{
				color: "Black",
				productId: 2,
				image: "/product/8/image-5.png",
				isactive: true,
			},
			{
				color: "Black",
				productId: 2,
				image: "/product/8/image-6.png",
				isactive: true,
			},
			{
				color: "Black",
				productId: 2,
				image: "/product/8/image-1.png",
				isactive: true,
			},
			{
				color: "Black",
				productId: 2,
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
		category: Category.LivingRoom,
		reviews: 52,
		nstar: 4,
		isNew: true,
	},
	{
		id: 3,
		titel: "Table Lamp",
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
				productId: 2,
				image: "/product/8/image-1.png",
				isactive: true,
			},
			{
				color: "Black",
				productId: 2,
				image: "/product/8/image-2.png",
				isactive: true,
			},
			{
				color: "Black",
				productId: 2,
				image: "/product/8/image-3.png",
				isactive: true,
			},
			{
				color: "Black",
				productId: 2,
				image: "/product/8/image-6.png",
				isactive: true,
			},
		],
		category: Category.LivingRoom,
		images: [
			"/product/8/image-1.png",
			"/product/8/image-2.png",
			"/product/8/image-3.png",
			"/product/8/image-4.png",
			"/product/8/image-5.png",
			"/product/8/image-6.png",
		],
		priceWithoutSale: 299.543,

		reviews: 14,
		nstar: 6,
		isNew: false,
	},
];

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url);
	const id = searchParams.get("id");
	const product = productsData.find((item) => item.id === Number(id));
	if (!product) {
		return NextResponse.json({ error: "Product not found" }, { status: 404 });
	}
	const card: ICardPage = {
		id: product.id,
		name: product.titel,
		description: product.description,
		price: product.price,
		nstar: product.nstar,
		sale: product.sale,
		isNew: product.isNew,
		color: product.color,
		images: product.images,
		category: product.category,
		offerExpiresIn: product.offerExpiresIn,
		measurements: product.measurements,
		same: product.same,
		reviews: product.reviews,
		priceWithoutSale: product.priceWithoutSale
	};

	return NextResponse.json(card);
}
