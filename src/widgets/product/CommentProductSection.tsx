"use client";

import Erro from "@/entities/error/erro";
import Loading from "@/entities/loading/loading";
import { CommentCard } from "@/entities/product/CommentCard";
import { mobileSize } from "@/shared/constants/windowSize";
import { useWindowSize } from "@/shared/hooks/useWindowSize";
import PadingXLayouts from "@/shared/layout/PadingXLayouts";
import { CommentType } from "@/shared/types/comment.type";
import { StarRating } from "@/shared/ui/StarRating";
import { QueryFunctionContext, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

async function fetchComment({ queryKey, signal }: QueryFunctionContext) {
	const [_key, id] = queryKey;
	const res = await axios.get("/api/cardPage/comment", {
		params: {
			id: id,
		},
		signal,
	});
	return res.data;
}

export function CommentProductSection() {
	const params = useParams();
	const id = params.id;

	const [customReting, setCustomReting] = useState<number>(0);
	const { width } = useWindowSize();

	const { data, isLoading, error } = useQuery<CommentType[]>({
		queryKey: ["comment", id],
		queryFn: fetchComment,
	});

	if (error) return <Erro />;
	if (isLoading) return <Loading />;

	return (
		<PadingXLayouts>
			<div className='flex flex-col gap-10'>
				<section className='flex flex-col gap-10'>
					<div className='flex flex-col gap-4'>
						<h5 className='text-24 md:text-28 font-500 leading-120'>
							Customer Reviews
						</h5>
						<StarRating rating={customReting} setRating={setCustomReting} />
					</div>
					<div className='flex flex-row w-full h-16 border-2 rounded-3xl border-whitegray items-center justify-between p-6 pr-4'>
						<input type='text' className='w-fit md:w-3/5' />
						<button
							className=' border-1 rounded-full border-black bg-black w-fit'
							onClick={() => {}}
						>
							{width > mobileSize ? (
								<p className='text-white text-16 font-500 leading-170 px-10 py-1'>
									Send Review
								</p>
							) : (
								<Image
									src='/images/ui/white_arrow.svg'
									alt='arrow'
									width={14}
										height={9}
										className="m-3"
								/>
							)}
						</button>
					</div>
				</section>
				<section className='flex flex-col gap-10'>
					<h5 className='flex justify-start font-500 text-20 sm:text-24 md:text-28 leading-120'>
						{data?.length} Reviews
					</h5>
					<div className='flex flex-col gap-4 sm:gap-5 md:gap-6'>
						{data?.map((item) => (
							<CommentCard {...item} key={item.comment} />
						))}
					</div>
				</section>
			</div>
		</PadingXLayouts>
	);
}
