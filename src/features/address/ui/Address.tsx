"use client";

import { Button, Input } from "@/components/ui";
import CustomSelect from "@/components/ui/select/CustomSelect";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { AddressSchema } from "../model/address.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAddressForm } from "../hook/useAddressForm";

interface Props {
	id?: number;
}

export default function Address({ id }: Props) {
	const { data, options, createAddress, updateAddress } = useAddressForm({id});
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
		control,
	} = useForm<AddressSchema>({
		resolver: zodResolver(AddressSchema),
	});
	const submit = () =>
		handleSubmit((data) => 
			!id ? createAddress(data) : updateAddress({ id, ...data }),
		);
	useEffect(() => {
		data && reset(data);
	}, [data, reset]);

	return (
		<form className='flex flex-col gap-5 w-full pb-20' onSubmit={submit}>
			<h4 className='text-20 font-500 leading-140'>Shipping Address</h4>
			<Input
				variant='outlined'
				label='ADDRESS NAME'
				placeholder='Address name'
				errorMessage={errors.name?.message}
				{...register("name")}
			/>
			<Controller
				control={control}
				name='country'
				render={({ field }) => (
					<CustomSelect
						label='COUNTRY'
						placeholder='Country'
						className='w-full '
						options={options}
						styleType='outlined'
						onChange={(option) => field.onChange(option?.value)}
						value={options.find((o) => o.value === field.value) ?? null}
					/>
				)}
			/>
			<Input
				variant='outlined'
				label='STATE'
				placeholder='State'
				errorMessage={errors.state?.message}
				{...register("state")}
			/>
			<Input
				variant='outlined'
				label='TOWN / CITY'
				placeholder='Town / City'
				errorMessage={errors.city?.message}
				{...register("city")}
			/>
			<Input
				variant='outlined'
				label='STREET'
				placeholder='Street'
				errorMessage={errors.street?.message}
				{...register("street")}
			/>
			<div className='flex flex-row gap-6 justify-between'>
				<Input
					variant='outlined'
					label='BUILDING NUMBER'
					placeholder='Building number'
					errorMessage={errors.buildingNumber?.message}
					{...register("buildingNumber")}
				/>
				<Input
					variant='outlined'
					label='ZIP CODE'
					placeholder='Zip Code'
					errorMessage={errors.zipCode?.message}
					{...register("zipCode")}
				/>
			</div>
			<Input
				variant='outlined'
				label='PHONE NUMBER'
				placeholder='Phone number'
				errorMessage={errors.phone?.message}
				{...register("phone")}
			/>
			<Button text={id ? "Update" : "Create"} className='w-fit px-20 py-2' />
		</form>
	);
}
2;
