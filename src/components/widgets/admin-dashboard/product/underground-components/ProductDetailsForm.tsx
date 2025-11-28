import { InputFullWidth, Label, Toggle } from "@/components/ui";
import type { ICategorySelectOption } from "@/shared/types";
import type { ICreateProduct } from "@/shared/types/product/createProduct.type";
import Select from "react-select";

interface Props extends ICreateProduct {
	// value: ICategorySelectOption[];
	options: ICategorySelectOption[];
	setProductInfo: React.Dispatch<React.SetStateAction<ICreateProduct>>;
}

export function ProductDetailsForm({
	measurements,
	quantityWarehouse,
	isNew = true,
	price,
	color,
	// value,
	options,
	setProductInfo,
}: Props) {
	return (
		<section className='flex flex-col gap-3'>
			<h6 className='text-16 sm:text-18 lg:text-20 font-500 leading-140 pb-2'>
				PRODUCT DETAILS
			</h6>
			<Select
				id='productGroupId'
				name='Product group id'
				options={options}
				// value={value}
				isMulti
				classNames={{
					control: () => "text-14 md:text-16 font-400 leading-160",
					option: () => "text-14 md:text-16 font-400 leading-160",
					singleValue: () => "text-14 md:text-16 font-400 leading-160",
					placeholder: () =>
						"text-14 md:text-16 font-400 leading-160 opacity-70",
				}}
				styles={{
					control: (base) => ({
						...base,
						border: "1px solid var(--descriptiongray)",
						borderRadius: "6px",
						padding: "0 7px",
						color: "var(--black)",
						fontFamily: "'Inter'",
					}), // todo
				}}
				onChange={(selectedOption) => {
					if (selectedOption) {
						setProductInfo((val) => ({
							...val,
							category: selectedOption.map((val) => val.value),
						}));
					} else {
					}
				}}
			/>
			<InputFullWidth
				id='color'
				name='color'
				label='COLOR'
				type='text'
				placeholder='Enter product color'
				value={color}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					setProductInfo((val) => {
						return { ...val, color: e.target.value };
					});
				}}
			/>
			<InputFullWidth
				id='measurements'
				name='measurements'
				label='MEASUREMENTS'
				type='string'
				placeholder='Enter measurements'
				value={measurements}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					setProductInfo((val) => {
						return {
							...val,
							measurements: e.target.value,
						};
					});
				}}
			/>

			<div className='flex flex-row gap-4 items-start justify-between'>
				<InputFullWidth
					id='price'
					name='price'
					label='PRICE'
					type='number'
					placeholder='Enter price'
					value={price || ""}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						setProductInfo((val) => {
							return {
								...val,
								price: e.target.value === "" ? 0 : Number(e.target.value),
							};
						});
					}}
				/>
				<InputFullWidth
					id='quantityWarehouse'
					name='quantityWarehouse'
					label='QUANTITY WAREHOUSE'
					type='number'
					placeholder='Enter quantity'
					value={quantityWarehouse || ""}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						setProductInfo((val) => {
							return {
								...val,
								quantityWarehouse:
									e.target.value === "" ? 0 : Number(e.target.value),
							};
						});
					}}
				/>
			</div>
			<div className='flex flex-col gap-2 w-full'>
				<Label id='' label='IS NEW?' />
				<Toggle
					checked={isNew}
					onChange={(checked: boolean) => {
						setProductInfo((val) => ({ ...val, isNew: checked }));
					}}
				/>
			</div>
		</section>
	);
}
