import { InputFullWidth, Label, Toggle } from "@/components/ui";
import type { ICreateProduct } from "@/shared/types/product/createProduct.type";

interface Props extends ICreateProduct {
	setProductInfo: React.Dispatch<React.SetStateAction<ICreateProduct>>;
}
export function ProductSaleFrom({
	offerExpires,
	sale,
	haveSale,
	setProductInfo,
}: Props) {
	return (
		<section className='flex flex-col gap-3'>
			<h6 className='text-16 sm:text-18 lg:text-20 font-500 leading-140 pb-2'>
				SALE
			</h6>
			<div className='flex flex-row gap-4 items-start justify-between'>
				<div className='flex flex-col gap-2 w-24'>
					<Label id='' label='HAVE SALE?' />
					<Toggle
						checked={haveSale}
						onChange={(checked: boolean) => {
							setProductInfo((val) => ({ ...val, haveSale: checked }));
						}}
					/>
				</div>
				<InputFullWidth
					id='sale'
					name='sale'
					label='DISCOUNT AMOUNT'
					type='number'
					placeholder='Enter discount amount'
					value={sale || ""}
					min={0}
					max={1}
					step={0.01}
					disabled={!haveSale}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						setProductInfo((val) => {
							return {
								...val,
								sale: e.target.value === "" ? 0 : Number(e.target.value),
							};
						});
					}}
				/>
			</div>
			<InputFullWidth
				id='date'
				name='date'
				label='OFFER EXPIRES DATE'
				type='date'
				placeholder='Enter date'
				value={offerExpires ?? new Date()}
				disabled={!haveSale}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					setProductInfo((val) => {
						return {
							...val,
							offerExpires: new Date(e.target.value),
						};
					});
				}}
			/>
		</section>
	);
}
