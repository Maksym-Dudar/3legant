import Link from "next/link";
import { AddressCard } from "./AddressCard";
import { PAGE } from "@/config/page.config";

export function AddressDashboard() {
  return (
		<div className='grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 w-full sm:px-4 xl:px-16 gap-6'>
			<AddressCard
				name='Sofia Havertz'
				label='Billing Address'
				phoneNumber='(+1) 234 567 890'
				address='345 Long Island, NewYork, United States'
			/>
			<Link
				href={PAGE.ADDRESCREATE.link}
				className='w-full h-32 rounded-lg border-1 border-descriptiongrey text-center text-black text-48 font-200 leading-160 content-center'
			>
				+
			</Link>
		</div>
	);
}