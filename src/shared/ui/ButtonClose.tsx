import { PropsWithChildren } from "react";

export function ButtonClose({onClick}: PropsWithChildren<{onClick: () => void}>) {
  return (
      <button
          onClick={onClick}
			type='button'
			aria-label='Close'
			className='relative w-6 h-6 flex items-center justify-center'
		>
			<span className='absolute w-5 h-0.5 bg-darkgray rotate-45'></span>
			<span className='absolute w-5 h-0.5 bg-darkgray -rotate-45'></span>
		</button>
	);
}