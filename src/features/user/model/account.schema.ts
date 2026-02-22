import { passwordSchema } from "@/shared/model/password.schems";
import { z } from "zod";

const ResetPasswordSchema = z.object({
	oldPassword: passwordSchema(),
	newPassword: passwordSchema(),
	confirmNewPassword: passwordSchema(),
});

const UserDetailsSchema = z.object({
	firstName: z.string("First name invalidate"),
	lastName: z.string("Last name invalidate"),
	email: z.email("Email address invalidate"),
});

export const AccountSchema = ResetPasswordSchema.merge(UserDetailsSchema);

export type AccountSchema = z.infer<typeof AccountSchema>;
