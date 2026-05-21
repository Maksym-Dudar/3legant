"use client";

import Radio from "@/components/ui/inputs/Radio";
import CustomSelect from "@/components/ui/select/CustomSelect";
import type { SelectOption } from "@/components/ui/select/type";
import type { TAddressMode } from "./CheckoutPage";

interface Props {
	addressMode: TAddressMode;
	options: SelectOption<number>[];
	selectedAddressId: number | null;
	handleAddressSelect: (addressId: number) => void;
	onCreateAddress: () => void;
	onExistingAddress: () => void;
}

export function AddressMode({
	addressMode,
	options,
	selectedAddressId,
	handleAddressSelect,
	onCreateAddress,
	onExistingAddress,
}: Props) {
	return (
		<section className='flex flex-col gap-6 border-1 border-description_gray rounded-lg py-10 px-6'>
			<h5 className='text-20 font-500 leading-140'>Address Mode</h5>
			<Radio
				label='Create address'
				name='address-settings'
				checked={addressMode === "new"}
				onChange={onCreateAddress}
			/>
			<Radio
				label='Use an already existing address'
				checked={addressMode === "existing"}
				name='address-settings'
				onChange={onExistingAddress}
			/>
			<CustomSelect
				label='EXISTING ADDRESS'
				placeholder='Select address'
				styleType='outlined'
				options={options}
				value={options.find((option) => option.value === selectedAddressId) ?? null}
				isDisabled={addressMode !== "existing"}
				onChange={(item) => {
					if (item) handleAddressSelect(item.value);
				}}
			/>
		</section>
	);
}
