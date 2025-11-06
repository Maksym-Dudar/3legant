"use client";

import { InputFullWidth } from "@/components/ui";
import type { IAddressInfo, IAddress, IAddressCreate } from "@/shared/types/address.type";
import { getNames, getCode } from "country-list";
import Select from "react-select";

export default function ShippingAddress({
	country,
	state,
	street,
	city,
	buildingNumber,
	zipCode,
	setInfo,
}: IAddressInfo & { setInfo: React.Dispatch<React.SetStateAction<IAddressCreate>> }) {
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
				value={country}
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
				onChange={(selectedOption) => {
					if (selectedOption) {
						setInfo((val) => ({
							...val,
							country: selectedOption,
						}));
					} else {
						console.log("error");
					}
				}}
			/>
			<InputFullWidth
				id='state'
				name='state'
				label='STATE'
				type='text'
				placeholder='Enter your state'
				value={state}
				isRequired={true}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					setInfo((val) => {
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
				value={city}
				isRequired={true}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					setInfo((val) => {
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
				value={street}
				isRequired={true}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					setInfo((val) => {
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
					value={buildingNumber}
					isRequired={true}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						setInfo((val) => {
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
					value={zipCode}
					isRequired={true}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						setInfo((val) => {
							return { ...val, zipCode: e.target.value };
						});
					}}
				/>
			</div>
		</section>
	);
}
