"use client"

import { showMobileAdaptive } from "@/utils/mobileAdaptive";
import { MenuLink } from "./MenuLink";
import { usePathname } from "next/navigation";
import { match } from "path-to-regexp";
import { MENU } from "@/config/page.config";

export function Menu() {
	const showAdaptive = showMobileAdaptive();
	const pathname = usePathname();

	return (
		<nav className='flex gap-x-10 items-center '>
			{!showAdaptive &&
				MENU.map((item) => (
					<div key={item.link}>
						<MenuLink
							label={item.label}
							link={item.link}
							isActive={!!match(item.link)(pathname)}
						/>
					</div>
				))}
		</nav>
	);
}
