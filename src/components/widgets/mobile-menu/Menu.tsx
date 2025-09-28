import { match } from "path-to-regexp";
import { usePathname } from "next/navigation";
import { MenuLink } from "./MenuLink";
import { MENU } from "@/config/page.config";

export function Menu() {
	const pathname = usePathname()
  return (
		<div className='flex flex-col gap-4'>
			{MENU.map((item) => (
				<div
					key={item.link}
				>
					<MenuLink item={item} isActive={!!match(item.link)(pathname)} />
				</div>
			))}
		</div>
	);
}