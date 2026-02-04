"use client";

import { Row } from "./Row";
import { useQuery } from "@tanstack/react-query";
import { useWishlistStore } from "@/store/wishlist/store";
import { Button } from "@/components/ui";
import { Loading, Error } from "../..";
import { ProductPreview } from "./ProductPreview";
import ColumnTitle from "@/components/ui/table/ColumnTitel";

interface Props {
	id: number;
	image: string[];
	title: string;
	color: string;
	price: number;
}

export function WishlistTable() {
	const { wishlist, removeProduct } = useWishlistStore();
	const wishlistString = wishlist.join(",");
	const {
		data = [],
		error,
		isLoading,
	} = useQuery<Props[]>({
		queryKey: ["wishlist", wishlistString],
		queryFn: getUserWishlist,
	});

	if (error) return <Error masage={error.message} />;
	if (isLoading) return <Loading />;

	return (
		<table className='w-full gap-2 h-fit'>
			<thead>
				<tr>
					<ColumnTitle title='Product' />
					<ColumnTitle title='Price' />
					<ColumnTitle title='Action' />
				</tr>
			</thead>
			<tbody className=''>
				{data.map((item) => (
					<Row
						key={item.id}
						id={item.id}
						price={item.price}
						action={
							<Button
								text='Add to cart'
								paddingX={1}
								paddingY={2}
								onClick={() => addProduct({ id: item.id, quantity: 1 })}
							/>
						}
						product={
							<ProductPreview
								{...item}
								removeProduct={() => removeProduct(item.id)}
								image={item.image[0]}
							/>
						}
					/>
				))}
			</tbody>
		</table>
	);
}
