import { InputFullWidth } from "@/components/ui";
import type { IGroupSelectOption } from "@/shared/types";
import type { ICreateProduct } from "@/shared/types/product/createProduct.type";
import Select from "react-select";

interface Props extends ICreateProduct {
	value: IGroupSelectOption;
	options: IGroupSelectOption[];
	canCreateProductGroup: boolean;

	setProductInfo: React.Dispatch<React.SetStateAction<ICreateProduct>>;
}

export function ProductGroupFrom({
	options,
	title,
	value,
	canCreateProductGroup,
	setProductInfo,
}: Props) {
	return (
		<section className='flex flex-col gap-3'>
			<h6 className='text-16 sm:text-18 lg:text-20 font-500 leading-140 pb-2'>
				PRODUCT GROUP
			</h6>
			{options?.length > 0 && (
				<Select
					id='productGroupId'
					name='Product group id'
					options={options}
					value={value}
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
								productGroupId: selectedOption.value,
								title: selectedOption.label,
							}));
						} else {
						}
					}}
				/>
			)}
			<InputFullWidth
				id='productGroupTitle'
				name='productGroupTitle'
				label='PRODUCT GROUP TITLE'
				type='text'
				placeholder='Enter product product group title'
				value={title}
				disabled={canCreateProductGroup}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					setProductInfo((val) => {
						console.log(e.target.value);
						return { ...val, title: e.target.value };
					});
				}}
			/>
		</section>
	);
}