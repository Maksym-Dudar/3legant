import ColumnTitel from "./ColumnTitel";
import { Row } from "./Row";

interface Props {
	id: string;
	date: Date;
	status: string; // todo status
	price: number;
}
// todo

export function OrderTabel() {
const data: Props[] = [{id: "1", date: new Date, status: "done", price: 70}]
  return (
		<table className='w-full gap-2 h-fit'>
			<thead>
				<tr>
					<ColumnTitel title='Number ID' />
					<ColumnTitel title='Dates' />
					<ColumnTitel title='Status' />
					<ColumnTitel title='Price' />
				</tr>
			</thead>
			<tbody className="">
				{data.map((item) => (
					<Row {...item} />
				))}
			</tbody>
		</table>
	);
}