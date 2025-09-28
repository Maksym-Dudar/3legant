"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { SwiperSectionProduct } from "./SwiperSectionProduct";
import { useQuery } from "@tanstack/react-query";
import { fetchCardPage } from "@/services/product";
import { Error, Loading } from "../..";
import PadingXLayouts from "@/layout/PadingXLayouts";
import type { ICardPage } from "../types";
import { HeaderProduct } from "../HeaderProduct";
import { InfoProduct } from "./InfoProduct";
import { CountdownTimer } from "./CountdownTimer";
import { OptionsProduct } from "./OptionsProduct";
import { PurchaseActions } from "./PurchaseActions";
import { MataDataProduct } from "./MataDataProduct";

export function HeroProductSection() {
	const [_, setTime] = useState<Date>(new Date());
	
	const params = useParams();
	const id = Number(params.id);
	
	const { data, isLoading, error } = useQuery<ICardPage>({
		queryKey: [id],
		queryFn: fetchCardPage,
	});
	
	useEffect(() => {
		const inter = setInterval(() => setTime(new Date()), 1000);
		
		return () => clearInterval(inter);
	}, []);
	
	let diftime =
		data?.offerExpiresIn &&
		data.sale &&
		new Date(new Date(data.offerExpiresIn).getTime() - Date.now()) || new Date()
	

	if (error) return <Error />;
	if (isLoading) return <Loading />;

	return (
		<PadingXLayouts>
			{data && (
				<div className='flex flex-col w-full'>
					<HeaderProduct category={data.category} nameProduct={data.name} />
					<div className='flex flex-col md:flex-row w-full justify-between gap-8 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-16'>
						{data && (
							<SwiperSectionProduct
								images={data.images || []}
								isnew={data.isnew}
								sale={data.sale}
							/>
						)}
						<div className='flex flex-col w-full md:w-1/2'>
							<InfoProduct
								name={data.name}
								nstar={data.nstar}
								reviews={data.reviews}
								description={data.description}
								price={data.price}
								priceWithoutSale={data.priceWithoutSale}
								sale={!!data.sale}
							/>
							{data.sale && <CountdownTimer diftime={diftime} />}
							<OptionsProduct
								color={data.color}
								same={data.same}
								measurements={data.measurements}
							/>
							<PurchaseActions id={id} />
							<MataDataProduct id={id} category={data.category} />
						</div>
					</div>

				</div>
			)}
		</PadingXLayouts>
	);
}
