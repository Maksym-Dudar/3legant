"use client";

import { PAGE } from "@/config/page.config";
import Link from "next/link";
import Image from "next/image";
import { IMAGE } from "@/config/image.config";
import {
	useRef,
	type ChangeEvent,
	type Dispatch,
	type SetStateAction,
} from "react";
import type { SearchOptions } from "@/features/search/hook/useSearch";
import gsap from "gsap";

interface Props {
	showAdaptive: boolean;
	size: number;
	bagOnClick: () => void;
	filteredOptions: SearchOptions[];
	searchItem: string;
	isOpen: boolean;
	toggleOpen: Dispatch<SetStateAction<boolean>>;
	goToIdsProductShop: (gropId: number) => void;
	handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
	searchButton: () => void;
	cleanUpInput: () => void;
}

export function HeaderControls({
	showAdaptive,
	size,
	bagOnClick,
	isOpen,
	toggleOpen,
	filteredOptions,
	searchItem,
	handleInputChange,
	goToIdsProductShop,
	searchButton,
}: Props) {
	const { user } = useUserStore();
	const inputRef = useRef<HTMLInputElement>(null);
	const userAvatar = user?.avatar
		? process.env.NEXT_PUBLIC_BACKEND_URL + user.avatar
		: null;

	const toggleInput = () => {
		if (!inputRef.current) return;

		if (!isOpen) {
			gsap.fromTo(
				inputRef.current,
				{
					opacity: 0,
					x: 20,
					scale: 0.95,
				},
				{
					opacity: 1,
					x: 0,
					scale: 1,
					duration: 0.3,
					ease: "power2.out",
				},
			);
		} else {
			// cleanUpInput();
			searchButton();
			gsap.to(inputRef.current, {
				opacity: 0,
				x: 20,
				scale: 0.95,
				duration: 0.2,
				ease: "power2.in",
			});
		}

		toggleOpen((prev) => !prev);
	};

	return (
		<div className='flex gap-4 items-center relative'>
			{!showAdaptive && (
				<section className='flex flex-row gap-3 items-center'>
					<input
						ref={inputRef}
						id='search'
						type='text'
						placeholder='Search'
						className='absolute z-10 left-[-150px] text-14 font-400 leading-160 font-inter text-black w-45 h-[30px] pointer-events-none opacity-0 border-[1.65px] border-black rounded-full px-2'
						style={{ pointerEvents: isOpen ? "auto" : "none" }}
						onChange={handleInputChange}
						value={searchItem}
					/>
					<button onClick={toggleInput} className='z-30'>
						<Image
							src={IMAGE.SEARCH.src}
							alt={IMAGE.SEARCH.alt}
							width={23}
							height={23}
						/>
					</button>
					{searchItem.length > 0 && (
						<ul className='absolute z-40 left-[-70px] top-10 flex flex-col w-full bg-gray rounded-2xl border-1 border-gray py-3'>
							{filteredOptions.map((item) => (
								<li
									key={item.label}
									className='font-inter text-16 font-500 lesding-160 py-1 pl-4 cursor-pointer'
									onClick={() => {
										goToIdsProductShop(item.gropId);
									}}
								>
									{item.label}
								</li>
							))}
						</ul>
					)}
				</section>
			)}
			{!showAdaptive && (
				<Link key={PAGE.ACCOUNT.link} src={PAGE.ACCOUNT.link}>
					<div className='w-6 h-6 rounded-full overflow-hidden'>
						<Image
							src={userAvatar ?? IMAGE.USER_ICON.src}
							alt={IMAGE.USER_ICON.alt}
							width={24}
							height={24}
							className='object-cover'
						/>
					</div>
				</Link>
			)}
			<button className='flex gap-1 items-center' onClick={bagOnClick}>
				<Image
					src={IMAGE.SHOPPING_BAG.src}
					alt={IMAGE.SHOPPING_BAG.alt}
					width={25}
					height={25}
				/>{" "}
				<div className='w-4 md:w-5 h-4 md:h-5 bg-black text-white flex items-center justify-center rounded-full text-10 md:text-12 font-700 leading-80'>
					{size}
				</div>
			</button>
		</div>
	);
}
