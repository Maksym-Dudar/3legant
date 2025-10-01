"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import type { ISignUp } from "@/services/auth/type";
import { signUp } from "@/services/auth";
import { PAGE } from "@/config/page.config";
import { ButtonAction, ErrorToast } from "@/components/ui";
import { updateUserData } from "@/store/user/store";

export function SignUpForm() {
	const router = useRouter();
	const [errorToast, setErrorToast] = useState<string | null>(null);

	const [formData, setFormData] = useState<ISignUp>({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
		agreeWithPolicy: false,
	});

	function onChange(e: React.ChangeEvent<HTMLInputElement>) {
		setFormData((prev) => ({
			...prev,
			[e.target.name]:
				e.target.type === "checkbox" ? e.target.checked : e.target.value,
		}));
	}

	async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		if (!formData.agreeWithPolicy) {
			setErrorToast("agreeWithPolicy"); //todo
			return;
		}
		if (formData.password != formData.confirmPassword) {
			setErrorToast("confirmPassword");
			return;
		}
		try {
			const data = await signUp(formData);
			updateUserData(data);
			router.push("/");
		} catch (error) {
			setErrorToast(String(error));
		}
	}

	return (
		<form
			onSubmit={onSubmit}
			className='flex flex-col justify-center pl-20 max-w-[500px] w-full gap-8'
		>
			{errorToast && (
				<ErrorToast message={errorToast} onClose={() => setErrorToast(null)} />
			)}
			<div className='flex flex-col gap-6'>
				<h3 className='text-40 font-500 leading-110'>{PAGE.SIGN_UP.label}</h3>
				<p className='text-16 font-400 leading-160 font-inter text-descriptiongrey'>
					Already have an account?
					<Link href={PAGE.SIGN_IN.link} className='text-green'>
						{PAGE.SIGN_IN.label}
					</Link>
				</p>
			</div>
			<div className='flex flex-col gap-8'>
				<input
					type='text'
					name='name'
					placeholder='Your name'
					className='text-16 font-400 leading-160 font-inter pb-1 border-b-1 w-full'
					required
					onChange={onChange}
				/>
				<input
					type='email'
					name='email'
					placeholder='Your email address'
					className='text-16 font-400 leading-160 font-inter pb-1 border-b-1 w-full'
					required
					autoComplete='email'
					onChange={onChange}
				/>
				<input
					type='password'
					name='password'
					placeholder='Password'
					className='w-full text-16 font-400 leading-160 font-inter pb-1 border-b-1'
					required
					minLength={8}
					onChange={onChange}
				/>
				<input
					type='password'
					name='confirmPassword'
					placeholder='Confirm Password'
					className={`w-full text-16 font-400 leading-160 font-inter pb-1 border-b-1 ${
						formData.confirmPassword != formData.password
							? "bg-palered border-1 border-red rounded-md"
							: ""
					}`}
					required
					minLength={8}
					onChange={onChange}
				/>
				<div className='flex gap-3'>
					<input
						type='checkbox'
						className='w-5 h-5'
						name='agreeWithPolicy'
						onChange={onChange}
					/>
					<p className='text-16 font-400 leading-160 font-inter '>
						I agree with <b>Privacy Policy</b> and <b>Terms of Use</b>
					</p>
				</div>
			</div>
			<div className='flex w-full'>
				<ButtonAction
					type='submit'
					text={PAGE.SIGN_UP.label}
					padding={3}
					onClick={() => {}}
				/>
			</div>
		</form>
	);
}
