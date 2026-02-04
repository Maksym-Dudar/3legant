"use client"

import { memo, useId, type InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { FieldError } from "./FieldError";
import { Label } from "./Label";

type TVariantInput = "outlined" | "borderless";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	variant?: TVariantInput;
	errorMessage?: string;
	label?: string; 
}

function Input({
	variant = "outlined",
	className,
	errorMessage,
	label,
	...props
}: Props) {
	const generatedId = useId();

	const baseStyle =
		"w-full text-inter text-14 md:text-16 font-400 leading-160 px-2 bg-white autofill:bg-white";
	const variants = {
		outlined: "h-10 px-4 border border-solid rounded-md",
		borderless: "border-b-1 border-solid border-white_gray py-1 ",
	};

	return (
		<div className='flex flex-col w-full'>
			{label && <Label id={generatedId} label={label} />}
			<input
				id={generatedId}
				className={twMerge(baseStyle, variants[variant], className)}
				{...props}
			/>
			<FieldError errorMessage={errorMessage} />
		</div>
	);
}

export default memo(Input);

// interface Props {
// 	type: HTMLInputTypeAttribute;
// 	id: string;
// 	name: string;
// 	placeholder: string;
// 	value: string | number | Date | null;
// 	label: string;
// 	isRequired?: boolean;
// 	minLength?: number;
// 	hasError?: boolean;
// 	disabled?: boolean;
// 	min?: number;
// 	max?: number;
// 	step?: number;
// 	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
// }

// const normalizedValue =
// 	value instanceof Date
// 		? value.toISOString().split("T")[0]
// 		: value !== null && value !== undefined
// 		? String(value)
// 		: "";

// type={type}
// id={id}
// name={name}
// placeholder={placeholder}
// value={normalizedValue}
// onChange={onChange}
// required={isRequired}
// minLength={minLength}
// disabled={disabled}
// min={min}
// max={max}
// step={step}
// className={`w-full text-inter text-14 md:text-16 font-400 leading-160 border border-solid h-10 px-4 rounded-md
// 		${
// 			hasError
// 				? " text-black border-descriptiongray border-opacity-0"
// 				: " text-descriptiongray border-red bg-palered"
// 		} `}
