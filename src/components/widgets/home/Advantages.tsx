import { AdvantagesCard } from "@/components/cards";
import { ADVANTAGES_DATA } from "@/constants/advantageData";
import PadingXLayouts from "@/layout/PadingXLayouts";


export default function Advantages() {
	return (
		<PadingXLayouts>
			<div className='grid grid-cols-2 lg:grid-cols-4 justify-between gap-4 sm:gap-5 md:gap-6 w-full pb-12'>
				{ADVANTAGES_DATA.map(({ title, href, subtitel, alt }) => (
					<AdvantagesCard
						key={title}
						titel={title}
						href={href}
						alt={alt}
						subtitel={subtitel}
					/>
				))}
			</div>
		</PadingXLayouts>
	);
}
