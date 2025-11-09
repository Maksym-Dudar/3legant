"use client"

import { useQuery } from "@tanstack/react-query";
import { Row } from "./Row";
import { getUserOrders } from "@/services/requests/user";
import { Loading, Error } from "../..";
import { useUserStore } from "@/services/store/user/store";
import ColumnTitel from "@/components/ui/table/ColumnTitel";

interface Props {
	id: string;
	date: Date;
	status: string; 
	price: number;
}

export function OrderTabel() {
	const { user } = useUserStore();
	const { data = [], error, isLoading } = useQuery<Props[]>({
		queryKey: ["order", user?.id],
		queryFn: getUserOrders,
	});
		if (error) return <Error masage={error.message} />;
		if (isLoading) return <Loading />;
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
					<Row {...item} key={item.id}/>
				))}
			</tbody>
		</table>
	);
}