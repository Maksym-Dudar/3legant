import type { HTMLInputTypeAttribute } from "react";
import { Label } from "./Label";

interface Props {
	type: HTMLInputTypeAttribute;
	id: string;
	name: string;
	placeholder: string;
	value: string | number | Date | null;
	label: string;
	isRequired?: boolean;
	minLength?: number;
	hasError?: boolean;
	disabled?: boolean;
	min?: number;
	max?: number;
	step?: number;
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
	hasError = true,
	minLength,
	min,
	max,
	step,
	disabled = false,
	onChange,
}: Props) {
	const normalizedValue =
		value instanceof Date
			? value.toISOString().split("T")[0]
			: value !== null && value !== undefined
			? String(value)
			: "";

	return (
		<div className='w-full flex flex-col'>
			<Label id={id} label={label} />
			<input
				type={type}
				id={id}
				name={name}
				placeholder={placeholder}
				value={normalizedValue}
				onChange={onChange}
				required={isRequired}
				minLength={minLength}
				disabled={disabled}
				min={min}
				max={max}
				step={step}
				className={`w-full text-inter text-14 md:text-16 font-400 leading-160 border border-solid h-10 px-4 rounded-md 
					${
						hasError
							? " text-black border-descriptiongray border-opacity-0"
							: " text-descriptiongray border-red bg-palered"
					} `}
			/>
		</div>
	);
}
