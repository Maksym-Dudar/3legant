import Link from "next/link";
import { usePathname } from "next/navigation";
import type { PropsWithChildren } from "react";

export function SideMenuLinks({
	text,
	link,
}: PropsWithChildren<{ text: string; link: string;}>) {
	const pathname = usePathname();
  return (
		<Link
			className={
				pathname == link
					? "pt-5 font-inter font-500 text-14 md:text-16 leading-160 text-black"
					: "pt-5 font-inter font-500 text-14 md:text-16 leading-160 text-descriptiongrey hover:text-black hover:opacity-80"
			}
			href={link}
		>
			{text}
		</Link>
	);
}
