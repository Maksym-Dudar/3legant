import type { PropsWithChildren } from "react";
import Image from "next/image";
import Link from "next/link";

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
				<div className='py-1 pr-1 font-inter text-16 font-500 leading-170 text-black'>
					{title}
				</div>
				<Image
					src='/images/ui/button_arrow.svg'
					alt='sofa'
					width={20}
					height={20}
					className='flex'
				/>
			</Link>
		</div>
	);
}
