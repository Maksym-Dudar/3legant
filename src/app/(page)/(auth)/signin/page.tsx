"use client"

import Image from "next/image";
import Form from 'next/form'
import Link from "next/link";
import { ButtonAction } from "@/shared";

export default function SignInForm() {
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
				action={"https:localhost4200"}
				scroll={false}
				className='flex flex-col justify-center pl-20 max-w-[500px] w-full gap-8'
			>
				<div className='flex flex-col gap-6'>
					<h3 className='text-40 font-500 leading-110'>Sign In</h3>
					<p className='text-16 font-400 leading-160 font-inter text-descriptiongrey'>
						Don’t have an accout yet?
						<Link href={"/signup"} className='text-green'>
							{" "}
							Sign Up
						</Link>
					</p>
				</div>
				<div className='flex flex-col gap-8'>
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
						minLength={9}
					/>
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
