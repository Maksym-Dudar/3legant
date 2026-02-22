// "use client";

// import { useQuery } from "@tanstack/react-query";
// import { Row } from "./Row";
// import { getUserOrders } from "@/services/requests/user";
// import { Loading, Error } from "../..";
// import { useUserStore } from "@/store/user/store";
// import ColumnTitle from "@/components/ui/table/ColumnTitel";

// interface Props {
// 	id: string;
// 	date: Date;
// 	status: string;
// 	price: number;
// }

// export function OrderTabel() {
// 	const { user } = useUserStore();
// 	const {
// 		data = [],
// 		error,
// 		isLoading,
// 	} = useQuery<Props[]>({
// 		queryKey: ["order", user?.id],
// 		queryFn: getUserOrders,
// 	});
// 	if (error) return <Error masage={error.message} />;
// 	if (isLoading) return <Loading />;
// 	return (
// 		<section className='w-full sm:px-4 xl:px-16'>
// 			<h4 className='text-16 sm:text-18 md:text-20 font-600 leading-160 pb-6'>
// 				Address
// 			</h4>
// 			<table className='w-full gap-2 h-fit'>
// 				<thead>
// 					<tr>
// 						<ColumnTitle title='Number ID' />
// 						<ColumnTitle title='Dates' />
// 						<ColumnTitle title='Status' />
// 						<ColumnTitle title='Price' />
// 					</tr>
// 				</thead>
// 				<tbody className=''>
// 					{data.map((item) => (
// 						<Row {...item} key={item.id} />
// 					))}
// 				</tbody>
// 			</table>
// 		</section>
// 	);
// }


export function OrderTabel() {
	return (
		<div>
			OrderTabel
		</div>
	);
}
