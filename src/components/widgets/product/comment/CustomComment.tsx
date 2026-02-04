"use client";

import Image from "next/image";
import { StarRating } from "@/components/ui/StarRating";
import { useState } from "react";
import { useWindowSize } from "@/hooks";
import { mobileSize } from "@/constants/windowSize";
import { IMAGE } from "@/config/image.config";
import useComment from "@/hooks/comment/useComment";
import { creaeteComment } from "@/services/requests/product";
import { useParams } from "next/navigation";

export function CustomComment() {
	const params = useParams();
	const id = Number(params.id);
	const { commentText, customReting, setCommentText, setCustomReting } =
		useComment();
	const { width } = useWindowSize();

	const checkingMobileSize = width > mobileSize;

	return (
		<section className='flex flex-col gap-10'>
			<div className='flex flex-col gap-4'>
				<h5 className='text-24 md:text-28 font-500 leading-120'>
					Customer Reviews
				</h5>
				<StarRating rating={customReting} setRating={setCustomReting} />
			</div>
			<div className='flex flex-row w-full h-16 border-2 rounded-3xl border-whitegray items-center justify-between p-6 pr-4'>
				<textarea
					className='w-fit md:w-3/5'
					onChange={(val) => setCommentText(val.target.value)}
					value={commentText}
				/>
				<button
					className=' border rounded-full border-black bg-black w-fit'
					onClick={() =>
						creaeteComment({
							rating: customReting,
							text: commentText,
							productId: id,
						})
					}
				>
					{checkingMobileSize ? (
						<p className='text-white text-16 font-500 leading-170 px-10 py-1'>
							Send Review
						</p>
					) : (
						<Image
							src={IMAGE.ARROWWHITE.src}
							alt={IMAGE.ARROWWHITE.alt}
							width={14}
							height={9}
							className='m-3'
						/>
					)}
				</button>
			</div>
		</section>
	);
}
