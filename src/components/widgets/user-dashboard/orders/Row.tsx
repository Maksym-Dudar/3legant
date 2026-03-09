import Cell from "@/components/ui/table/Cell";

interface Props {
	id: number;
	createdAt: Date;
	status: string; // todo status
	price: number;
}

export function Row({ id, createdAt, status, price }: Props) {
	return (
		<tr
			key={id}
			className='h-15 md:h-17 border-b-1 border-white_grey border-solid'
		>
			<Cell children={id} />
			<Cell children={String(createdAt)} />
			<Cell children={status} />
			<Cell children={"$ " + String(price)} />
		</tr>
	);
}
