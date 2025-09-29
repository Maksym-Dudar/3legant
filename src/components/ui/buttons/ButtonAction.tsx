import { type PropsWithChildren } from "react";

export default function ButtonAction({
	type,
	text,
	padding,
	onClick,
}: PropsWithChildren<{
	type?: "button" | "submit";
	text: string;
	padding: number;
	onClick: () => void;
}>) {
	return (
		<button
			type={type}
			onClick={onClick}
			className={`flex w-full text-white text-center font-inter bg-black py-${padding} rounded-lg justify-center text-12 sm:text-14 md:text-16 font-500 leading-180`}
		>
			{text}
		</button>
	);
}