import { Input } from "@/components/ui";
import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { AccountSchema } from "../model/account.schema";

interface Props {
	register: UseFormRegister<AccountSchema>;
	errors: FieldErrors<AccountSchema>;
}

export function AccountPassword({ register, errors }: Props) {
	return (
		<article className='flex flex-col w-full gap-6'>
			<h4 className='text-16 sm:text-18 md:text-20 font-600 leading-160'>
				Password
			</h4>
			<div className='flex flex-col w-full gap-1'>
				<Input
					label='OLD PASSWORD'
					variant='outlined'
					errorMessage={errors.oldPassword?.message}
					placeholder='Old password'
					{...register("oldPassword")}
				/>
				<Input
					label='NEW PASSWORD'
					variant='outlined'
					errorMessage={errors.newPassword?.message}
					placeholder='New password'
					{...register("newPassword")}
				/>
				<Input
					label='REPEAT NEW PASSWORD'
					variant='outlined'
					errorMessage={errors.confirmNewPassword?.message}
					placeholder='Repeat new password'
					{...register("confirmNewPassword")}
				/>
			</div>
		</article>
	);
}
