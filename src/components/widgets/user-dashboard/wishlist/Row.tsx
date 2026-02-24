import Cell from "@/components/ui/table/Cell";
import type { ReactNode } from "react";
import { ProductPreview } from "./ProductPreview";
import { Button } from "@/components/ui";
import type { IWishlist } from "@/shared/types/product/product.type";

interface Props extends IWishlist {
	onRemove: () => void;
	onAction: () => void;
}

export function Row({
	id,
	price,
	title,
	color,
	image,
	onRemove,
	onAction,
}: Props) {
	return (
		<tr
			key={id}
			className='h-15 md:h-17 border-b-1 border-white_gray border-solid'
		>
			<Cell>
				<ProductPreview
					title={title}
					color={color}
					removeProduct={onRemove}
					image={image}
				/>
			</Cell>
			<Cell children={price} />
			<Cell>
				<Button text='Add to cart' onClick={onAction} />
			</Cell>
		</tr>
	);
}
