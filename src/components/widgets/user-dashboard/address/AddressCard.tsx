import { IMAGE } from "@/config/image.config";
import { PAGE } from "@/config/page.config";
import Image from "next/image";
import Link from "next/link";
import { Mode } from "./type";

interface Props {
    label: string;
    name: string;
    phoneNumber: string;
	address: string;
	id: number;
}

export function AddressCard({ label, name, phoneNumber, address, id }: Props) {
	return (
		<div className='w-full h-fit rounded-lg border-1 border-descriptiongray gap-2 p-4'>
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
					<Link
						href={PAGE.ADDRESCREATE.link + `?mode=${Mode.EDIT}&addressId=${id}`}
						className='text-16 font-600 leading-160 text-descriptiongray'
					>
						Edit
					</Link>
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
