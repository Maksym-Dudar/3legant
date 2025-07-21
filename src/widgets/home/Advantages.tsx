import PadingXLayouts from "@/shared/layout/PadingXLayouts";
import { AdvantagesCard } from "@/entities/advantages/AdvantagesCard";
import { PATH_TO_ADVANTAGES } from "@/shared/constants/path";

export default function Advantages() {
	return (
		<PadingXLayouts>
			<div className='grid grid-cols-2 lg:grid-cols-4 justify-between gap-4 sm:gap-5 md:gap-6 w-full pb-12'>
				{PATH_TO_ADVANTAGES.map(({ title, href, subtitel }) => (
					<AdvantagesCard
						key={title}
						titel={title}
						path={href}
						subtitel={subtitel}
					/>
				))}
			</div>
		</PadingXLayouts>
	);
}
