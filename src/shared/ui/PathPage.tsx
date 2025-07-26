import Link from "next/link";
import Image from "next/image";
import type { PropsWithChildren } from "react";
export default function PathPage({
	name,
	path,
}: PropsWithChildren<{ name: string; path: string }>) {
	return (
		<div className='flex items-center gap-2'>
			<Link
				className='font-inter text-descriptiongrey text-12 md:text-14'
				href={path}
			>
				{name}
			</Link>
			<Image src='/images/ui/arrow.svg' alt='Arrow' width={5} height={8} />
		</div>
	);
}
