import PadingXLayouts from "@/app/layout/PadingXLayouts";
import { AdvantagesCard } from "@/entities/AdvantagesCard";
import { PATH_TO_ADVANTAGES } from "@/app/constants/path";

export default function Advantages() {
	return (
		<PadingXLayouts>
			<div className='flex justify-between gap-6 w-full pb-12'>
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
