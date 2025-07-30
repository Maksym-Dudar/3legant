"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { SwiperSectionProduct } from "./SwiperSectionProduct";
import Image from "next/image";
import Link from "next/link";
import PadingXLayouts from "@/shared/layout/PadingXLayouts";
import { ButtonAction, OfferTime, PathPage } from "@/shared/ui";
import { cardPageType } from "./types";
import { addProductToBagStore } from "@/features/store/bag/store";
import { QueryFunctionContext, useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "@/entities/loading/loading";
import Erro from "@/entities/erro/erro";
import { mobileSize } from "@/shared/constants/windowSize";
import { useWindowSize } from "@/shared/hooks/useWindowSize";
import { hasProductToWishlistStore, togleProductToWishlistStore, useWishlistStored } from "@/features/store/wishlist/store";

async function fetchCardPage({ queryKey, signal }: QueryFunctionContext) {
	const [id] = queryKey;
	const res = await axios.get("/api/cardPage", {
		params: {
			id: id,
		},
		signal,
	});
	return res.data;
}

export function HeroProductSection() {
	const [counter, setCount] = useState<number>(1);
	const [time, setTime] = useState<Date>(new Date());

	const params = useParams();
	const id = Number(params.id);

	const { width } = useWindowSize();

		const wishlist = useWishlistStored();
		const isInWishlist = [...wishlist].some((x) => x.id === id);

	const { data, isLoading, error } = useQuery<cardPageType>({
		queryKey: [id],
		queryFn: fetchCardPage,
	});

	const priceWithoutSale =
		data?.price && data?.sale
			? (data.price * (1 + data.sale)).toFixed(2)
			: undefined;

	useEffect(() => {
		const inter = setInterval(() => setTime(new Date()), 1000);

		return () => clearInterval(inter);
	}, []);

	let diftime =
		data?.offerExpiresIn &&
		new Date(new Date(data?.offerExpiresIn).getTime() - time.getTime());
	const itemToAddBag = { id: id, quantity: counter };

	if (error) return <Erro />;
	if (isLoading) return <Loading />;

	return (
		<PadingXLayouts>
			{data && (
				<div className='flex flex-col w-full'>
					<div className='flex gap-4 py-4'>
						<PathPage name='Home' path='/home' />
						<PathPage name='Shop' path='/shop' />
						<PathPage
							name={data?.category || "All"}
							path={
								data?.category
									? `/shop?categorie=${data?.category}`
									: `/shop?categorie=All`
							}
						/>
						<p className='font-inter text-12 md:text-14'>{data?.name}</p>
					</div>
					<div className='flex flex-col md:flex-row w-full justify-between gap-8 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-16'>
						{data && (
							<SwiperSectionProduct
								images={data?.images || []}
								isnew={data?.isnew}
								sale={data?.sale}
							/>
						)}
						<div className='flex flex-col w-full md:w-1/2'>
							<section className='flex flex-col w-full h-fit gap-4 pb-6 border-b-1'>
								<div className='flex gap-3 '>
									<div className='flex flex-row gap-1/2'>
										{Array(data?.nstar)
											.fill(0)
											.map((_, i) => (
												<Image
													src='/images/ui/star.svg'
													alt='Star'
													width={width > mobileSize ? 16 : 14}
													height={width > mobileSize ? 16 : 14}
													key={i}
												/>
											))}
									</div>
									<p className='font-inter font-400 text-10 md:text-12 leading-170'>
										{data?.reviews} Reviews
									</p>
								</div>
								<h3 className='text-36 md:text-40 font-500 leading-110'>
									{data?.name}
								</h3>
								<p className='text-14 md:text-16 leading-160 font-inter font-400 text-descriptiongrey'>
									{data?.description}
								</p>
								<div className='flex gap-3 items-center'>
									<p className='text-24 md:text-28 font-400 leading-120'>
										${data?.price}
									</p>
									{data?.sale && (
										<s className='text-notactive text-18 md:text-20 font-500 leading-140'>
											${priceWithoutSale}
										</s>
									)}
								</div>
							</section>
							{data?.sale && (
								<section className='flex flex-col py-6 gap-3 border-b-1'>
									<p className='font-inter font-400 text-14 md:text-16 leading-160 text-subtitel'>
										Offer expires in:
									</p>
									{diftime && (
										<div className='flex gap-4'>
											<OfferTime time={diftime.getDate()} title='Days' />
											<OfferTime time={diftime.getHours()} title='Hours' />
											<OfferTime time={diftime.getMinutes()} title='Minutes' />
											<OfferTime time={diftime.getSeconds()} title='Seconds' />
										</div>
									)}
								</section>
							)}
							<section className='flex flex-col py-6 gap-6'>
								<div className='flex flex-col gap-2'>
									<p className='font-inter font-600 text-14 md:text-16 leading-160 text-descriptiongrey'>
										Measurements
									</p>
									<p className='font-inter font-300 text-18 md:text-20 leading-180 text-black'>
										{data?.measurements}
									</p>
								</div>
								<div className='flex flex-col gap-4'>
									<div className='flex flex-col gap-2'>
										<div className='flex items-center gap-2'>
											<p className='font-inter font-600 text-14 md:text-16 leading-160 text-descriptiongrey'>
												Choose Color
											</p>
											<Image
												src='/images/ui/arrow.svg'
												alt='Arrow'
												width={5}
												height={8}
											/>
										</div>
										{data?.color}
									</div>

									<div className='flex flex-row gap-4'>
										{data?.same.map((item) =>
											item.isactive ? (
												<Link href={item.href} key={item.image}>
													<Image
														src={item.image}
														alt='Arrow'
														width={72}
														height={72}
													/>
												</Link>
											) : (
												<div className='flex opacity-40' key={item.image}>
													<Link href={item.href}>
														<Image
															src={item.image}
															alt='Arrow'
															width={72}
															height={72}
														/>
													</Link>
												</div>
											)
										)}
									</div>
								</div>
							</section>
							<section className='flex flex-col gap-4 py-8 border-b-1'>
								<div className='flex gap-6'>
									<div className='flex flex-row text-18 md:text-20 font-300 leading-170 w-fit px-3 md:px-4 py-[6px] md:py-3 gap-6 bg-grey rounded-lg'>
										<button
											onClick={() =>
												setCount((prev) => (prev > 1 ? prev - 1 : prev))
											}
										>
											-
										</button>
										<p className='flex w-1 justify-center'> {counter}</p>
										<button onClick={() => setCount((prev) => prev + 1)}>
											+
										</button>
									</div>
									<button
										onClick={() => togleProductToWishlistStore({ id })}
										className='flex w-full text-center border-1 border-black py-1 sm:py-2 rounded-lg justify-center items-center gap-2'
									>
										{isInWishlist ? (
											<Image
												src='/images/ui/like.svg'
												alt='O'
												width={24}
												height={24}
											/>
										) : (
											<Image
												src='/images/ui/shape.svg'
												alt='O'
												width={24}
												height={24}
											/>
										)}
										<p className='font-inter text-14 md:text-16 font-500 leading-180'>
											Wishlist
										</p>
									</button>
								</div>

								<ButtonAction
									text='Add to Cart'
									pading={3}
									onClick={() => {
										if (itemToAddBag) {
											addProductToBagStore(itemToAddBag);
										}
									}}
								/>
							</section>
							<section className='flex gap-14 pt-6'>
								<div className='font-inter font-400 text-12 leading-170 text-descriptiongrey'>
									<p>SKU</p>
									<p>CATEGORY</p>
								</div>
								<div className='font-inter font-400 text-12 leading-170'>
									<p>{data?.id}</p>
									<p>{data?.category}</p>
								</div>
							</section>
						</div>
					</div>
					{/* <TabsProductSection
						images={data?.images[0]}
						title={data?.name}
						subtitel={data?.description}
					/> */}
				</div>
			)}
		</PadingXLayouts>
	);
}
