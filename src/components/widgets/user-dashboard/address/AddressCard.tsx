import { IMAGE } from "@/config/image.config";
import Image from "next/image";

interface Props {
    label: string;
    name: string;
    phoneNumber: string;
    address: string;
}

export function AddressCard({ label, name, phoneNumber, address}: Props) {
	return (
		<div className='w-full h-fit rounded-lg border-1 border-descriptiongrey gap-2 p-4'>
			<section className='flex flex-row w-full justify-between'>
				<h6 className='text-16 font-600 leading-160 text-black'>{label}</h6>
				<button className='flex flex-row gap-2 items-center'>
					<Image
						src={IMAGE.EDIT.href}
						alt={IMAGE.EDIT.alt}
						width={14}
						height={14}
						className='object-cover'
					/>
					<p className='text-16 font-600 leading-160 text-descriptiongrey'>
						Edit
					</p>
				</button>
			</section>
			<section className='flex flex-col gap-1 w-full'>
                <p className='text-14 font-400 leading-160 text-black'>{name}</p>
                <p className='text-14 font-400 leading-160 text-black'>{phoneNumber}</p>
                <p className='text-14 font-400 leading-160 text-black'>{address}</p>
			</section>
		</div>
	);
}
