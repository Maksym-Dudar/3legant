"use client";

import { ButtonMenu } from "@/components/ui";

import Link from "next/link";
import PaddingXLayouts from "@/components/layout/PaddingXLayouts";
import { PAGE } from "@/config/page.config";
import { Navigation } from "../navigation/Navigation";
import { showMobileAdaptive } from "@/utils/mobileAdaptive";
import { useOverlay } from "@/provider/overlay/OverlayProvider";
import { useCart } from "@/features/cart/hook/useCart";
import { HeaderControls } from "./HeaderControls";

export function Header() {
	const showAdaptive = showMobileAdaptive();
	const { open } = useOverlay();
	const { data } = useCart()

	return (
		<PaddingXLayouts>
			<div className='w-full flex flex-row justify-between py-3 md:py-4 relative'>
				<div className='flex items-center gap-2 md:gap-3'>
					{showAdaptive && <ButtonMenu onClick={() => open("mobile")} />}
					<Link key={PAGE.HOME.link} href={PAGE.HOME.link} className=''>
						<h1 className='text-18 sm:text-20 md:text-22 lg:text-24 font-500'>
							3legant
						</h1>
					</Link>
				</div>
				{!showAdaptive && <Navigation variant='night' />}
				<HeaderControls cartSize={data?.length ?? 0} openCart={() => open("cart")} showAdaptive={showAdaptive} />
			</div>
		</PaddingXLayouts>
	);
}
