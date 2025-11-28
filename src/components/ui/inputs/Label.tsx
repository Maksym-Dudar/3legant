interface Props {
    id: string;
	label: string;
}

export function Label({id, label}: Props) {
  return (
		<label
			htmlFor={id}
			className='text-inter text-10 md:text-12 font-700 leading-100 text-descriptiongray pb-[4.5px]'
		>
			{label}
		</label>
	);
}