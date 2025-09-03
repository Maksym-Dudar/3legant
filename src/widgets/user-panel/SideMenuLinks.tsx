import Link from "next/link";
import { usePathname } from "next/navigation";
import type { PropsWithChildren } from "react";
import clsx from "clsx";

export function SideMenuLinks({
	text,
	link,
}: PropsWithChildren<{ text: string; link: string;}>) {
	const pathname = usePathname();
  return (
		<Link
			className={clsx(
				"py-2 font-inter font-500 text-16 leading-160",
				pathname == link
					? "text-black"
					: "text-descriptiongrey hover:text-black hover:opacity-80"
			)}
			href={link}
		>
			{text}
		</Link>
	);
}
