"use client";

import { CommentCard } from "@/entities/product/CommentCard";
import { CommentType } from "@/app/types/commentProduct";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export function CommentProductSection() {
	const [comment, setComment] = useState<CommentType[]>();
	const params = useParams();
	const id = params.id;

	useEffect(() => {
		fetch(`/api/cardPage/comment?id=${id}`)
			.then((req) => req.json())
			.then((data) => {
				const parsedData = data.map((item: CommentType) => ({
					...item,
					date: new Date(item.date),
				}));
				setComment(parsedData);
			})
			.catch((error) => console.log(`Error fetching data:`, error));
	}, [id]);

	return (
		<section className='flex flex-col gap-10'>
			<h5 className='flex justify-start font-500 text-28 leading-120'>
				{comment?.length} Reviews
			</h5>
			<div className='flex flex-col gap-6'>
				{comment?.map((item) => (
					<CommentCard props={item} key={item.comment} />
				))}
			</div>
		</section>
	);
}
