import type { PropsWithChildren } from "react";
import Image from "next/image";
import { ButtonPage } from "@/components/ui";
interface Props {
	title: string;
	href: string;
	link: string;
	alt: string
}
export function ArticlesCard({
	title,
	href,
	link,
	alt
}: Props) {
	return (
		<div className='flex flex-col gap-4 lg:gap-6'>
			<Image
				src={href}
				alt={alt}
				width={0}
				height={0}
				sizes='100vw'
				style={{ width: "100%", height: "auto" }}
			/>
			<div className='gap-2'>
				<h5 className='text-18 lg:text-20 font-500 leading-140'>{title}</h5>
				<ButtonPage title='Read More' href={link} />
			</div>
		</div>
	);
}
