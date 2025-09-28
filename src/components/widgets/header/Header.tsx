"use client";

import { ButtonMenu } from "@/components/ui";

import { useBagContext, useMobileMenuContext } from "@/provider";
import { useCountProductInBagStore } from "@/store/bag/store";
import Link from "next/link";
import PadingXLayouts from "@/layout/PadingXLayouts";
import { PAGE } from "@/config/page.config";
import { Menu } from "./Menu";
import { showMobileAdaptive } from "@/utils/mobileAdaptive";
import { HeaderControls } from "./HeaderControls";


export function Header() {
	const { openBag } = useBagContext();
	const { openMobileMenu } = useMobileMenuContext();
	const size = useCountProductInBagStore();
	const showAdaptive = showMobileAdaptive();

	return (
		<PadingXLayouts>
			<div className='w-full flex justify-between py-3 md:py-4'>
				<div className='flex items-center gap-2 md:gap-3'>
					{showAdaptive && <ButtonMenu onClick={openMobileMenu} />}
					<Link key={PAGE.HOME.link} href={PAGE.HOME.link} className=''>
						<h1 className='text-18 sm:text-20 md:text-22 lg:text-24 font-500'>
							3legant
						</h1>
					</Link>
				</div>
				<Menu />
				<HeaderControls showAdaptive={showAdaptive} size={size} searchOnClick={() =>/* todo */ {}} bagOnClick={openBag} />
			</div>
		</PadingXLayouts>
	);
}
