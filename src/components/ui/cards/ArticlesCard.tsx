import type { PropsWithChildren } from "react";
import Image from "next/image";
import { ButtonPage } from "../ButtonPage";
export function ArticlesCard({
	title,
	path,
	href,
}: PropsWithChildren<{ title: string; path: string; href: string }>) {
	return (
		<div className='flex flex-col gap-6'>
			<Image
				src={path}
				alt='banner'
				width={10000}
				height={10000}
				// sizes='100vw'
				// style={{ width: "30%", height: "auto" }}
			/>
			<div className='gap-2'>
				<h5 className='text-20 font-500 leading-140'>{title}</h5>
				<ButtonPage title='Read More' href={href} />
			</div>
		</div>
	);
}
