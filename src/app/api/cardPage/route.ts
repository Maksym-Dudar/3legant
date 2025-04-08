import { NextResponse } from "next/server";
import { cardPageType } from "@/types/cardPage";

  const productsData: cardPageType[] = [
    {
        id: 1,
        name: "Loveseat Sofa",
        price: 199.00,
        sale: 50,
        offerExpiresIn: new Date("2025-03-20T02:12:45"),
        measurements: "80x35x30 inches",
        colors: ["Gray", "Beige"],
        category: "Living Room",
      images: ["/product/8/image-1.png", "/product/8/image-2.png", "/product/8/image-3.png", "/product/8/image-4.png", "/product/8/image-5.png", "/product/8/image-6.png"],
        reviews: [
            { user: "Sofia Harvetz", rating: 5, comment: "Great quality!"},
            { user: "Nicolas Jensen", rating: 5, comment: "Very comfortable."}
        ],
        nstar: 0,
        isnew: false
    },
    {
      id: 2,
      name: "Luxury Sofa",
      price: 299.00,
      sale: 50,
      offerExpiresIn: new Date("2025-03-20T02:12:45"), 
      measurements: "85x40x32 inches",
      colors: ["White", "Gray"],
      category: "Living Room",
      images: ["/product/8/image-1.png", "/product/8/image-2.png", "/product/8/image-3.png", "/product/8/image-4.png", "/product/8/image-5.png", "/product/8/image-6.png"],
      reviews: [
        { user: "Sofia Harvetz", rating: 5, comment: "Amazing design!"}
      ],
      nstar: 0,
      isnew: false
    },
    {
      id: 3,
      name: "Table Lamp",
      price: 19.00,
      sale: 50,
      offerExpiresIn: new Date("2025-03-20T02:12:45"), 
      measurements: "15x8 inches",
      colors: ["Gold", "Silver"],
      category: "Lighting",
      images: ["/product/8/image-1.png", "/product/8/image-2.png", "/product/8/image-3.png", "/product/8/image-4.png", "/product/8/image-5.png", "/product/8/image-6.png"],
      reviews: [],
      nstar: 0,
      isnew: false
    },
  ];
  
export async function GET ( req: Request) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const product = productsData.find((item) => item.id === Number(id));
    if (!product) {
        return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }
    const card:cardPageType = {
        id: product.id,
        name: product.name,
        price: product.price,
        nstar: product.nstar,
        sale: product.sale,
        isnew: product.isnew,
        images: product.images,
        category: product.category,
        offerExpiresIn: product.offerExpiresIn,
        measurements: product.measurements,
        colors: product.colors,
        reviews: product.reviews
    };

    
    return NextResponse.json(card);
}