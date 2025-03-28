import type { PropsWithChildren } from "react";
import Image from "next/image";
import Link from "next/link";

export function ButtonPage({title, href }: PropsWithChildren<{title: string, href:string}>) {
	return (
		<div>
			<Link key={title} href={href} className='flex w-fit pt-3 border-b-2 border-black'>
				<div className="py-1 pr-1 font-inter text-xl">{title}</div>
				<Image
					src='/images/ui/button_arrow.svg'
					alt='sofa'
					width={20}
					height={20}
					className="flex"
				/>
			</Link>
		</div>
	);
}
