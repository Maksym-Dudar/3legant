"use client";

import { PAGE } from "@/config/page.config";
import { MenuLink } from "./MenuLink";
import { usePathname } from "next/navigation";

export function AdminMenu() {
	const path = usePathname();

	console.log(path)

	return (
		<menu className='flex gap-6 justify-center items-center pt-2'>
			<MenuLink
				label={PAGE.ADMIN_DASHBOARD.label}
				link={PAGE.ADMIN_DASHBOARD.link}
				isActive={path == PAGE.ADMIN_DASHBOARD.link}
			/>
			<MenuLink
				label={PAGE.CREATE_PRODUCT.label}
				link={PAGE.CREATE_PRODUCT.link}
				isActive={path == PAGE.CREATE_PRODUCT.link}
			/>
			<MenuLink
				label={PAGE.ADMIN_ORDERS.label}
				link={PAGE.ADMIN_ORDERS.link}
				isActive={path == PAGE.ADMIN_ORDERS.link}
			/>
		</menu>
	);
}
