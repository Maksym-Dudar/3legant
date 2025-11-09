import jwt, { type JwtPayload } from "jsonwebtoken";
import { cookies } from "next/headers";
import path from "path";
import { mkdir, writeFile } from "fs/promises";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
	const token = (await cookies()).get("access_token");

	if (!token) {
		return Response.json({ massege: "Помилка авторизації" }, { status: 401 });
	}
	const secret = process.env.SECRETKEYFORTOKEN;
	if (!secret) {
		return Response.json(
			{ massege: "Секретний ключ не налаштовано" },
			{ status: 500 }
		);
	}

	try {
		const decoded = jwt.verify(token.value, secret) as JwtPayload;
		if (decoded.exp && decoded.exp < Date.now() / 1000) {
			return Response.json(
				{ massege: "Час сесії закінчився" },
				{ status: 403 }
			);
		}

		const formData = await req.formData();
		const file = formData.get("file") as File;

		if (!file || file.size === 0) {
			return Response.json(
				{ error: "Файл не передано або він порожній" },
				{ status: 400 }
			);
		}

		const bytes = await file.arrayBuffer();
		const buffer = Buffer.from(bytes);

		const uploadDir = path.join(process.cwd(), "public/user/avatar");
		await mkdir(uploadDir, { recursive: true });

		const expansion = file.name.split(".").pop();
		const fileName = decoded.email + "." + expansion;
		const filePath = path.join(uploadDir, fileName);
		await writeFile(filePath, buffer);


		await prisma.user.update({
			where: { email: decoded.email },
			data: { avatar: "/user/avatar/" + fileName },
		});

		const res = await prisma.user.findFirst({
			where: { email: decoded.email}
		})
		return Response.json(
			{ massege: "Аватар успішно замінено", res },
			{ status: 201 }
		);
	} catch (err) {
		return Response.json(
			{ massege: "Користувача не розпізнано" },
			{ status: 401 }
		);
	}
}
