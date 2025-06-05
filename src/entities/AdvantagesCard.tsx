import Image from "next/image";
import type { PropsWithChildren } from "react";

export function AdvantagesCard({
	path,
	titel,
	subtitel,
}: PropsWithChildren<{ path: string; titel: string; subtitel: string }>) {
	return (
		<div className='flex flex-col py-12 px-8 bg-grey gap-4 w-full'>
			<Image
				src={path}
				alt={titel}
				width={48}
				height={48}
				// sizes='100vw'
				// style={{ width: "100%", height: "auto" }}
			/>
			<div className='flex flex-col gap-2'>
				<h5 className='text-20 font-500 leading-140'>{titel}</h5>
				<p className="text-14 font-400 leading-170 text-descriptiongrey">{subtitel}</p>
			</div>
		</div>
	);
}
