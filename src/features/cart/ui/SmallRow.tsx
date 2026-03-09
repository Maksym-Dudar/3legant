import { ButtonCross } from "@/components/ui";
import { Counter } from "@/components/ui/buttons/Counter";
import Cell from "@/components/ui/table/Cell";
import { selectProductQuantity } from "@/utils/selectProductQuantity";
import { useCartStore } from "@/store/cart/store";
import Image from "next/image";
import CartItem from "./CartItem";

interface Props {
    id: number;
    price: number;
    image: string;
    title: string;
    color: string;
}

export function SmallRow({id, ...rest}: Props) {
	const { addProduct, decreaseItemCount, removeProduct, cart } = useCartStore();
	const quantity = selectProductQuantity(cart, id);
	return (
		<tr
			key={id}
			className='h-15 md:h-17 border-b-1 border-white_grey border-solid'
		>
			<Cell>
				<CartItem id={id} {...rest} />
			</Cell>
		</tr>
	);
}
