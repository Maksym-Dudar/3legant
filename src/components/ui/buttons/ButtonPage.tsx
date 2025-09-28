import type { PropsWithChildren } from "react";
import Image from "next/image";
import Link from "next/link";
import { IMAGE } from "@/config/image.config";

export default function ButtonPage({
	title,
	href,
}: PropsWithChildren<{ title: string; href: string }>) {
	return (
		<div>
			<Link
				key={title}
				href={href}
				className='flex w-fit pt-2 border-b-1 border-black'
			>
				<div className='py-1 pr-1 font-inter text-14 lg:text-16 font-500 leading-170 text-black'>
					{title}
				</div>
				<Image
					src={IMAGE.ARROWBLACK.href}
					alt={IMAGE.ARROWBLACK.alt}
					width={20}
					height={20}
					className='flex'
				/>
			</Link>
		</div>
	);
}
