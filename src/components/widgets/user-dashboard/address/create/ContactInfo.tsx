"use client";

import { InputFullWidth } from "@/components/ui";
import { useState } from "react";

interface Props {
	firstName?: string;
	lastName?: string;
	phoneNymber?: string;
	email?: string;
}

export default function ContactInfo(props: Props) {
	const [contactInfo, setContactInfo] = useState(props);
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
					value={contactInfo.firstName ?? null}
					isRequired={true}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						setContactInfo((val) => {
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
					value={contactInfo.lastName ?? null}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						setContactInfo((val) => {
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
				value={contactInfo.phoneNymber ?? null}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					setContactInfo((val) => {
						return { ...val, phoneNymber: e.target.value };
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
				value={contactInfo.email ?? null}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					setContactInfo((val) => {
						return { ...val, email: e.target.value };
					});
				}}
			/>
		</section>
	);
}
