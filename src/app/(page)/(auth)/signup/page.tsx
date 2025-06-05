"use client";

import Image from "next/image";
import Form from "next/form";
import Link from "next/link";
import { ButtonAction } from "@/shared";
import { useState } from "react";

export default function SignInForm() {
    const [password, setPassword] = useState<string>("");
	const [confirmPassword, setConfirmPassword] = useState<boolean>(true);
	const [agreeWithPolict, setAgreeWithPolict] = useState<boolean>(false);

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
			<Form
				action={"https://localhost:4200/signup"}
				scroll={false}
				className='flex flex-col justify-center pl-20 max-w-[500px] w-full gap-8'
				onSubmit={(e) => {
					if (!confirmPassword) {
						e.preventDefault();
						alert("Form is invalid: check password confirmation");
					}
					if (!agreeWithPolict) {
						e.preventDefault();
						alert("Form is invalid: policy agreement.");
					}
				}}
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
					/>
					<input
						type='email'
						name='email'
						placeholder='Your email address'
						className='text-16 font-400 leading-160 font-inter pb-1 border-b-1 w-full'
						required
						autoComplete='email'
					/>
					<input
						type='password'
						name='password'
						placeholder='Password'
						className='w-full text-16 font-400 leading-160 font-inter pb-1 border-b-1'
						required
						minLength={8}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<input
						type='password'
						placeholder='Confirm Password'
						className={`w-full text-16 font-400 leading-160 font-inter pb-1 border-b-1 ${
							!confirmPassword ? "bg-red" : ""
						}`}
						required
						minLength={8}
						onBlur={(e) => setConfirmPassword(e.target.value === password)}
					/>
					<div className='flex gap-3'>
						<input
							type='checkbox'
							className='w-5 h-5'
							onChange={(e) => setAgreeWithPolict(e.target.checked)}
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
			</Form>
		</section>
	);
}
