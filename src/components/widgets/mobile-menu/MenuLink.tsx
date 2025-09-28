import { useOverlayContext } from "@/provider";
import Link from "next/link";

interface Props {
	item: { link: string; label: string };
	isActive: boolean
}

export function MenuLink({ item, isActive }: Props) {
	const { offOverlay } = useOverlayContext();

	return (
		<div className='w-full border-b-2/3 border-whitegray pb-2'>
			<Link
				href={item.link}
				className={
					isActive
						? "hover:scale-105 text-notactive text-14 font-500 leading-170"
						: ""
				}
				onClick={offOverlay}
			>
				{item.label}
			</Link>
		</div>
	);
}
