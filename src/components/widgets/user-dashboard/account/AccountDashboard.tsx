"use client";

import { InputFullWidth, ButtonAction, ErrorToast } from "@/components/ui";
import { useUserStore } from "@/services/store/user/store";
import { useState } from "react";
import type { IUserInfo, IUserSecurity } from "./type";

export function AccountDashboard() {
	const { user } = useUserStore();
	const [{ firstName, lastName, email }, setUserInfo] = useState<IUserInfo>({
		firstName: user?.firstName ?? "",
		lastName: user?.lastName ?? "",
		email: user?.email ?? "",
	});

	const [{ oldPassword, newPassword, confirmNewPassword }, setUserSecurity] =
		useState<IUserSecurity>({
			oldPassword: "",
			newPassword: "",
			confirmNewPassword: "",
		});
	
	const [errorToast, setErrorToast] = useState<string | null>(null);

	async function onSubmit(e: React.ChangeEvent<HTMLFormElement>) {
		e.preventDefault();
		try {
			
		} catch (error) {
			setErrorToast(String(error));
		}
	}
	return (
		<form
			onSubmit={onSubmit}
			className='flex w-full flex-col items-start gap-6 pb-20'
		>
			{errorToast && (
				<ErrorToast message={errorToast} onClose={() => setErrorToast(null)} />
			)}
			<h4 className='text-16 sm:text-18 md:text-20 font-600 leading-160'>
				Account Details
			</h4>
			<InputFullWidth
				id='firstName'
				name='firstName'
				label='FIRST NAME'
				type='text'
				placeholder='Enter first name'
				value={firstName}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					setUserInfo((val) => {
						return { ...val, firstName: e.target.value };
					});
				}}
			/>
			<InputFullWidth
				id='lastName'
				name='lastName'
				label='LAST NAME'
				type='text'
				placeholder='Enter last name'
				value={lastName}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					setUserInfo((val) => {
						return { ...val, lastName: e.target.value };
					});
				}}
			/>
			<InputFullWidth
				id='email'
				name='email'
				label='EMAIL'
				type='email'
				placeholder='Enter email'
				value={email}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					setUserInfo((val) => {
						return { ...val, email: e.target.value };
					});
				}}
			/>

			<h4 className='text-16 sm:text-18 md:text-20 font-600 leading-160'>
				Password
			</h4>

			<InputFullWidth
				id='oldPassowrd'
				name='oldPassowrd'
				label='OLD PASSWORD'
				type='text'
				placeholder='Enter old password'
				value={oldPassword}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					setUserSecurity((val) => {
						return { ...val, oldPassword: e.target.value };
					});
				}}
			/>
			<InputFullWidth
				id='newPassword'
				name='newPassword'
				label='NEW PASSWORD'
				type='text'
				placeholder='Enter new password'
				value={newPassword}
				minLength={8}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					setUserSecurity((val) => {
						return { ...val, newPassword: e.target.value };
					});
				}}
			/>
			<InputFullWidth
				id='confirmNewPassowrd'
				name='confirmNewPassowrd'
				label='REPEAT NEW PASSWORD'
				type='text'
				placeholder='Enter new password'
				value={confirmNewPassword}
				minLength={8}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					setUserSecurity((val) => {
						return { ...val, confirmNewPassword: e.target.value };
					});
				}}
				isCorect={newPassword == confirmNewPassword}
			/>
			<ButtonAction
				type='submit'
				text='Save changes'
				paddingY={3}
				paddingX={10}
				width={"fit"}
			/>
		</form>
	);
}
