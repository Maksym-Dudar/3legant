"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { SideMenuLinks } from "./SideMenuLinks";
export function SideMenu() {
	const pathname = usePathname();
	return (
		<aside className='flex flex-col justify-center py-10 px-4 gap-10 w-56 bg-grey'>
			<div className='flex flex-col gap-[6px] items-center'>
				<Image src={""} alt='arrow' width={14} height={9} className='m-3' />
				<h4 className='font-600 text-20 leading-160'>Sofia Havertz</h4>
			</div>
			<div className='flex flex-col gap-3 items-start'>
				<SideMenuLinks text='Account' link='/account' />
				<hr className='w-full bg-black h-[2px]' />
				<SideMenuLinks text='Address' link='/address' />
				<SideMenuLinks text='Orders' link='/orders' />
				<SideMenuLinks text='Wishlist' link='/wishlist' />
				<button className='py-2 text-descriptiongrey' onClick={() => {}}>
					Log Out
				</button>
			</div>
		</aside>
	);
}
