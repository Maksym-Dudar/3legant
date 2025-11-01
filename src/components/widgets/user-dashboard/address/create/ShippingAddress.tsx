"use client";

import "tailwindcss";
import classNames from "classnames";
import { InputFullWidth } from "@/components/ui";
import { useState } from "react";
import { getNames, getCode } from "country-list";
import Select from "react-select";

interface Props {
	country?: { label: string; value: string };
	state?: string;
	city?: string;
	street?: string;
	buildingNumber?: string;
	zipCode?: string;
}

export default function ShippingAddress(props: Props) {
	const [shippingAddress, setShippingAddress] = useState(props);
	const options = getNames()
		.map((name) => {
			const code = getCode(name);
			return code ? { label: name, value: code } : null;
		})
		.filter((item): item is { label: string; value: string } => item !== null);

	return (
		<section className='flex flex-col w-full gap-6'>
			<h4 className='text-20 font-500 leading-140'>Shipping Address</h4>
			<Select
				id='country'
				name='country'
				options={options}
				value={props.country}
				classNames={{
					control: () => "text-14 md:text-16 font-400 leading-160",
					option: () => "text-14 md:text-16 font-400 leading-160",
					singleValue: () => "text-14 md:text-16 font-400 leading-160",
					placeholder: () =>
						"text-14 md:text-16 font-400 leading-160 opacity-70",
				}}
				styles={{
					control: (base) => ({
						...base,
						border: "1px solid var(--descriptiongrey)",
						borderRadius: "6px",
						padding: "0 7px",
						color: "var(--black)",
						fontFamily: "'Inter'",
					}),
				}}
			/>
			<InputFullWidth
				id='state'
				name='state'
				label='STATE'
				type='text'
				placeholder='Enter your state'
				value={shippingAddress.state ?? null}
				isRequired={true}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					setShippingAddress((val) => {
						return { ...val, state: e.target.value };
					});
				}}
			/>
			<InputFullWidth
				id='city'
				name='city'
				label='Town / City'
				type='text'
				placeholder='Enter your town or city'
				value={shippingAddress.city ?? null}
				isRequired={true}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					setShippingAddress((val) => {
						return { ...val, city: e.target.value };
					});
				}}
			/>
			<InputFullWidth
				id='street'
				name='street'
				label='STREET'
				type='text'
				placeholder='Enter your street'
				value={shippingAddress.street ?? null}
				isRequired={true}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					setShippingAddress((val) => {
						return { ...val, street: e.target.value };
					});
				}}
			/>
			<div className='flex flex-row gap-6 justify-between'>
				<InputFullWidth
					id='buildingNumber'
					name='buildingNumber'
					label='BUILDING NUMBER'
					type='text'
					placeholder='Enter your building number'
					value={shippingAddress.buildingNumber ?? null}
					isRequired={true}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						setShippingAddress((val) => {
							return { ...val, buildingNumber: e.target.value };
						});
					}}
				/>{" "}
				<InputFullWidth
					id='zipCode'
					name='zipCode'
					label='ZIP CODE'
					type='text'
					placeholder='Enter your zip code'
					value={shippingAddress.zipCode ?? null}
					isRequired={true}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						setShippingAddress((val) => {
							return { ...val, zipCode: e.target.value };
						});
					}}
				/>
			</div>
		</section>
	);
}
