"use client";

import Link from "next/link";
import { AddressCard } from "./AddressCard";
import { PAGE } from "@/config/page.config";
import { Mode } from "./type";
import { useAddressStore } from "@/services/store/address/store";

export function AddressDashboard() {
	const { addressArray } = useAddressStore();

	return (
		<section className='w-full sm:px-4 xl:px-16'>
			<h4 className='text-16 sm:text-18 md:text-20 font-600 leading-160 pb-6'>
				Address
			</h4>
			<div className='grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-6 pb-10 w-full'>
				{addressArray.map((val) => (
					<AddressCard
						key={val.id}
						name={val.firstName + " " + val.lastName}
						label='Billing Address'
						phoneNumber={val.phoneNumber}
						address={
							val.buildingNumber +
							" " +
							val.street +
							" " +
							val.city +
							" " +
							val.country
						}
						id={val.id}
					/>
				))}
				<Link
					href={PAGE.ADDRESCREATE.link + `?mode=${Mode.CREATE}`}
					className='w-full h-32 rounded-lg border-1 border-descriptiongray text-center text-black text-48 font-200 leading-160 content-center'
				>
					+
				</Link>
			</div>
		</section>
	);
}
