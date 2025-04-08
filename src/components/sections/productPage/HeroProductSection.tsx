"use client";

import { useParams } from "next/navigation";
import { cardPageType } from "../../../types/cardPage";
import { useEffect, useState } from "react";
import { PathPage } from "../../ui/PathPage";
import PadingXLayouts from "../../layouts/PadingXLayouts";
import { SwiperSectionProduct } from "./SwiperSectionProduct";

export function HeroProductSection() {
	const [data, setData] = useState<cardPageType>();
	const params = useParams();
	const id = params.id;

	useEffect(() => {
		fetch(`/api/cardPage?id=${id}`)
			.then((req) => req.json())
			.then((data) => {
				setData(data);
				console.log(data);
			})
			.catch((error) => console.log(`Error fetching data:`, error));
	}, [id]);

	return (
		<PadingXLayouts>
			<div className='flex flex-col w-full'>
				<div className='flex gap-4 py-4'>
					<PathPage name='Home' path='/' />
					<PathPage name='Shop' path='/shop' />
					<PathPage
						name={data?.category || "All"}
						path={
							data?.category ? `/shop?categorie=${data?.category}` : `/shop?categorie=All`
						}
					/>
					<p className='font-inter '>{data?.name}</p>
				</div>
				<div className='flex w-full'>
					<SwiperSectionProduct images={data?.images || []} />
					<section></section>
				</div>
			</div>
		</PadingXLayouts>
	);
}
