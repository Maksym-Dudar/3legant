"use client";

import { useState } from "react";
import type { IForgotPassword } from "@/services/auth/type";
import { forgotPassword, sendOtpCode } from "@/services/auth";
import { ButtonAction } from "@/components/ui";
import { PAGE } from "@/config/page.config";
import { useRouter } from "next/navigation";

export function ForgotPasswordForm() {
    const router = useRouter();
    
	const [emailReadOmly, setEmailReadOmly] = useState<boolean>(false);
	const [formData, setFormData] = useState<IForgotPassword>({
		email: "",
		otpCode: 0,
		password: "",
		confirmPassword: "",
	});

	function onChange(e: React.ChangeEvent<HTMLInputElement>) {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	}

	function sendEmail() {
        setEmailReadOmly(true);
		sendOtpCode(formData.email)
	}

	async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		if (formData.password != formData.confirmPassword) {
			alert("confirmPassword"); //todo
			return;
		}
		try {
			
            await forgotPassword(formData);
            router.push('/')
		} catch (error) {
			console.log(new Date(), error);
		}
	}
	return (
			<form
				action=''
				className='flex flex-col justify-center pl-20 max-w-[500px] w-full gap-8'
				onSubmit={onSubmit}
			>
				<div className='flex flex-col gap-6'>
                <h3 className='text-40 font-500 leading-110'>{PAGE.FORGOT_PASSWORD.label}</h3>

				</div>
				<div className='flex flex-col gap-10'>
					<div className='flex gap-4'>
						<input
							type='email'
							name='email'
							placeholder='Your email address'
							className='text-16 font-400 leading-160 font-inter pb-1 border-b-1 w-full'
							onChange={onChange}
							required
							readOnly={emailReadOmly}
						/>
						<div className='flex w-2/5'>
							<ButtonAction
								type='button'
								text='Send code'
								padding={2}
								onClick={sendEmail}
							/>
						</div>
					</div>
					<div className='flex flex-col gap-8'>
						<div className='flex flex-col gap-4'>
							<p className='text-16 font-400 leading-160 font-inter text-descriptiongrey'>
								Enter your otp code from email
							</p>
							<input
								type='text'
								name='otpCode'
								placeholder='Your otp code'
								className='text-16 font-400 leading-160 font-inter pb-1 border-b-1 w-full'
								required
								onChange={onChange}
							/>
						</div>
						<div className='flex flex-col gap-4'>
							<p className='text-16 font-400 leading-160 font-inter text-descriptiongrey'>
								Create new passoword
							</p>
							<input
								type='password'
								name='password'
								placeholder='New password'
								className='w-full text-16 font-400 leading-160 font-inter pb-1 border-b-1'
								required
								onChange={onChange}
								minLength={8}
							/>
						</div>
						<input
							type='password'
							name='confirmPassword'
							placeholder='Confirm Password'
							className={`w-full text-16 font-400 leading-160 font-inter pb-1 border-b-1 ${
								formData.confirmPassword != formData.password ? "bg-red" : ""
							}`}
							onChange={onChange}
							required
							minLength={8}
						/>
					</div>
				</div>
				<div className='flex w-full'>
					<ButtonAction
						type='submit'
						text='Reset password'
						padding={3}
						onClick={() => {}}
					/>
				</div>
			</form>
	);
}
