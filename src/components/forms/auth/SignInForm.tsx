"use client";

import { signIn } from "@/services/requests/auth";
import type { ISignIn } from "@/services/requests/auth/type";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ButtonAction, ErrorToast } from "@/components/ui";
import { PAGE } from "@/config/page.config";
import { useRouter } from "next/navigation";
import { updateUserData } from "@/services/store/user/store";

export function SignInForm() {
	const router = useRouter();

	const [errorToast, setErrorToast] = useState<string | null>(null);

	const [formData, setFormData] = useState<ISignIn>({
		email: "",
		password: "",
	});

	function onChange(e: React.ChangeEvent<HTMLInputElement>) {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	}

	async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		try {
			const data = await signIn(formData);
			const res = updateUserData(data);
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
				<h3 className='text-40 font-500 leading-110'>{PAGE.SIGN_IN.label}</h3>
				<p className='text-16 font-400 leading-160 font-inter text-descriptiongray'>
					Don’t have an accout yet?{" "}
					<Link href={PAGE.SIGN_UP.link} className='text-green'>
						{PAGE.SIGN_UP.label}
					</Link>
				</p>
			</div>
			<div className='flex flex-col gap-8'>
				<input
					type='email'
					name='email'
					placeholder='Your email address'
					className='text-16 font-400 leading-160 font-inter pb-1 border-b w-full'
					required
					autoComplete='email'
					onChange={onChange}
				/>
				<input
					type='password'
					name='password'
					placeholder='Password'
					className='w-full text-16 font-400 leading-160 font-inter pb-1 border-b'
					required
					minLength={8}
					onChange={onChange}
				/>
			</div>
			<Link
				href={PAGE.FORGOT_PASSWORD.link}
				className='text-16 font-600 leading-160 font-inter'
			>
				{PAGE.FORGOT_PASSWORD.label}?
			</Link>
			<div className='flex w-full'>
				<ButtonAction
					type='submit'
					text={PAGE.SIGN_IN.label}
					paddingY={3}
				/>
			</div>
		</form>
	);
}


