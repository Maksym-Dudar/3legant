import type { IDeliveryOptions } from "@/shared/types/orders/orders";
import { Row } from "./Row";

interface Props {
	id: number;
	createdAt: Date;
	total: number;
	shippingMethod: IDeliveryOptions;
}

export function CompleteDetailTable({
	id,
	createdAt,
	total,
	shippingMethod,
}: Props) {
	const monthName = new Intl.DateTimeFormat("us-US", {
		month: "long",
	}).format(createdAt);
	const date =
		monthName + " " + createdAt.getDate() + ", " + createdAt.getFullYear();
	return (
		<table>
			<tbody>
				<Row title='Order code:' value={String(id)} />
				<Row title='Created at:' value={date} />
				<Row title='Total:' value={"$" + total} />
				<Row title='Shipping method:' value={shippingMethod.label} />
			</tbody>
		</table>
	);
}
