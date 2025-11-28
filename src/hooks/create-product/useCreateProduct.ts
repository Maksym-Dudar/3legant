"use client";

import type { ICreateProduct } from "@/shared/types/product/createProduct.type";
import type { ICategorySelectOption, IGroupSelectOption } from "@/shared/types";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState, type Dispatch, type FormEventHandler, type SetStateAction } from "react";
import { initialProduct, optionCreate } from "./constants";
import { createProduct, getProductGroup } from "@/services/requests/admin-panel/create-product";
import { Category } from "@/config/product.config";
import { Label } from "@/components/ui";

type TProductGroupSevrerRes = {
	title: string,
	id: number
}

type TTroductGroup = {
	groupOptions: IGroupSelectOption[];
	productGroupValue: IGroupSelectOption;
	canCreateProductGroup: boolean;
};

interface CreateProductHookReturn {
	productGroup: TTroductGroup;
	isLoading: boolean;
	isError: boolean;
	productInfo: ICreateProduct;
	imagesPreview: string[];
	categoryOptions: ICategorySelectOption[];
	onSubmit: FormEventHandler<HTMLFormElement>;
	setProductInfo: Dispatch<SetStateAction<ICreateProduct>>;
	handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function useCreateProduct(): CreateProductHookReturn {
	const { data, isLoading, isError } = useQuery<TProductGroupSevrerRes[]>({
		queryKey: ["createProduct"],
		queryFn: getProductGroup,
	});


	const [productInfo, setProductInfo] =
		useState<ICreateProduct>(initialProduct);
	const [imagesPreview, setImagesPreview] = useState<string[]>([]);

	const groupOptions: IGroupSelectOption[] = (data ?? []).map((val) => ({
		label: val.title,
		value: val.id,
	}));
	groupOptions.push(optionCreate);

	const productGroupValue: IGroupSelectOption =
		groupOptions.find((val) => val.value == productInfo.productGroupId) ??
		optionCreate;

	const canCreateProductGroup: boolean =
		productInfo.productGroupId != optionCreate.value;
	
	useEffect(() => {
		if (!canCreateProductGroup)
			setProductInfo((val) => ({
				...val,
				title: "",
			}));
	}, [canCreateProductGroup]);

	const productGroup: TTroductGroup = {
		groupOptions,
		productGroupValue,
		canCreateProductGroup,
	};

	const categoruValues = Object.values(Category)
	const categoryOptions: ICategorySelectOption[] = categoruValues.map(
		(val) => ({
			label: String(val),
			value: String(val)
				.toLocaleUpperCase()
				.split(" ")
				.reduce((acc, word, index) => acc + (index > 0 ? "_" : "") + word, ""),
		})
	);

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files;
		if (!files) return;
		setProductInfo((val) => ({
			...val, img: Array.from(files)
		}))

		const imageUrls = Array.from(files).map((file) =>
			URL.createObjectURL(file)
		);
		setImagesPreview(imageUrls);
	};

	const onSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
		event.preventDefault();
		if (productInfo.img.length == 0) throw new Error("Images don't found");
		const res = await createProduct(productInfo)
		console.log(res)
	};
	return {
		productGroup,
		categoryOptions,
		isLoading,
		isError,
		productInfo,
		imagesPreview,
		onSubmit,
		handleFileChange,
		setProductInfo,
	};
}
