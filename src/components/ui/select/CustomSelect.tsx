"use client";

import Select, { type StylesConfig } from "react-select";
import { twMerge } from "tailwind-merge";
import {
	baseLayoutStyles,
	createSelectBaseStyles,
	createSelectVariantStyles,
	layoutStyles,
} from "./styles";
import type { LabelVariant, SelectOption, SelectVariant } from "./type";
import { memo, useId, type JSX } from "react";
import { Label } from "../inputs/Label";
import { FieldError } from "../inputs/FieldError";

interface Props<T> {
	label: string;
	options: SelectOption<T>[];
	value: SelectOption<T> | null;
	placeholder: string;
	styleType: SelectVariant;
	labelVersion?: LabelVariant;
	isDisabled?: boolean;
	className?: string;
	isCanHaveError?: boolean;
	errorMessage?: string;
	onChange: (val: SelectOption<T> | null) => void;
}

function CustomSelect<T>({
	label,
	options,
	placeholder,
	styleType,
	value,
	className,
	errorMessage,
	isDisabled = false,
	labelVersion = "bold",
	isCanHaveError = false,
	onChange,
}: Props<T>) {
	const id = useId();

	const selectStyles: StylesConfig<SelectOption<T>, false> = {
		...createSelectBaseStyles<T>(),
		...createSelectVariantStyles<T>()[styleType],
	};

	return (
		<div
			className={twMerge(
				layoutStyles[styleType].div,
				baseLayoutStyles.div,
				className,
			)}
		>
			{labelVersion == "bold" ? (
				<Label id={id} label={label} />
			) : (
				<label
					htmlFor={id}
					className={twMerge(layoutStyles[styleType].p, baseLayoutStyles.p)}
				>
					{label}
				</label>
			)}

			<div className='w-full'>
				<Select<SelectOption<T>, false>
					inputId={id}
					instanceId={id}
					options={options}
					value={value}
					onChange={(val) => onChange(val)}
					placeholder={placeholder}
					styles={selectStyles}
					isDisabled={isDisabled}
					classNames={{
						singleValue: () =>
							"text-14 sm:text-16 text-black font-400 leading-160",
						control: () => "min-h-[48px]",
						menu: () => "text-14 md:text-16 text-description_grey",
						indicatorSeparator: () => "hidden",
					}}
				/>
			</div>
			{!!isCanHaveError && (<FieldError errorMessage={errorMessage} />)}
		</div>
	);
}

export default memo(CustomSelect) as <T>(props: Props<T>) => JSX.Element;
