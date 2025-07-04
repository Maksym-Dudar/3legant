"use client";

import { useParams } from "next/navigation";
import { PropsWithChildren, useEffect, useState } from "react";
import Image from "next/image";


export function AdditionalInfoProductSection({
	images,
	title,
	subtitel,
}: PropsWithChildren<{ images: string; title: string; subtitel: string }>) {
	const [text, setText] = useState<string>();
	const params = useParams();
	const id = params.id;

	useEffect(() => {
		fetch(`/api/cardPage/additional_info?id=${id}`)
			.then((req) => req.json())
			.then((data) => {
				setText(data.text);
			})
			.catch((error) => console.log(`Error fetching data:`, error));
	}, [id]);

	return (
		<div className='flex justify-between gap-8'>
			<section className='flex flex-col gap-6 w-fit'>
				<h4 className='font-500 text-40 leading-110'>{title}</h4>
				<h6 className='text-18 leading-160 font-inter font-300 text-descriptiongrey'>{subtitel}</h6>
				<p className='text-22 leading-140 font-400'>{text}</p>
			</section>
			<Image
				src={images}
				alt={images}
				width={0}
				height={0}
				sizes='100vw'
				style={{ width: "70%", height: "auto", objectFit: "cover", padding: "20px 0"}}
			/>
		</div>
	);
}
