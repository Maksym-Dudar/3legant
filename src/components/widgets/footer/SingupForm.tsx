import { IMAGE } from "@/config/image.config";
import Image from "next/image";

interface Props {
	handelSubmit: () => void;
}

export function SingupForm({ handelSubmit }: Props) {
	return (
		<div className='flex flex-col absolute justify-center items-center gap-8 w-full h-full'>
			<div className='items-center flex flex-col gap-2'>
				<h5 className='text-28 sm:text-32 md:text-36 lg:text-40 font-500 leading-110'>
					Join Our Newsletter
				</h5>
				<p className='text-12 sm:text-14 md:text-16 lg:text-18 font-400 leading-170'>
					Sign up for deals, new products and promotions
				</p>
			</div>
			<form
				onSubmit={handelSubmit}
				className='flex gap-2 items-center border-b-1 border-descriptiongrey pb-3'
			>
				<Image
					src={IMAGE.EMAIL.href}
					alt={IMAGE.EMAIL.alt}
					width={24}
					height={24}
				/>
				<input
					type='email'
					placeholder='Email address'
					className='text-12 sm:text-14 md:text-16 font-inter font-500 leading-180 bg-emailform w-40 sm:w-50 md:w-70 lg:w-100'
					required
				/>
				<button
					type='submit'
					className='text-12 sm:text-14 md:text-16 font-500 leading-180 text-descriptiongrey'
				>
					Signup
				</button>
			</form>
		</div>
	);
}
