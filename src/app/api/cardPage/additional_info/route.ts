import { NextResponse } from "next/server";

const AdditionalInfo = [
	{
		id: 1,
		text: "A round black table is a stylish and versatile piece of furniture that combines elegance with functionality. The tabletop features a perfectly circular shape with a smooth surface, finished in a deep matte or glossy black color. This timeless shade adds a touch of refined sophistication and allows the table to blend seamlessly into both modern minimalist and classic interior designs. \n The base may consist of three or four slender yet sturdy legs made of metal or wood, either painted to match the tabletop or in a contrasting color to create visual interest. Alternatively, it can have a single central pedestal with a wide base, offering a more compact and contemporary look. \n This table is ideal for living rooms, coffee corners, terraces, or reception areas. Its round shape ensures easy placement in various spaces, while the black finish gives it universal appeal, effortlessly complementing a wide range of furniture styles.",
	},
	{
		id: 2,
		text: "A round black table is a stylish and versatile piece of furniture that combines elegance with functionality. The tabletop features a perfectly circular shape with a smooth surface, finished in a deep matte or glossy black color. This timeless shade adds a touch of refined sophistication and allows the table to blend seamlessly into both modern minimalist and classic interior designs. \n The base may consist of three or four slender yet sturdy legs made of metal or wood, either painted to match the tabletop or in a contrasting color to create visual interest. Alternatively, it can have a single central pedestal with a wide base, offering a more compact and contemporary look. \n This table is ideal for living rooms, coffee corners, terraces, or reception areas. Its round shape ensures easy placement in various spaces, while the black finish gives it universal appeal, effortlessly complementing a wide range of furniture styles.",
	},
	{
		id: 3,
		text: "A round black table is a stylish and versatile piece of furniture that combines elegance with functionality. The tabletop features a perfectly circular shape with a smooth surface, finished in a deep matte or glossy black color. This timeless shade adds a touch of refined sophistication and allows the table to blend seamlessly into both modern minimalist and classic interior designs. \n The base may consist of three or four slender yet sturdy legs made of metal or wood, either painted to match the tabletop or in a contrasting color to create visual interest. Alternatively, it can have a single central pedestal with a wide base, offering a more compact and contemporary look. \n This table is ideal for living rooms, coffee corners, terraces, or reception areas. Its round shape ensures easy placement in various spaces, while the black finish gives it universal appeal, effortlessly complementing a wide range of furniture styles.",
	},
	{
		id: 4,
		text: "A round black table is a stylish and versatile piece of furniture that combines elegance with functionality. The tabletop features a perfectly circular shape with a smooth surface, finished in a deep matte or glossy black color. This timeless shade adds a touch of refined sophistication and allows the table to blend seamlessly into both modern minimalist and classic interior designs. \n The base may consist of three or four slender yet sturdy legs made of metal or wood, either painted to match the tabletop or in a contrasting color to create visual interest. Alternatively, it can have a single central pedestal with a wide base, offering a more compact and contemporary look. \n This table is ideal for living rooms, coffee corners, terraces, or reception areas. Its round shape ensures easy placement in various spaces, while the black finish gives it universal appeal, effortlessly complementing a wide range of furniture styles.",
	},
	{
		id: 5,
		text: "A round black table is a stylish and versatile piece of furniture that combines elegance with functionality. The tabletop features a perfectly circular shape with a smooth surface, finished in a deep matte or glossy black color. This timeless shade adds a touch of refined sophistication and allows the table to blend seamlessly into both modern minimalist and classic interior designs. \n The base may consist of three or four slender yet sturdy legs made of metal or wood, either painted to match the tabletop or in a contrasting color to create visual interest. Alternatively, it can have a single central pedestal with a wide base, offering a more compact and contemporary look. \n This table is ideal for living rooms, coffee corners, terraces, or reception areas. Its round shape ensures easy placement in various spaces, while the black finish gives it universal appeal, effortlessly complementing a wide range of furniture styles.",
	},
	{
		id: 6,
		text: "A round black table is a stylish and versatile piece of furniture that combines elegance with functionality. The tabletop features a perfectly circular shape with a smooth surface, finished in a deep matte or glossy black color. This timeless shade adds a touch of refined sophistication and allows the table to blend seamlessly into both modern minimalist and classic interior designs. \n The base may consist of three or four slender yet sturdy legs made of metal or wood, either painted to match the tabletop or in a contrasting color to create visual interest. Alternatively, it can have a single central pedestal with a wide base, offering a more compact and contemporary look. \n This table is ideal for living rooms, coffee corners, terraces, or reception areas. Its round shape ensures easy placement in various spaces, while the black finish gives it universal appeal, effortlessly complementing a wide range of furniture styles.",
	},
];

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const product = AdditionalInfo.find((item) => item.id === Number(id));
    if (!product) {
        return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }
    const card = {
        id: product.id,
        text: product.text
    };

    return NextResponse.json(card);
}
