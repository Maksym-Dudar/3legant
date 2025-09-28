import { PropsWithChildren } from "react";

export default function ButtonMenu({
	onClick,
}: PropsWithChildren<{ onClick: () => void }>) {
	return (
		<button
			onClick={onClick}
			className='flex flex-col justify-between w-[14px] sm:w-4 h-[14px] sm:h-4'
		>
			<span className='block h-[2px] sm:h-[2.5px] bg-black rounded-sm'></span>
			<span className='block h-[2px] sm:h-[2.5px] bg-black rounded-sm'></span>
			<span className='block h-[2px] sm:h-[2.5px] bg-black rounded-sm'></span>
		</button>
	);
}