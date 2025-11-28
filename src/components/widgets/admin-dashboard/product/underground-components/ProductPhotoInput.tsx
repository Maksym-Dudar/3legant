"use client";

import { useState, } from "react";
import Image from "next/image";
interface Props {
	imagesPreview: string[];
	handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function ProductPhotoInput({ imagesPreview, handleFileChange }: Props) {
	return (
		<div className='flex flex-col h-full w-full gap-6'>
			<h6 className='text-16 sm:text-18 lg:text-20 font-500 leading-140'>
				PRODUCT IMAGES
			</h6>
			<label
				htmlFor='productImages'
				className='inline-flex items-center justify-center px-4 py-2 rounded-full border-1 border-gray bg-white text-gray-900 shadow-md transition hover:shadow-lg active:shadow-inner'
			>
				Select product images
			</label>
			<input
				id='productImages'
				type='file'
				multiple
				accept='image/*'
				className='hidden'
				onChange={handleFileChange}
			/>

			<div className='grid grid-cols-2 gap-3'>
				{imagesPreview.map((src, index) => (
					<Image
						key={src}
						src={src}
						alt={`preview-${index}`}
						width={0}
						height={0}
						sizes='100vw'
						style={{ width: "auto", height: "auto", borderRadius: "10px" }}
					/>
				))}
			</div>
		</div>
	);
}
