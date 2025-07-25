import PadingXLayouts from "@/shared/layout/PadingXLayouts";

export function Erro() {
	return (
		<PadingXLayouts>
			<button
				className='text-20 md:text-28 lg:text-32 text-red-500 font-500 leading-160 items-center justify-center py-16 sm:py-20 lg:py-28 w-full'
				disabled
			>
				Error
			</button>
		</PadingXLayouts>
	);
}
