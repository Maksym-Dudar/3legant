"use client";

import { CardType } from "@/app/types/card";
import { useEffect, useState } from "react";
import Image from "next/image";
import PadingXLayouts from "@/app/layout/PadingXLayouts";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Card } from "@/entities/Card";

export function CardGrid() {
	const searchParams = useSearchParams();
	const initialCategorie = searchParams.get("categorie") || "All";
	const pathname = usePathname();
	const router = useRouter();

	// card data
	const [data, setData] = useState<CardType[]>([]);
	const [page, setPage] = useState<number>(1);
	const [loading, setLoading] = useState<boolean>(false);
	const [isEnd, setIsEnd] = useState<boolean>(false);

	// filter data CATEGORIE
	const [categorie, setCategorie] = useState<string>(initialCategorie);
	const [isOpenCategorie, setIsOpenCategorie] = useState(false);
	const categories = [
		"All",
		"Living Room",
		"Bedroom",
		"Kitchen",
		"Bathroom",
		"Office",
	];

	// filter data PRICE
	const [price, setPrice] = useState<string>("All Price");
	const [isOpenPrice, setIsOpenPrice] = useState(false);
	const prices = [
		"All Price",
		"0-100",
		"100-200",
		"200-300",
		"300-400",
		"400-500",
	];

	// sorting data
	const [sort, setSort] = useState<string>("Top Rated");
	const [isOpenSort, setIsOpenSort] = useState(false);
	const [fetchsort, setFetchSort] = useState(false);
	const sortes = [
		"Top Rated",
		"Price: Low to High",
		"Price: High to Low",
		"Newest Arrivals",
	];

	// retch request data
	useEffect(() => {
		setLoading(true);
		fetch(
			`/api/card/all?page=${page}&limit=8&categorie=${categorie}&price=${price}&sort=${sort}`
		)
			.then((res) => res.json())
			.then(({ data, isend }) => {
				setData(data);
				setIsEnd(isend);
			})
			.catch((error) => {
				console.log("Error fetch data");
				setData([]);
			})
			.finally(() => {
				setLoading(false);
				setFetchSort(!fetchsort);
				const params = new URLSearchParams(searchParams);
				params.set("categorie", categorie);
				router.push(`${pathname}?${params.toString()}`, { scroll: false });
			});
	}, [categorie, price, page, sort]);

	return (
		<PadingXLayouts>
			<div className='flex flex-col justify-center items-center pt-15 pb-25'>
				<div className='flex justify-between w-full'>
					<div className='flex justify-start items-center gap-6'>
						<div className='relative flex flex-col w-60 justify-center gap-2'>
							<p className='text-16 font-400 leading-160 font-inter text-descriptiongrey'>
								CATEGORIES
							</p>
							<button
								className='flex justify-between w-full border-2 rounded-md border-descriptiongrey px-4 py-2'
								onClick={() => setIsOpenCategorie(!isOpenCategorie)}
							>
								<h6>{categorie}</h6>
								<Image
									src='/images/ui/arrow.svg'
									alt='Arrow'
									width={5}
									height={8}
									className='rotate-90'
								/>
							</button>
							{isOpenCategorie && (
								<ul
									className='absolute flex flex-col w-full bg-white border-2 rounded-b-md border-x-descriptiongrey border-b-descriptiongrey z-50 top-18'
									onMouseLeave={() => setIsOpenCategorie(false)}
								>
									{categories.map((item) => (
										<li
											key={item}
											className='font-inter text-16 font-500 lesding-160 py-1 pl-4'
											onClick={() => {
												setCategorie(item);
												setIsOpenCategorie(false);
											}}
										>
											{item === categorie ? (
												<p className='text-descriptiongrey pointer-events-none'>
													{item}
												</p>
											) : (
												<p>{item}</p>
											)}
										</li>
									))}
								</ul>
							)}
						</div>
						<div className='relative flex flex-col w-60 justify-center gap-2'>
							<p className='text-16 font-400 leading-160 font-inter text-descriptiongrey'>
								PRICE
							</p>
							<button
								className='flex justify-between w-full border-2 rounded-md border-descriptiongrey px-4 py-2'
								onClick={() => setIsOpenPrice(!isOpenPrice)}
							>
								<h6>{price}</h6>
								<Image
									src='/images/ui/arrow.svg'
									alt='Arrow'
									width={5}
									height={8}
									className='rotate-90'
								/>
							</button>
							{isOpenPrice && (
								<ul
									className='absolute flex flex-col w-full bg-white border-2 rounded-b-md border-x-descriptiongrey border-b-descriptiongrey z-50 top-18'
									onMouseLeave={() => setIsOpenPrice(false)}
								>
									{prices.map((item) => (
										<li
											key={item}
											className='font-inter text-16 font-500 lesding-160 py-1 pl-4'
											onClick={() => {
												setPrice(item);
												setIsOpenPrice(false);
											}}
										>
											{item === price ? (
												<p className='text-descriptiongrey pointer-events-none'>
													{item}
												</p>
											) : (
												<p>{item}</p>
											)}
										</li>
									))}
								</ul>
							)}
						</div>
					</div>
					<div className='relative flex flex-row w-60 justify-center gap-4 items-end'>
						<p className='text-16 font-600 leading-160 font-inter text-black w-max items-center'>
							Sort by
						</p>
						<button
							className='flex justify-between w-max gap-2 items-center'
							onClick={() => setIsOpenSort(!isOpenSort)}
						>
							<h6>{sort}</h6>
							<Image
								src='/images/ui/arrow.svg'
								alt='Arrow'
								width={5}
								height={8}
								className='rotate-90'
							/>
						</button>
						{isOpenSort && (
							<ul
								className='absolute flex flex-col w-full bg-white z-50 top-18'
								onMouseLeave={() => setIsOpenSort(false)}
							>
								{sortes.map((item) => (
									<li
										key={item}
										className='font-inter text-16 font-500 lesding-160 py-1 pl-4'
										onClick={() => {
											setSort(item);
											setIsOpenSort(false);
										}}
									>
										{item === sort ? (
											<p className='text-descriptiongrey pointer-events-none'>
												{item}
											</p>
										) : (
											<p>{item}</p>
										)}
									</li>
								))}
							</ul>
						)}
					</div>
				</div>
				<div className='grid grid-cols-4 gap-6 py-10'>
					{data?.map((itemm) => (
						<Card key={itemm.id} {...itemm} />
					))}
				</div>
				{!isEnd ? (
					<button
						className='text-16 font-500 leading-170 text-black border-1 rounded-full border-black w-fit px-10 py-2'
						onClick={() => setPage((prev) => prev + 1)}
						disabled={loading}
					>
						Show more
					</button>
				) : (
					""
				)}
			</div>
		</PadingXLayouts>
	);
}
