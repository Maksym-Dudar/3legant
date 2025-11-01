interface Props {
    title: string;
}

export default function ColumnTitel({title}: Props) {
  return (
		<th className='font-inter text-start text-12 md:text-14 text-descriptiongrey font-400 leading-160'>
			{title}
		</th>
	);
}