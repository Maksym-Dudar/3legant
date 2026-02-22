"use client";

import Select, { type StylesConfig } from "react-select";
import { twMerge } from "tailwind-merge";
import {
	baseLayoutStyles,
	createSelectBaseStyles,
	createSelectVariantStyles,
	layoutStyles,
} from "./styles";
import type { SelectOption, SelectVariant } from "./type";
import { memo, useId, type JSX } from "react";

interface Props<T> {
	label: string;
	options: SelectOption<T>[];
	value: SelectOption<T> | null;
	placeholder: string;
	styleType: SelectVariant;
	isDisabled?: boolean;
	className?: string;
	onChange: (val: SelectOption<T> | null) => void;
}

function CustomSelect<T>({
	label,
	options,
	placeholder,
	styleType,
	value,
	className,
	isDisabled = false,
	onChange,
}: Props<T>) {
	const id = useId();

	const selectStyles: StylesConfig<SelectOption<T>, false> = {
		...createSelectBaseStyles<T>(),
		...createSelectVariantStyles<T>()[styleType],
	};

	return (
		<div className={twMerge(layoutStyles[styleType].div, baseLayoutStyles.div, className)}>
			<label
				htmlFor={id}
				className={twMerge(layoutStyles[styleType].p, baseLayoutStyles.p)}
			>
				{label}
			</label>
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
						menu: () => "text-14 md:text-16 text-description_gray",
						indicatorSeparator: () => "hidden",
					}}
				/>
			</div>
		</div>
	);
}

export default memo(CustomSelect) as <T>(props: Props<T>) => JSX.Element;
