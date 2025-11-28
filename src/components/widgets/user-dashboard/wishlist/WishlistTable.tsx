"use client";

import ColumnTitel from "@/components/ui/table/ColumnTitel";
import { Row } from "./Row";
import { useQuery } from "@tanstack/react-query";
import { useWishlistStore } from "@/services/store/wishlist/store";
import { getUserWishlist } from "@/services/requests/user";
import { ButtonAction, ButtonClose } from "@/components/ui";
import { Loading, Error } from "../..";
import { ProductPreview } from "./ProductPreview";
import { useBagStore } from "@/services/store/bag/store";

interface Props {
	id: number;
	image: string[];
	title: string;
	color: string;
	price: number;
}

export function WishlistTable() {
	const { wishlist, removeProduct } = useWishlistStore();
	const { addProduct } = useBagStore();
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
					<ColumnTitel title='Product' />
					<ColumnTitel title='Price' />
					<ColumnTitel title='Action' />
				</tr>
			</thead>
			<tbody className=''>
				{data.map((item) => (
					<Row
						key={item.id}
						id={item.id}
						price={item.price}
						action={
							<ButtonAction
								text='Add to cart'
								paddingX={1}
								paddingY={2}
								onClick={() =>
									addProduct({ productId: item.id, quantity: 1 })
								}
							/>
						}
						product={
							<ProductPreview {...item} removeProduct={() =>removeProduct(item.id)} image={item.image[0]} />
						}
					/>
				))}
			</tbody>
		</table>
	);
}
