import type { HTMLInputTypeAttribute } from "react";

interface Props {
	type: HTMLInputTypeAttribute;
	id: string;
	name: string;
	placeholder: string;
	value: string | number | null;
	label: string;
	isRequired?: boolean;
	minLength?: number;
	isCorect?: boolean;
	disabled?: boolean;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputFullWidth({
	id,
	type,
	name,
	placeholder,
	value,
	label,
	isRequired = false,
	isCorect = true,
	minLength,
	disabled = false,
	onChange,
}: Props) {
	return (
		<div className='w-full'>
			<label
				htmlFor={id}
				className='text-inter text-10 md:text-12 font-700 leading-100 text-descriptiongrey'
			>
				{label}
			</label>
			<input
				type={type}
				id={id}
				name={name}
				placeholder={placeholder}
				value={value ?? ""}
				onChange={onChange}
				required={isRequired}
				minLength={minLength}
				disabled={disabled}
				className={
					isCorect
						? "w-full text-inter text-14 md:text-16 font-400 leading-160 border border-solid h-10 px-4 rounded-md text-black border-descriptiongrey border-opacity-0"
						: "w-full text-inter text-14 md:text-16 font-400 leading-160 border border-solid h-10 px-4 rounded-md text-descriptiongrey border-red bg-palered"
				}
			/>
		</div>
	);
}
