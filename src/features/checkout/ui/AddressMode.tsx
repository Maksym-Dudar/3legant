"use client"

import Radio from "@/components/ui/inputs/Radio";
import CustomSelect from "@/components/ui/select/CustomSelect";
import type { SelectOption } from "@/components/ui/select/type";
import { useState } from "react";

type AddressMode = "existing" | "new";

interface Props {
	options: SelectOption<number>[];
	handleAddressSelect: (addressId: number) => void;
}

export function AddressMode({ options, handleAddressSelect }: Props) {
	const [addressMode, setAddressMode] = useState<AddressMode>("new");
	return (
		<section className='flex flex-col gap-6 border-1 border-description_gray rounded-lg py-10 px-6'>
			<h5 className='text-20 font-500 leading-140'>Address Mode</h5>
			<Radio
				label='Create address'
				name='address-settings'
				checked={addressMode == "new"}
				onChange={() => setAddressMode("new")}
			/>
			<Radio
				label='Use an already existing address'
				checked={addressMode == "existing"}
				name='address-settings'
				onChange={() => setAddressMode("existing")}
			/>
			<CustomSelect
				label='EXISTING ADDRESS'
				placeholder='Select address'
				styleType='outlined'
				options={options}
				value={null}
				isDisabled={addressMode != "existing"}
				onChange={(item) => {
					if (item) handleAddressSelect(item.value);
				}}
			/>
		</section>
	);
}
