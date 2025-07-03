"use client";

import Image from "next/image";
import Link from "next/link";
import { ButtonAction } from "@/shared";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";


export default function SignInForm() {
	const router = useRouter();

	const [formData, setFormData] = useState<{
		name: string;
		email: string;
		password: string;
		confirmPassword: string;
		agreeWithPolicy: boolean;
	}>({
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
			alert("agreeWithPolicy");
			return;
		}
		if (formData.password != formData.confirmPassword) {
			alert("confirmPassword");
			return;
		}

		try {
			const res = await axios.post("https://localhost:4200/signup", 
				{
					name: formData.name,
					email: formData.email,
					password: formData.password,
				},{
				headers: {
					"Content-Type": "application/json",
				},
				withCredentials: true,
			});
			if (res.status == 201) {
				router.push("https://localhost:3000/home");
				console.log(res);
			}

		} catch (error) {
			console.log(error);
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
				onSubmit={onSubmit}
				className='flex flex-col justify-center pl-20 max-w-[500px] w-full gap-8'
			>
				<div className='flex flex-col gap-6'>
					<h3 className='text-40 font-500 leading-110'>Sign up</h3>
					<p className='text-16 font-400 leading-160 font-inter text-descriptiongrey'>
						Already have an account?
						<Link href={"/signin"} className='text-green'>
							{" "}
							Sign in
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
							formData.confirmPassword != formData.password ? "bg-red" : ""
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
						text='Sign In'
						pading={3}
						onClick={() => {}}
					/>
				</div>
			</form>
		</section>
	);
}
