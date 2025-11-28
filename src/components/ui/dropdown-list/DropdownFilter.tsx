import { IMAGE } from "@/config/image.config";
import type { CategoryFilter, Prices } from "@/config/product.config";
import Image from "next/image";

interface Props {
	label: "CATEGORIES" | "PRICE";
	value: CategoryFilter | Prices;
	options: string[];
	onChange: (val: CategoryFilter | Prices) => void;
	isOpen: boolean;
	onToggle: () => void;
	close: () => void;
}

export default function DropdownFilter({
	label,
	value,
	options,
	onChange,
	isOpen,
	onToggle,
	close,
}: Props) {
	return (
		<section
			className='relative flex flex-col w-full md:w-52 lg:w-60 justify-center gap-2'
			onMouseLeave={() => close()}
		>
			<p className='text-14 sm:text-16 font-400 leading-160 font-inter text-descriptiongray'>
				{label}
			</p>
			<button
				className='flex justify-between w-full border-2 rounded-md border-descriptiongray px-4 py-2'
				onClick={() => onToggle()}
			>
				<h6 className='text-14 sm:text-16'>{value}</h6>
				<Image
					src={IMAGE.ARRROW.href}
					alt={IMAGE.ARRROW.alt}
					width={5}
					height={8}
					className='rotate-90'
				/>
			</button>
			{isOpen && (
				<ul className='absolute flex flex-col w-full bg-white border-2 rounded-b-md border-x-descriptiongray border-b-descriptiongray z-50 top-18'>
					{options.map((item) => (
						<li
							key={item}
							className='font-inter text-16 font-500 lesding-160 py-1 pl-4 cursor-pointer'
							onClick={() => {
								onChange(item as CategoryFilter | Prices);
								close();
							}}
						>
							{item === value ? (
								<p className='text-descriptiongray pointer-events-none'>
									{item}
								</p>
							) : (
								<p>{item}</p>
							)}
						</li>
					))}
				</ul>
			)}
		</section>
	);
}
