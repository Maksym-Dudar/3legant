"use client";

import {
	LINK_ACOUNT,
	LINk_HOME,
	LINK_NAV_ITEMS,
} from "@/shared/constants/links";
import Link from "next/link";
import Image from "next/image";
import PadingXLayouts from "@/shared/layout/PadingXLayouts";
import { usePathname } from "next/navigation";
import { useCountProductInBagStore } from "@/features/store/bag/store";
import { useBagContext } from "@/shared/context/BagContext";
import { useWindowSize } from "@/shared/hooks/useWindowSize";
import { mobileSize } from "@/shared/constants/windowSize";
import { ButtonMenu } from "@/shared/ui/ButtonMenu";
import { useMobileMenuContext } from "@/shared/context/MobileMenuContext";

export default function Header() {
	const pathname = usePathname();
	const { openBag } = useBagContext();
	const { openMobileMenu } = useMobileMenuContext();
	const { width } = useWindowSize();
	const size = useCountProductInBagStore();

	const showMobileMenuIcon = width < mobileSize;
	return (
		<PadingXLayouts>
			<div className='w-full flex justify-between py-3 md:py-4'>
				<div className='flex items-center gap-2 md:gap-3'>
					{showMobileMenuIcon && <ButtonMenu onClick={openMobileMenu} />}
					<Link key={LINk_HOME.href} href={LINk_HOME.href} className=''>
						<h1 className='text-18 sm:text-20 md:text-22 lg:text-24 font-500'>
							3legant
						</h1>
					</Link>
				</div>
				<nav className='flex gap-x-10 items-center '>
					{!showMobileMenuIcon &&
						LINK_NAV_ITEMS.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className={
									pathname !== item.href
										? "hover:scale-105 text-notactive text-12 md:text-14 font-500 leading-170"
										: ""
								}
							>
								{item.label}
							</Link>
						))}
				</nav>
				<div className='flex gap-4 items-center'>
					{!showMobileMenuIcon && (
						<button>
							<Image
								src='/images/ui/search.svg'
								alt='search'
								width={0}
								height={0}
								className='w-4 md:w-5 h-4 md:h-5'
							/>
						</button>
					)}
					{!showMobileMenuIcon && (
						<Link key={LINK_ACOUNT.href} href={LINK_ACOUNT.href} className=''>
							<Image
								src='/images/ui/user.svg'
								width={0}
								height={0}
								className='w-[18px] md:w-[22px] h-[18px] md:h-[22px]'
								alt='acount'
							/>
						</Link>
					)}
					<button className='flex gap-1 items-center' onClick={openBag}>
						<Image
							src='/images/ui/shopping_bag.svg'
							width={0}
							height={0}
							className='w-5 md:w-6 h-5 md:h-6'
							alt='acount'
						/>
						<div className='w-4 md:w-5 h-4 md:h-5 bg-black text-white flex items-center justify-center rounded-full text-10 md:text-12 font-700 leading-80'>
							{size}
						</div>
					</button>
				</div>
			</div>
		</PadingXLayouts>
	);
}
