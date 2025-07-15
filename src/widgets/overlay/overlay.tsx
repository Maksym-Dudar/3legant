"use client";

import { useBagContext } from "@/shared/context/BagContext";
import { useMobileMenuContext } from "@/shared/context/MobileMenuContext";
import { useOverlayContext } from "@/shared/context/OverlayContext";

export function Overlay() {
	const { overlay } = useOverlayContext();
	const { closeBag } = useBagContext();
	const { closeMobileMenu } = useMobileMenuContext();

	if (!overlay) return null;

	return (
		<div className='flex'>
			<div
				className='flex fixed w-full h-full z-40 bg-opacity-60 bg-black'
				onClick={() => {
					closeBag();
					closeMobileMenu();
				}}
			></div>
		</div>
	);
}
