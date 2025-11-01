import Cell from "./Cell";

interface Props {
    id: string;
    date: Date;
    status: string; // todo status
    price: number;
}

export function Row({id, date, status, price}: Props) {
  return (
		<tr key={id} className="h-15 md:h-17 border-b-1 border-whitegray border-solid">
			<Cell data={id} />
			<Cell data={String(date)} />
			<Cell data={status} />
			<Cell data={String(price)} />
		</tr>
	);
}