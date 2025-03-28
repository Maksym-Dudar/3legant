"use client";

import { useEffect, useRef, type PropsWithChildren } from "react";
import Image from "next/image";
import { ButtonAction } from "../ButtonAction";
import gsap from "gsap";

export function CarouselCard({
	id,
	title,
	price,
	nstar,
	sale,
	isnew,
	img,
}: PropsWithChildren<{
	id: number;
	title: string;
	price: number;
	nstar: number;
	sale: number;
	isnew: boolean;
	img: string;
}>) {
	const buttonRef = useRef<HTMLDivElement>(null);
	const buttonFavoriteRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		gsap.set(buttonFavoriteRef.current, { y: -60 });
		gsap.set(buttonRef.current, { y: 60 });
	}, []);

	const handleMouseEnter = () => {
		gsap.to(buttonFavoriteRef.current, {
			y: 0,
			duration: 0.3,
			ease: "power2.out",
		});
		gsap.to(buttonRef.current, { 
			y: 0, 
			duration: 0.3, 
			ease: "power2.out" 
		});
	};

	const handleMouseLeave = () => {
		gsap.to(buttonFavoriteRef.current, {
			y: -60,
			duration: 0.3,
			ease: "power2.out",
		});
		gsap.to(buttonRef.current, {
			y: 60, 
			duration: 0.3, 
			ease: "power2.out" 
		});
	};

	const priceWithSale = (price - price * sale).toFixed(2);
	return (
		<div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
			<div className='flex relative overflow-hidden'>
				<div className='flex '>
					<Image
						src={img}
						alt={title}
						width={400}
						height={600}
						// sizes='100vw'
						// style={{ width: "100%", height: "100%" }}
					/>
				</div>
				<div className='flex absolute p-5'>
					<div className='flex flex-col gap-2'>
						{isnew ? (
							<div className='font-inter text-xl px-3 py-1 bg-white rounded'>
								NEW
							</div>
						) : (
							<></>
						)}
						{sale ? (
							<div className='font-inter text-xl px-3 py-1 bg-green rounded text-center text-white'>
								-{sale * 100}%
							</div>
						) : (
							<></>
						)}
					</div>
				</div>
				<div
					className='absolute right-5 top-5 rounded-full bg-white p-2'
					ref={buttonFavoriteRef}
				>
					<Image
						src='/images/ui/shape.svg'
						alt={title}
						width={0}
						height={0}
						sizes='100vw'
						style={{ width: "100%", height: "100%" }}
					/>
				</div>
				<div className='absolute bottom-4 px-4 w-full' ref={buttonRef}>
					<ButtonAction
						text={"Add to cart"}
						onClick={function (): void {
							console.log("Goooooddddddd");
						}}
					/>
				</div>
			</div>
			<div className='flex flex-col gap-1'>
				<div className=''>
					{Array(nstar)
						.fill(0)
						.map((_, i) => (
							<span key={i}>★</span>
						))}
				</div>
				<h5 className=''>{title}</h5>
				<div className='flex gap-3'>
					<p className=''>${priceWithSale}</p>
					<s className='text-notactive'>${price.toFixed(2)}</s>
				</div>
			</div>
		</div>
	);
}
