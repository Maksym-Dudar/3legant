"use client";

import { useParams } from "next/navigation";
import { SwiperSectionProduct } from "./SwiperSectionProduct";
import { useQuery } from "@tanstack/react-query";
import { Error, Loading } from "../..";
import PadingXLayouts from "@/layout/PadingXLayouts";
import type { IProductPage } from "../types";
import { HeaderProduct } from "../HeaderProduct";
import { InfoProduct } from "./InfoProduct";
import { CountdownTimer } from "./CountdownTimer";
import { OptionsProduct } from "./OptionsProduct";
import { PurchaseActions } from "./PurchaseActions";
import { MetaDataProduct } from "./MetaDataProduct";
import { fetchCardPage } from "@/services/requests/product";
import { useTimer } from "@/hooks";

export function HeroProductSection() {
	
	
	const params = useParams();
	const id = Number(params.id);
	const { data, isLoading, error } = useQuery<IProductPage>({
		queryKey: [id],
		queryFn: fetchCardPage,
	});

	if (error) return <Error masage={error.message} />;
	if (isLoading) return <Loading />;

	return (
		<PadingXLayouts>
			{data && (
				<div className='flex flex-col w-full'>
					<HeaderProduct category={data.category[0]} nameProduct={data.title} />
					<div className='flex flex-col md:flex-row w-full justify-between gap-8 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-16'>
						{data && (
							<SwiperSectionProduct
								images={data.image || []}
								isNew={data.isNew}
								sale={data.sale}
							/>
						)}
						<div className='flex flex-col w-full md:w-1/2'>
							<InfoProduct
								name={data.title}
								rating={data.rating}
								reviews={data.reviews}
								description={data.description}
								price={data.price}
								priceWithoutSale={data.priceWithoutSale}
								sale={!!data.sale}
							/>
							{data.sale && (
								<CountdownTimer
									offerExpires={new Date(data.offerExpires)}
									sale={!!data.sale}
								/>
							)}
							<OptionsProduct
								color={data.color}
								same={data.same}
								measurements={data.measurements}
							/>
							<PurchaseActions id={id} />
							<MetaDataProduct id={id} category={data.category} />
						</div>
					</div>
				</div>
			)}
		</PadingXLayouts>
	);
}


