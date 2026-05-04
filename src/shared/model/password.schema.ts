import { minLengthPassword } from "@/constants/auth.constants";
import { string } from "zod";

export const passwordSchema = () =>
    string()
        .min(minLengthPassword, "Password too short");