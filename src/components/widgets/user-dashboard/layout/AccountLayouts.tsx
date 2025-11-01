import type { PropsWithChildren } from "react";
import { SideMenu } from "./SideMenu";
export function AccountLayouts({ children }: PropsWithChildren<unknown>) {
	return (
		<div className='w-full flex flex-col'>
			<h2 className='font-500 text-40 sm:text-44 md:text-50 ld:text-54 leading-100 text-black text-center w-full py-10 sm:py-16 md:py-14 ld:py-20'>
				My account
			</h2>
			<section className='w-full flex flex-col gap-10 sm:gap-16 md:gap-14 ld:gap-20 sm:flex-row'>
				<SideMenu />
				{children}
			</section>
		</div>
	);
}
