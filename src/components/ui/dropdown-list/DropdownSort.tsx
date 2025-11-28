import { IMAGE } from "@/config/image.config";
import type { Sorts } from "@/config/product.config";
import Image from "next/image";

interface Props {
    value: Sorts;
    options: string[];
    onChange: (val: string) => void;
    isOpen: boolean;
    onToggle: () => void;
    close: () => void;
}

export default function DropdownSort({
	value,
	options,
	onChange,
	isOpen,
	onToggle,
	close,
}: Props) {
	return (
		<section
			className='relative flex flex-row w-max justify-center gap-4 items-end'
			onMouseLeave={() => close()}
		>
			<p className='text-14 sm:text-16 font-600 leading-160 font-inter text-black  w-max items-center'>
				Sort by
			</p>
			<button
				className='flex justify-between  w-max  gap-2 items-center'
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
				<ul className='absolute flex flex-col w-full bg-white z-50 top-18 rounded-2xl py-3'>
					{options.map((item) => (
						<li
							key={item}
							className='font-inter text-16 font-500 lesding-160 py-1 pl-4 cursor-pointer'
							onClick={() => {
								onChange(item);
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