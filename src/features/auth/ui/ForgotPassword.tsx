"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/components/ui/buttons/Button";
import Input from "@/components/ui/inputs/Input";
import { PAGE } from "@/config";
import PasswordInput from "./PasswordInput";
import { ForgotPasswordSchema } from "../model/forgot-password.schema";
import { useForgotPassword } from "../hook/useForgotPassword";
import { ErrorToast } from "@/components/ui";
import { useErrorToast } from "@/hooks/useErrorToast";

export function ForgotPassword() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm<ForgotPasswordSchema>({
		resolver: zodResolver(ForgotPasswordSchema),
	});

	const { submit, generateOtp, isError, error, isPending, isEmailLocked } = useForgotPassword();
	const { errorMessage, closeError } = useErrorToast(isError, error)

	const onSubmit = handleSubmit((data: ForgotPasswordSchema) => submit(data));
	const onSendCode = () => generateOtp({ email: watch("email") });

	return (
		<>
			{!!errorMessage && (
				<ErrorToast message={errorMessage} onClose={closeError} />
			)}
			<form
				onSubmit={onSubmit}
				className='flex flex-col w-full justify-center gap-8 pl-20 max-w-125'
			>
				<h2 className='text-40 font-500 leading-110'>
					{PAGE.FORGOT_PASSWORD.label}
				</h2>
				<section className='flex flex-col gap-4'>
					<div className='flex flex-row gap-4 w-full'>
						<Input
							placeholder='Your email address'
							variant='borderless'
							errorMessage={errors.email?.message}
							disabled={isEmailLocked}
							{...register("email")}
						/>
						<Button
							type='button'
							text='Send Code'
							className='w-3/6 items-center h-10 top-0'
							onClick={onSendCode}
						/>
					</div>
					<Input
						placeholder='Enter your otp code'
						variant='borderless'
						errorMessage={errors.otpCode?.message}
						{...register("otpCode")}
					/>
					<PasswordInput
						placeholder='New password'
						errorMessage={errors.password?.message}
						{...register("password")}
					/>
					<PasswordInput
						placeholder='Confirm password'
						errorMessage={errors.confirmPassword?.message}
						{...register("confirmPassword")}
					/>
					<Button
						text='Change Password'
						type='submit'
						className='py-2'
						disabled={isPending}
					/>
				</section>
			</form>
		</>
	);
}
