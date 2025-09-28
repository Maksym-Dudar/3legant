"use client"

import { usePathname } from "next/navigation";
import { match } from "path-to-regexp";
import { MenuLink } from "./MenuLink";
import { MENU } from "@/config/page.config";

export function Menu() {
	const pathname = usePathname();

	return (
		<nav className='flex flex-col sm:flex-row justify-center items-center gap-8 lg:gap-10'>
			{MENU.map((item) => (
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
