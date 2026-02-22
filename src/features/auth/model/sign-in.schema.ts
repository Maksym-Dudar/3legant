import { passwordSchema } from "@/shared/model/password.schems";
import { z } from "zod";

export const SignInSchema = z.object({
	email: z.email("Email address invalidate").nonempty("This area mandatory"),
	password: passwordSchema().nonempty("This area mandatory"),
});

export type SignInSchema = z.infer<typeof SignInSchema>;
