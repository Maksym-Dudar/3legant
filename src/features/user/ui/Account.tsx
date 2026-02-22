"use client";

import { useForm } from "react-hook-form";
import { AccountDetails } from "./AccountDetails";
import { AccountPassword } from "./AccountPassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { useErrorToast } from "@/hooks/useErrorToast";
import { useMutation } from "@tanstack/react-query";
import { userService } from "@/services/requests";
import type { IPartialUser } from "@/shared/types/user/user.type";
import { Button, ErrorToast } from "@/components/ui";
import { AccountSchema } from "../model/account.schema";

export function Account() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<AccountSchema>({
		resolver: zodResolver(AccountSchema),
	});

	const forgotPasswordMutation = useMutation({
		mutationFn: (data: IPartialUser) => userService.updateUser(data),
	});
	const { errorMessage, closeError } = useErrorToast(
		forgotPasswordMutation.error,
		forgotPasswordMutation.isError,
	);

	const submit = () => handleSubmit((data) => forgotPasswordMutation.mutate(data));

	return (
		<>
			{!!errorMessage && (
				<ErrorToast message={errorMessage} onClose={closeError} />
			)}
			<form onSubmit={submit} className='flex flex-col w-full gap-10 pb-20'>
				<AccountDetails register={register} errors={errors} />
				<div className='flex flex-col w-full gap-6'>
					<AccountPassword register={register} errors={errors} />
					<Button
						type='submit'
						text='Save changes'
						className='px-10 py-3 w-fit'
					/>
				</div>
			</form>
		</>
	);
}
