import { lengthOtpCode } from "@/constants/auth.constants";
import { z } from "zod";
import { passwordSchema } from "./password.schems";



export const ForgotPasswordSchema = z.object({
	email: z.email("Email address invalidate").nonempty("This area mandatory"),
	otpCode: z.string().length(lengthOtpCode, "Otp code incorrect").nonempty("This area mandatory"),
	password: passwordSchema(),
	confirmPassword: passwordSchema(),
});

export type ForgotPasswordSchema = z.infer<typeof ForgotPasswordSchema>;
