"use client";

import { ButtonMenu } from "@/components/ui";

import Link from "next/link";
import PaddingXLayouts from "@/components/layout/PaddingXLayouts";
import { PAGE } from "@/config/page.config";
import { Navigation } from "../navigation/Navigation";
import { showMobileAdaptive } from "@/utils/mobileAdaptive";
import { useOverlay } from "@/provider/overlay/OverlayProvider";

export function Header() {
	const showAdaptive = showMobileAdaptive();
	const { open } = useOverlay();

	return (
		<PaddingXLayouts>
			<div className='w-full flex justify-between py-3 md:py-4'>
				<div className='flex items-center gap-2 md:gap-3'>
					{showAdaptive && <ButtonMenu onClick={() => open("mobile")} />}
					<Link key={PAGE.HOME.link} href={PAGE.HOME.link} className=''>
						<h1 className='text-18 sm:text-20 md:text-22 lg:text-24 font-500'>
							3legant
						</h1>
					</Link>
				</div>
				{!showAdaptive && <Navigation variant='night' />}
				{/* <HeaderControls
					showAdaptive={showAdaptive}
					size={bag.length}
					bagOnClick={openBag}
					{...search}
				/> */}
			</div>
		</PaddingXLayouts>
	);
}
