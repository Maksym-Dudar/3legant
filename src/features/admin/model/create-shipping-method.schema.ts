import { z } from "zod";

export const CreateShippingMethodSchema = z.object({
	percent: z.number().max(100).min(0, "This field is mandatory"),
	fixedFee: z.number().min(0, "This field is mandatory"),
	method: z.string().nonempty("This field is mandatory"),
	label: z.string().nonempty("This field is mandatory"),
});

export type CreateShippingMethodSchema = z.infer<typeof CreateShippingMethodSchema>;
