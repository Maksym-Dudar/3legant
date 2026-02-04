import { z } from "zod";

export const SignInSchema = z.object({
    email: z.email("Email address invalidate").nonempty("This area mandatory"),
    password: z.string("Password invalidate").nonempty("This area mandatory")
});

export type SignInSchema = z.infer<typeof SignInSchema>;
