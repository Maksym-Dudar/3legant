'use client'

import { LINK_ACOUNT, LINk_HOME, LINK_NAV_ITEMS } from "@/shared/constants/links";
import Link from "next/link";
import Image from "next/image";
import PadingXLayouts from "@/shared/layout/PadingXLayouts";
import { usePathname } from "next/navigation";
import { useBag } from "@/shared/store/bag/store";

export default function Header() {
	const pathname = usePathname();

	return (
		<PadingXLayouts>
			<div className='w-full flex justify-between py-4'>
				<Link key={LINk_HOME.href} href={LINk_HOME.href} className=''>
						<h1 className='text-24 font-500'>3legant</h1>
				</Link>
				<nav className='flex gap-x-10 items-center '>
					{LINK_NAV_ITEMS.map((item) => (
						<Link key={item.href} href={item.href} className={pathname !== item.href ? 'hover:scale-105 text-notactive text-14 font-500 leading-170': ''}>
							{item.label}
						</Link>
					))}
				</nav>
				<div className='flex gap-4 items-center'>
					<button>
						<Image
							src='/images/header_menu/search.svg'
							width={20}
							height={20}
							alt='search'
						/>
					</button>
					<Link key={LINK_ACOUNT.href} href={LINK_ACOUNT.href} className=''>
						<Image
							src='/images/header_menu/user.svg'
							width={22}
							height={22}
							alt='acount'
						/>
					</Link>
					<button className='flex gap-1 items-center'>
						<Image
							src='/images/header_menu/shopping_bag.svg'
							width={24}
							height={24}
							alt='acount'
						/>
						<div className='w-5 h-5 bg-black text-white flex items-center justify-center rounded-full text-12 font-700 leading-80'>
							{useBag.length}
						</div>
					</button>
				</div>
			</div>
		</PadingXLayouts>
	);
}
