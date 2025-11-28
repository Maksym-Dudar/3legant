import { TextArea } from "@/components/ui/inputs/TextArea";
import type { ICreateProduct } from "@/shared/types/product/createProduct.type";

interface Props extends ICreateProduct {
	setProductInfo: React.Dispatch<React.SetStateAction<ICreateProduct>>;
}

export function ProductDescriptionForm({ description, setProductInfo }: Props) {
	return (
		<section>
			<TextArea
				id='description'
				name='description'
				label='DESCRIPTION'
				placeholder='Enter description'
				value={description}
				rows={10}
				onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
					setProductInfo((val) => {
						return {
							...val,
							description: e.target.value,
						};
					});
				}}
			/>
		</section>
	);
}
