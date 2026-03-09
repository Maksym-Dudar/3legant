import { Input } from "@/components/ui";
import type { UseFormRegister, FieldErrors } from "react-hook-form";
import type { CheckoutSchema } from "../model/checkout.schema";

interface Props {
	register: UseFormRegister<CheckoutSchema>;
	errors: FieldErrors<CheckoutSchema>;
}

export function ContactInformation({ register, errors }: Props) {
	return (
		<section className='flex flex-col gap-3 border-1 border-description_gray rounded-lg pt-10 pb-6 px-6'>
			<h5 className='text-20 font-500 leading-140 pb-2'>Contact Information</h5>
			<div className='flex flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 '>
				<Input
					variant='outlined'
					label='FIRST NAME'
					placeholder='First name'
					errorMessage={errors.firstName?.message}
					{...register("firstName")}
				/>
				<Input
					variant='outlined'
					label='LAST NAME'
					placeholder='Last name'
					errorMessage={errors.lastName?.message}
					{...register("lastName")}
				/>
			</div>
			<Input
				variant='outlined'
				label='PHONE NUMBER'
				placeholder='Phone number'
				errorMessage={errors.phone?.message}
				{...register("phone")}
			/>
			<Input
				variant='outlined'
				label='EMAIL ADDRESS'
				placeholder='Your Email'
				errorMessage={errors.email?.message}
				{...register("email")}
			/>
		</section>
	);
}
