import { PropsWithChildren } from "react";

export default function ButtonAction({
	type,
	text,
	pading,
	onClick,
}: PropsWithChildren<{
	type?: "button" | "submit" | "reset";
	text: string;
	pading: number;
	onClick: () => void;
}>) {
	return (
		<button
			type={type}
			onClick={onClick}
			className={`flex w-full text-white text-center font-inter bg-black ${
				"py-" + pading
			}  rounded-lg justify-center text-16 font-500 leading-180`}
		>
			{text}
		</button>
	);
}