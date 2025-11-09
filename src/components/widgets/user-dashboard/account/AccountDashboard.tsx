"use client";

import { InputFullWidth, ButtonAction, ErrorToast } from "@/components/ui";
import { useUserStore } from "@/services/store/user/store";
import { useMemo, useState } from "react";
import type { IUserInfo, IUserSecurity } from "./type";
import { updateUserData } from "@/services/requests/user";
import type { IPassword, IUser } from "@/shared/types/user";

export function AccountDashboard() {
	const { user } = useUserStore();
	const [errorToast, setErrorToast] = useState<string | null>(null);

	const initialUserInfo = useMemo<IUserInfo>(
		() => ({
			firstName: user?.firstName ?? "",
			lastName: user?.lastName ?? "",
			email: user?.email ?? "",
		}),
		[user]
	);

	const [userInfo, setUserInfo] = useState<IUserInfo>(initialUserInfo);

	const [{ oldPassword, newPassword, confirmNewPassword }, setUserSecurity] =
		useState<IUserSecurity>({
			oldPassword: "",
			newPassword: "",
			confirmNewPassword: "",
		});

	async function onSubmit(e: React.ChangeEvent<HTMLFormElement>) {
		e.preventDefault();
		try {
			if (newPassword != confirmNewPassword) {
				throw new Error("Паролі не співпадають");
			}
			if (newPassword != "" && oldPassword == "") {
				throw new Error("Ви не ввели старий пароль");
			}
			if (!user) {
				throw new Error("Користувача незнайдено спробуйте авторизуватися знову");
			}

			const playload: IUser & IPassword = {
				id: user?.id,
				firstName: userInfo.firstName,
				lastName: userInfo.lastName,
				email: userInfo.email,
				oldPassword: oldPassword,
				newPassword: newPassword,
			};
			await updateUserData(playload);
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
				{user?.firstName}
			</h4>
			<InputFullWidth
				id='firstName'
				name='firstName'
				label='FIRST NAME'
				type='text'
				placeholder='Enter first name'
				value={userInfo.firstName}
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
				value={userInfo.lastName}
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
				disabled={true}
				value={userInfo.email}
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
				isCorect={newPassword == "" || oldPassword != ""}
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
