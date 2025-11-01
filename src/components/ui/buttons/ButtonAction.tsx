import { type PropsWithChildren } from "react";

export default function ButtonAction({
	type,
	text,
	paddingY,
	paddingX,
	onClick,
	width = "full",
}: PropsWithChildren<{
	type?: "button" | "submit";
	text: string;
	paddingY: number;
	paddingX?: number;
	width?: string;
	onClick?: () => void;
}>) {
	return (
		<button
			type={type}
			onClick={onClick}
			className={`flex w-${width} text-white text-center font-inter bg-black py-${paddingY} px-${paddingX} rounded-lg justify-center text-12 sm:text-14 md:text-16 font-500 leading-180`}
		>
			{text}
		</button>
	);
}