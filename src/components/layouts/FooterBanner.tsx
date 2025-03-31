'use client'
import Image from "next/image";
import { useState } from "react";

export function FooterBanner() {
  const [email, setEmail] = useState('');

  const handelSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  }

	return (
		<div className='relative justify-center items-center w-full'>
			<div className='flex flex-col absolute justify-center items-center gap-8 w-full h-full'>
				<div className='items-center flex flex-col gap-2'>
					<h5 className='text-40 font-500 leading-110'>Join Our Newsletter</h5>
					<p className='text-18 font-400 leading-170'>
						Sign up for deals, new products and promotions
					</p>
				</div>
				<form onSubmit={handelSubmit} className="flex gap-2 items-center border-b-1 border-descriptiongrey pb-3">
          <Image
            src='/images/footer_banner/email.svg'
            alt='email-icon'
            width={24}
            height={24}
           
            />
					<input
						type='email'
            value={email}
						placeholder='Email address'
            onChange={(e)=>setEmail(e.target.value)}
						className='text-16 font-inter font-500 leading-180 bg-emailform w-100'
            required
					/>
					<button type="submit" className='text-16 font-500 leading-180 text-descriptiongrey'>
						Signup
					</button>
				</form>
			</div>
			<Image
				src='/images/footer_banner/footer_banner.png'
				alt='footer-banner'
				width={0}
				height={0}
				sizes='100vw'
				style={{ width: "100%", height: "auto" }}
			/>
		</div>
	);
}
