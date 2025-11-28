"use client";

import { ButtonAction } from "@/components/ui";
import { Loading, Error } from "../..";
import { ProductPhotoInput } from "./underground-components/ProductPhotoInput";
import { useCreateProduct } from "@/hooks";
import { ProductGroupFrom } from "./underground-components/ProductGroupFrom";
import { ProductDetailsForm } from "./underground-components/ProductDetailsForm";
import { ProductSaleFrom } from "./underground-components/ProductSaleFrom";
import { ProductDescriptionForm } from "./underground-components/ProductDescriptionForm";
import { Category } from "@/config/product.config";

export function CreateProduct() {
	const {
		isLoading,
		isError,
		productInfo,
		onSubmit,
		imagesPreview,
		productGroup,
		categoryOptions,
		setProductInfo,
		handleFileChange,
	} = useCreateProduct();
	if (isLoading) return <Loading />;
	if (isError) return <Error masage='mk' />;

	return (
		<form
			className='flex flex-row w-full justify-between gap-8 pb-20'
			onSubmit={onSubmit}
		>
			<ProductPhotoInput
				imagesPreview={imagesPreview}
				handleFileChange={handleFileChange}
			/>
			<div className='w-full flex flex-col gap-14'>
				<ProductGroupFrom
					{...productInfo}
					setProductInfo={setProductInfo}
					canCreateProductGroup={productGroup.canCreateProductGroup}
					value={productGroup.productGroupValue}
					options={productGroup.groupOptions}
				/>
				<ProductDetailsForm
					{...productInfo}
					setProductInfo={setProductInfo}
					options={categoryOptions}
					// value={categoryOptions}
				/>
				<ProductSaleFrom {...productInfo} setProductInfo={setProductInfo} />
				<ProductDescriptionForm
					{...productInfo}
					setProductInfo={setProductInfo}
				/>
				<ButtonAction
					type='submit'
					text='Create'
					onClick={() => {}}
					paddingY={3}
				/>
			</div>
		</form>
	);
}
