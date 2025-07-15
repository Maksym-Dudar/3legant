import { PropsWithChildren } from "react";

export function ButtonMenu({ onClick }: PropsWithChildren<{ onClick: () => void}>) {
  return (
		<button onClick={onClick} className='flex flex-col justify-between w-4 h-4'>
			<span className='block h-[2.5px] bg-black rounded-sm'></span>
			<span className='block h-[2.5px] bg-black rounded-sm'></span>
			<span className='block h-[2.5px] bg-black rounded-sm'></span>
		</button>
	);
}