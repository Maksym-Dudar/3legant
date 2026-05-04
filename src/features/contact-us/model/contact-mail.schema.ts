import { lengthOtpCode } from "@/constants/auth.constants";
import { passwordSchema } from "@/shared/model/password.schema";
import { z } from "zod";

export const ContactMailFormSchema = z.object({
	email: z.email("Email address invalidate").nonempty("This area mandatory"),
	name: z.string().nonempty("This area mandatory"),
	message: z.string().nonempty("This area mandatory"),
});

export type ContactMailFormSchema = z.infer<typeof ContactMailFormSchema>;
