import Cell from "@/components/ui/table/Cell";
import type { ReactNode } from "react";

interface Props {
	id: number;
	product: ReactNode;
	price: number;
	action: ReactNode;
}

export function Row({ id, product, price, action}: Props) {
  return (
		<tr
			key={id}
			className='h-15 md:h-17 border-b-1 border-whitegray border-solid'
		>
			<Cell data={product} />
			<Cell data={price} />
			<Cell data={action} />
		</tr>
	);
}