"use client";

import { InputFullWidth } from "@/components/ui";
import type { IContactInfo, IAddress, IAddressCreate } from "@/shared/types/address.type";

export default function ContactInfo({
	firstName,
	lastName,
	phoneNumber,
	email,
	setInfo,
}: IContactInfo & { setInfo: React.Dispatch<React.SetStateAction<IAddressCreate>> }) {
	return (
		<section className='flex flex-col w-full gap-6'>
			<h4 className='text-20 font-500 leading-140'>Contact Infomation</h4>
			<div className='flex flex-row gap-6'>
				<InputFullWidth
					id='firstName'
					name='firstName'
					label='FIRST NAME'
					type='text'
					placeholder='Enter first name'
					value={firstName}
					isRequired={true}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						setInfo((val) => {
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
					isRequired={true}
					value={lastName}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						setInfo((val) => {
							return { ...val, lastName: e.target.value };
						});
					}}
				/>
			</div>
			<InputFullWidth
				id='phoneNumber'
				name='phoneNumber'
				label='PHONE NUMBER'
				type='tel'
				placeholder='Enter phone number'
				isRequired={true}
				value={phoneNumber}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					setInfo((val) => {
						return { ...val, phoneNumber: e.target.value };
					});
				}}
			/>
			<InputFullWidth
				id='email'
				name='email'
				label='EMAIL ADDRESS'
				type='email'
				placeholder='Enter first name'
				isRequired={true}
				value={email}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					setInfo((val) => {
						return { ...val, email: e.target.value };
					});
				}}
			/>
		</section>
	);
}
