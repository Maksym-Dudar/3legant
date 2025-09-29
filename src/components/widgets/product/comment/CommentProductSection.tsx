"use client";

import {  useQuery, type QueryFunctionContext } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { Error, Loading } from "../..";
import PadingXLayouts from "@/layout/PadingXLayouts";
import type { IComment } from "../types";
import { CommentCard } from "@/components/product/Comment";
import { fetchComment } from "@/services/product";
import { CustomComment } from "./CustomComment";


export function CommentProductSection() {
	const params = useParams();
	const id = params.id;
	
	const { data, isLoading, error } = useQuery<IComment[]>({
		queryKey: ["comment", id],
		queryFn: fetchComment,
	});
	
	if (error) return <Error masage={error.message} />;
	if (isLoading) return <Loading />;

	return (
		<PadingXLayouts>
			<div className='flex flex-col gap-10 w-full'>
				<CustomComment />
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
