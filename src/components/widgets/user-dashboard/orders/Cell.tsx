interface Props {
	data: string;
}

export default function Cell({ data }: Props) {
	return (
		<th className='font-inter text-start text-12 md:text-14 text-black font-400 leading-160'>
			{data}
		</th>
	);
}
