"use client";

import {
	useBagContext,
	useMobileMenuContext,
	useOverlayContext,
} from "@/provider";

export function Overlay() {
	const { overlay } = useOverlayContext();
	const { closeBag } = useBagContext();
	const { closeMobileMenu } = useMobileMenuContext();

	if (!overlay) return null;

	function handleClick(){
		closeBag();
		closeMobileMenu();
	};

	return (
		<div
			className='flex fixed w-full h-full z-40 bg-opacity-60 bg-black'
			onClick={handleClick}
		></div>
	);
}
