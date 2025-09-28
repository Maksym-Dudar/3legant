import Link from 'next/link';

interface Props {
	link: string;
	label: string;
	isActive: boolean;
}

export function MenuLink({ link, isActive, label }: Props) {
	return (
		<Link
			href={link}
			className={
				isActive
					? "text-white text-12 md:text-14 font-500 leading-170"
					: "hover:scale-105 text-whitegray text-12 md:text-14 font-300 leading-120"
			}
		>
			{label}
		</Link>
	);
}
