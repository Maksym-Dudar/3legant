// import Select from "react-select";
// import type { Sorts } from "@/config/product.config";

// type SortOption = {
// 	label: Sorts;
// 	value: Sorts;
// };

// interface Props {
// 	value: Sorts;
// 	options: SortOption[];
// 	onChange: (val: Sorts) => void;
// }

// export default function DropdownSort({ value, options, onChange }: Props) {
// 	const selected = options.find((o) => o.value === value) ?? null;

// 	return (
// 		<div className='flex items-end gap-4 w-max'>
// 			<p className='text-14 sm:text-16 font-600 leading-160 font-inter text-black'>
// 				Sort by
// 			</p>

// 			<Select
// 				options={options}
// 				value={selected}
// 				onChange={(val) => onChange(val?.value)}
// 				isSearchable={false}
// 				classNames={{
// 					container: () => "w-max",
// 					control: ({ isFocused }) =>
// 						[
// 							"flex items-center gap-2 cursor-pointer bg-transparent border-none shadow-none min-h-0",
// 							isFocused && "text-black",
// 						].join(" "),
// 					valueContainer: () => "p-0",
// 					singleValue: () =>
// 						"text-14 sm:text-16 font-600 font-inter text-black",
// 					indicatorsContainer: () => "p-0",
// 					dropdownIndicator: ({ isFocused }) =>
// 						[
// 							"transition-transform duration-200",
// 							isFocused ? "rotate-90" : "rotate-90",
// 						].join(" "),
// 					indicatorSeparator: () => "hidden",
// 					menu: () => "mt-2 rounded-2xl bg-white shadow-lg py-3",
// 					menuList: () => "p-0",
// 					option: ({ isFocused, isSelected }) =>
// 						[
// 							"font-inter text-16 font-500 leading-160 py-1 pl-4 cursor-pointer",
// 							isSelected && "text-description_grey pointer-events-none",
// 							!isSelected && isFocused && "bg-black text-white",
// 						]
// 							.filter(Boolean)
// 							.join(" "),
// 				}}
// 			/>
// 		</div>
// 	);
// }
