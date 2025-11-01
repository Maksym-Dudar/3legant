"use client";

import ContactInfo from "./ContactInfo";
import ShippingAddress from "./ShippingAddress";
import { ButtonAction } from "@/components/ui";

export function CreateAddress() {
	return (
		<form onSubmit={() => {/* todo */ }} className='flex flex-col w-full gap-15 pb-20'>
			<ContactInfo />
			<ShippingAddress />
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
