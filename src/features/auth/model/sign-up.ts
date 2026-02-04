import { z } from "zod";
import { passwordSchema } from "./password.schems";

export const SignUpSchema = z.object({
	firstName: z.string("First name invalidate").nonempty("This area mandatory"),
	email: z.email("Email address invalidate").nonempty("This area mandatory"),
	password: passwordSchema(),
	confirmPassword: passwordSchema(),
	isAgree: z.literal(
		true,
		"You must agree with Privacy Policy end Terms of Use"
	),
});

export type SignUpSchema = z.infer<typeof SignUpSchema>;
