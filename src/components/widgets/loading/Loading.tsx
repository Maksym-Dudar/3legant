import PadingXLayouts from "@/layout/PadingXLayouts";

export function Loading() {
	return (
		<PadingXLayouts>
			<div
				className='animate-pulse text-center text-18 md:text-20 lg:text-24 font-500 leading-160 py-28 w-full'
			>
				Processing…
			</div>
		</PadingXLayouts>
	);
}
