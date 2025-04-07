import Link from "next/link";
import Image from "next/image";
import type { PropsWithChildren } from "react";
export function PathPage({
	name,
	path,
}: PropsWithChildren<{ name: string; path: string }>) {
	return (
		<div className='flex items-center gap-2'>
			<Link className='font-inter text-descriptiongrey' href={path} >
				{name}
			</Link>
			<Image src='/images/ui/arrow.svg' alt='Arrow' width={5} height={8} />
		</div>
	);
}
