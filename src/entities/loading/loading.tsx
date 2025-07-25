import PadingXLayouts from "@/shared/layout/PadingXLayouts";

export default function Loading() {
	return (
		<PadingXLayouts>
			<button
				className='animate-pulse text-18 md:text-20 lg:text-24 font-500 leading-160 items-center justify-center py-28 w-full'
				disabled
			>
				Processing…
			</button>
		</PadingXLayouts>
	);
}
