import { AdvantagesCard } from "@/components/cards";
import { ADVANTAGES_DATA } from "@/constants/advantageData";

export default function Advantages() {
	return (
		<section className='grid grid-cols-2 lg:grid-cols-4 justify-between gap-4 sm:gap-5 md:gap-6 w-full pb-12'>
			{ADVANTAGES_DATA.map(({ title, src, subtitle, alt }) => (
				<AdvantagesCard
					key={title}
					title={title}
					src={src}
					alt={alt}
					subtitle={subtitle}
				/>
			))}
		</section>
	);
}
