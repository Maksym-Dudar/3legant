"use client"

import Image from "next/image";
import { IMAGE } from "@/config/image.config";
import { useWindowSize } from "@/hooks";
import { showBannerInFoter } from "@/constants/windowSize";
import { SingupForm } from "./SingupForm";

export function FooterBanner() {
	const { width } = useWindowSize();
	const showBanner = width < showBannerInFoter;

	return (
		<div className='relative justify-center items-center w-full'>
			<SingupForm handelSubmit={() => /* todo */ {}} />
			{!showBanner ? (
				<Image
					src={IMAGE.FOOTER_BANNER.href}
					alt={IMAGE.FOOTER_BANNER.alt}
					width={0}
					height={0}
					sizes='100vw'
					style={{ width: "100%", height: "auto" }}
				/>
			) : (
				<div className='h-50 w-full bg-emailform '></div>
			)}
		</div>
	);
}
