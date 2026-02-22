import { Controller, type Control, type FieldValues, type Path } from "react-hook-form";
import CustomSelect from "../ui/select/CustomSelect";
import type { DefaultOption } from "@/shared/types/select/reactSelect.type";
import type { SelectOption } from "../ui/select/type";

interface Props<T extends FieldValues> {
	name: Path<T>;
	control: Control<T>;
	label: string;
	options: SelectOption<string>[];
	placeholder: string;
}

export function SelectController<T extends FieldValues>({
	name,
    control,
    options,
    ...select
}: Props<T>) {
	return (
		<Controller
			control={control}
			name={name}
			render={({ field }) => (
                <CustomSelect
                    {...select}
                    options={options}
					styleType='outlined'
					onChange={(option) => field.onChange(option?.value)}
					value={options.find((o) => o.value === field.value) ?? null}
				/>
			)}
		/>
	);
}
