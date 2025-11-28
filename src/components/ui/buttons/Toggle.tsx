import React from "react";

interface Props {
	checked: boolean;
	onChange: React.Dispatch<React.SetStateAction<any>>;
}

export default function IosToggle({ checked, onChange }: Props) {
	return (
		<button
			type='button'
			role='switch'
			aria-checked={checked}
			onClick={() => onChange(!checked)}
			className={`relative inline-flex h-6 w-11 pl-[2px] items-center rounded-full transition-colors
    			${checked ? "bg-green-500 shadow-md" : "bg-gray-300 shadow-inner"}`}
		>
			<span
				className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition
     				${checked ? "translate-x-5 shadow" : "translate-x-0 shadow"}`}
			/>
		</button>
	);
}
