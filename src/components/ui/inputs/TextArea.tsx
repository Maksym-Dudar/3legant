import { Label } from "..";

interface Props {
	id: string;
	name: string;
	placeholder: string;
	value: string;
	label: string;
	disabled?: boolean;
	rows: number;
	onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
export function TextArea({
	id,
	name,
	placeholder,
	value,
	label,
	disabled = false,
	onChange,
}: Props) {
	return (
		<div>
			<Label id={id} label={label} />
			<textarea
				value={value}
				name={name}
				placeholder={placeholder}
				onChange={onChange}
				disabled={disabled}
				rows={10}
				style={{
					resize: "none",
					overflowY: "auto",
				}}
				className='w-full text-inter text-14 md:text-16 font-400 leading-160 border border-solid px-4 rounded-md text-black border-descriptiongray border-opacity-0'
			/>
		</div>
	);
}
