import { passwordSchema } from "@/shared/model/password.schems";
import { z } from "zod";

export const SignUpSchema = z.object({
	firstName: z.string("First name invalidate").nonempty("This area mandatory"),
	email: z.email("Email address invalidate").nonempty("This area mandatory"),
	password: passwordSchema().nonempty("This area mandatory"),
	confirmPassword: passwordSchema().nonempty("This area mandatory"),
	isAgree: z.literal(
		true,
		"You must agree with Privacy Policy end Terms of Use",
	),
});

export type SignUpSchema = z.infer<typeof SignUpSchema>;
