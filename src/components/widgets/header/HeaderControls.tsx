"use client";

import { PAGE } from "@/config/page.config";
import Link from "next/link";
import Image from "next/image";
import { IMAGE } from "@/config/image.config";

interface Props {
	showAdaptive: boolean;
	size: number;
	searchOnClick: () => void;
	bagOnClick: () => void;
}

export function HeaderControls({
	showAdaptive,
	size,
	searchOnClick,
	bagOnClick,
}: Props) {
	return (
		<div className='flex gap-4 items-center'>
			{!showAdaptive && (
				<button onClick={searchOnClick}>
					<Image
						src={IMAGE.SEARCH.href}
						alt={IMAGE.SEARCH.alt}
						width={23}
						height={23}
					/>{" "}
				</button>
			)}
			{!showAdaptive && (
				<Link key={PAGE.ACCOUNT.link} href={PAGE.ACCOUNT.link}>
					<Image
						src={IMAGE.USERICON.href}
						alt={IMAGE.USERICON.alt}
						width={24}
						height={24}
					/>{" "}
				</Link>
			)}
			<button className='flex gap-1 items-center' onClick={bagOnClick}>
				<Image
					src={IMAGE.SHOPPINGBAG.href}
					alt={IMAGE.SHOPPINGBAG.alt}
					width={25}
					height={25}
				/>{" "}
				<div className='w-4 md:w-5 h-4 md:h-5 bg-black text-white flex items-center justify-center rounded-full text-10 md:text-12 font-700 leading-80'>
					{size}
				</div>
			</button>
		</div>
	);
}
