import { lengthOtpCode } from "@/constants/auth.constants";
import { passwordSchema } from "@/shared/model/password.schems";
import { z } from "zod";



export const ForgotPasswordSchema = z.object({
	email: z.email("Email address invalidate").nonempty("This area mandatory"),
	otpCode: z
		.string()
		.length(lengthOtpCode, "Otp code incorrect")
		.nonempty("This area mandatory"),
	password: passwordSchema().nonempty("This area mandatory"),
	confirmPassword: passwordSchema().nonempty("This area mandatory"),
});

export type ForgotPasswordSchema = z.infer<typeof ForgotPasswordSchema>;
