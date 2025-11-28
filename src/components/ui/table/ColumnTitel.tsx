interface Props {
    title: string;
}

export default function ColumnTitel({title}: Props) {
  return (
		<th className='font-inter text-start text-12 sm:text-10 md:text-12 lg:text-14 text-descriptiongray font-400 leading-160'>
			{title}
		</th>
	);
}