import { PropsWithChildren } from "react";

export default function ButtonClose({
	onClick,
	size,
}: PropsWithChildren<{ onClick: () => void; size: number }>) {
	return (
		<button
			onClick={onClick}
			type='button'
			aria-label='Close'
			className='relative w-6 h-6 flex items-center justify-center'
		>
			<span className={`absolute w-${size} h-0.5 bg-darkgray rotate-45`}></span>
			<span
				className={`absolute w-${size} h-0.5 bg-darkgray -rotate-45`}
			></span>
		</button>
	);
}