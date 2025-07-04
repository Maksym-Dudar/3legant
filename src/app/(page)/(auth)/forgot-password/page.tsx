"use client";

import Image from "next/image";
import { ButtonAction } from "@/shared/ui";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function forgotPassword() {
		const router = useRouter();
	

	const [emailReadOmly, setEmailReadOmly] = useState<boolean>(false);
	const [formData, setFormData] = useState<{
		email: string;
		otpCode: number;
		password: string;
		confirmPassword: string;
	}>({
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
		axios.post(
			"https://localhost:4200/otpcode",
			{
				email: formData.email,
			},
			{
				headers: {
					"Content-Type": "application/json",
				},
				withCredentials: true,
			}
		);
	}

	async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		if (formData.password != formData.confirmPassword) {
			alert("confirmPassword");
			return;
		}
		
		try {
			const res = await axios.post(
				"https://localhost:4200/reset_password",
				{
					email: formData.email,
					password: formData.password,
					otp: formData.otpCode,
				},
				{
					headers: {
						"Content-Type": "application/json",
					},
					withCredentials: true,
				}
			);
			if (res.status == 200) {
				router.push("https://localhost:3000/signin");
				console.log(res);
			}
		} catch (error) {
			console.log(new Date(), error);
		}
	}
	return (
		<section className='flex overflow-hidden'>
			<aside className='relative w-1/2 h-screen'>
				<h1 className='absolute z-10 text-black text-24 font-500 left-1/2 -translate-x-1/2 top-8'>
					3legant.
				</h1>
				<Image
					src='/auth/banner.png'
					alt='Hero Banner'
					fill
					style={{ objectFit: "cover" }}
				/>
			</aside>
			<form
				action=''
				className='flex flex-col justify-center pl-20 max-w-[500px] w-full gap-8'
				onSubmit={onSubmit}
			>
				<div className='flex flex-col gap-6'>
					<h3 className='text-40 font-500 leading-110'>Forgot passoword</h3>
					{/* <p className='text-16 font-400 leading-160 font-inter text-descriptiongrey'>
						Enter your otp code from email
						
					</p> */}
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
								pading={2}
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
						pading={3}
						onClick={() => {}}
					/>
				</div>
			</form>
		</section>
	);
}
