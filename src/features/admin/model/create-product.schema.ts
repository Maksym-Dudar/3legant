import { BackendCategory } from "@/config/product.config";
import { z } from "zod";

export const CreateProductSchema = z.object({
	productGroupId: z.number(),
	isNew: z.boolean(),
	offerExpires: z.date().optional(),
	sale: z
		.number()
		.max(1, "Enter value between 0 and 1")
		.min(0, "Enter value between 0 and 1")
		.optional(),
	title: z.string(),
	measurements: z.string().nonempty("This field is mandatory"),
	price: z.number().min(0, "This field is mandatory"),
	quantityWarehouse: z.number().min(0, "This field is mandatory"),
	color: z.string().nonempty("This field is mandatory"),
	description: z.string().nonempty("This field is mandatory"),
	images: z
		.custom<FileList>()
		.refine((files) => files?.length > 0, "Select images"),
	category: z
		.array(
			z.union(
				Object.values(BackendCategory).map((val) => z.literal(val)) as [
					z.ZodLiteral<string>,
					...z.ZodLiteral<string>[],
				],
			),
		)
		.min(1, "Select at least one category"),
});

export type CreateProductSchema = z.infer<typeof CreateProductSchema>;
