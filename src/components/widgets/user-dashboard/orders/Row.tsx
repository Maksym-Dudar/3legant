import Cell from "@/components/ui/table/Cell";

interface Props {
	id: number;
	createdAt: Date;
	status: string;
	total: number;
}

const statusLabels: Record<string, string> = {
	PENDING: "Pending",
	CONFIRMED: "Confirmed",
	PROCESSING: "Processing",
	SHIPPED: "Shipped",
	DELIVERED: "Delivered",
	COMPLETED: "Completed",
	CANCELLED: "Cancelled",
	RETURNED: "Returned",
	FAILED: "Failed",
};

export function Row({ id, createdAt, status, total }: Props) {
	return (
		<tr
			key={id}
			className='h-15 md:h-17 border-b-1 border-white_grey border-solid'
		>
			<Cell>{id}</Cell>
			<Cell>{String(createdAt)}</Cell>
			<Cell> {status}</Cell>
			<Cell> {"$ " + String(total)}</Cell>
		</tr>
	);
}
