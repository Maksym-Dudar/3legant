import type { PropsWithChildren } from "react";
import Image from "next/image";
import { CommentType } from "@/shared/types/comment";


export function CommentCard({
	props,
}: PropsWithChildren<{ props: CommentType }>) {
	return (
		<div className='flex gap-10 pb-6 border-b-1'>
			<div className='w-18 h-18'>
				<Image
					src={props.avatar}
					alt={props.name}
					width={0}
					height={0}
					sizes='100vw'
					style={{ width: "100%", height: "auto", borderRadius: "50%" }}
				/>
			</div>
			<section className='flex flex-col gap-4'>
				<h6 className='text-20 font-inter font-600 leading-160'>
					{props.name}
				</h6>
				<div className='flex flex-row gap-1/2'>
					{Array(props?.nstar)
						.fill(0)
						.map((_, i) => (
							<Image
								src='/images/ui/star.svg'
								alt='Star'
								width={16}
								height={16}
								key={i}
							/>
						))}
				</div>
				<p className='text-16 font-inter font-400 leading-160 text-descriptiongrey'>
					{props.comment}
				</p>
				<p className='text-14 font-400 leading-160 text-footerline pt-2'>
					{props.date.getFullYear()}-{props.date.getMonth()}-{props.date.getDate()}
				</p>
			</section>
		</div>
	);
}
