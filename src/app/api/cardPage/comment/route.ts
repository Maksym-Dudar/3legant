import { CommentType } from "../../../../shared/types/comment.type";
import { NextResponse } from "next/server";
const comentData: CommentType[] = [
	{
		id: 1,
		name: "Sofia Harvetz",
		date: new Date("2025-12-12"),
		nstar: 5,
		avatar: "/product/8/comment/avatar-1.png",
		comment:
			"I bought it 1 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
	},
	{
		id: 1,
		name: "Sofia Harvetz",
		date: new Date("2025-12-11"),
		nstar: 5,
		avatar: "/product/8/comment/avatar-2.png",
		comment:
			"I bought it 2 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
	},
	{
		id: 1,
		name: "Sofia Harvetz",
		date: new Date("2025-12-16"),
		nstar: 5,
		avatar: "/product/8/comment/avatar-3.png",
		comment:
			"I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
	},
	{
		id: 1,
		name: "Sofia Harvetz",
		date: new Date("2025-12-13"),
		nstar: 5,
		avatar: "/product/8/comment/avatar-4.png",
		comment:
			"I bought it 4 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
	},
	{
		id: 1,
		name: "Sofia Harvetz",
		date: new Date("2025-12-23"),
		nstar: 5,
		avatar: "/product/8/comment/avatar-5.png",
		comment:
			"I bought it 5 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
	},
	{
		id: 8,
		name: "Sofia Harvetz",
		date: new Date("2025-12-1"),
		nstar: 5,
		avatar: "/product/8/comment/avatar-2.png",
		comment:
			"I bought it 6 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
	},
	{
		id: 8,
		name: "Sofia Harvetz",
		date: new Date("2025-1-13"),
		nstar: 5,
		avatar: "/product/8/comment/avatar-3.png",
		comment:
			"I bought it 7 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
	},
	{
		id: 8,
		name: "Sofia Harvetz",
		date: new Date("2025-2-13"),
		nstar: 5,
		avatar: "/product/8/comment/avatar-4.png",
		comment:
			"I bought it 8 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
	},
	{
		id: 8,
		name: "Sofia Harvetz",
		date: new Date("2025-12-3"),
		nstar: 5,
		avatar: "/product/8/comment/avatar-5.png",
		comment:
			"I bought it 9 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
	},
];

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const product = comentData.filter((item) => item.id === Number(id));
    if (!product) {
        return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(product);
}
