import { z } from "zod";

export const AddressSchema = z.object({
	name: z.string().nonempty("This area mandatory"),
	phone: z
		.string()
		.length(10, "Phone number must be exactly 10 characters")
		.nonempty("This area mandatory"),
	country: z.string().nonempty("This area mandatory"),
	state: z.string().nonempty("This area mandatory"),
	city: z.string().nonempty("This area mandatory"),
	street: z.string().nonempty("This area mandatory"),
	buildingNumber: z.string(),
	zipCode: z
		.string()
		.length(5, "Zip code must be exactly 5 characters")
		.nonempty("This area mandatory"),
});

export type AddressSchema = z.infer<typeof AddressSchema>;
