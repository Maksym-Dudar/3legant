import { z } from "zod";

export const CheckoutSchema = z.object({
	firstName: z.string().nonempty("This area mandatory"),
	lastName: z.string().nonempty("This area mandatory"),
	phone: z
		.string()
		.length(10, "Phone number must be exactly 10 characters")
		.nonempty("This area mandatory"),
	email: z.email("Email address invalidate").nonempty("This area mandatory"),

	street: z.string().nonempty("This area mandatory"),
	country: z.string().nonempty("This area mandatory"),
	state: z.string().nonempty("This area mandatory"),
	city: z.string().nonempty("This area mandatory"),
	buildingNumber: z.string(),
	zipCode: z
		.string()
		.length(5, "Zip code must be exactly 5 characters")
		.nonempty("This area mandatory"),
});

export type CheckoutSchema = z.infer<typeof CheckoutSchema>;
