"use client";

import { Controller, useForm } from "react-hook-form";
import { CreateProductSchema } from "../../model/create-product.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import {
	Button,
	ErrorToast,
	Input,
	Label,
	TextArea,
	Toggle,
} from "@/components/ui";
import CustomSelect from "@/components/ui/select/CustomSelect";
import CheckBox from "@/components/ui/inputs/CheckBox";
import { useMutation, useQuery } from "@tanstack/react-query";
import { productService } from "@/services/requests";
import { useErrorToast } from "@/hooks/useErrorToast";
import { Loading } from "@/components/widgets";
import { Category } from "@/config/product.config";
import Image from "next/image";
import { FieldError } from "@/components/ui/inputs/FieldError";
import { useRouter } from "next/navigation";

export const optionCreate = {
	label: "Create",
	value: -1,
};

export function CreateProduct() {
	const {
		register,
		control,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<CreateProductSchema>({
		resolver: zodResolver(CreateProductSchema),
	});

	const { data, isError, isLoading, error } = useQuery({
		queryKey: ["Product Group"],
		queryFn: () => productService.getProductGroup(),
	});

	const [imagesPreview, setImagesPreview] = useState<string[]>([]);
	const [haveSale, setHaveSale] = useState<boolean>(false);
	const { errorMessage, closeError, setErrorMessage } = useErrorToast(
		error,
		isError,
	);
	const router = useRouter();

	const groupOptions = (data ?? []).map((val) => ({
		label: val.title,
		value: val.id,
	}));
	groupOptions.push(optionCreate);

	const categoryOptions = Object.values(Category).map((val) => ({
		label: String(val),
		value: String(val)
			.toLocaleUpperCase()
			.split(" ")
			.reduce((acc, word, index) => acc + (index > 0 ? "_" : "") + word, ""),
	}));

	useEffect(() => {
		const images = watch("images");
		if (!images) return;
		const imageUrls = Array.from(images).map((file) =>
			URL.createObjectURL(file),
		);
		setImagesPreview(imageUrls);
	}, [watch("images")]);

	const createProductMutation = useMutation({
		mutationFn: (payload: FormData) => productService.createProduct(payload),
	});

	const submit = handleSubmit(
		async (payload: Record<string, any>) => {
			const formData = new FormData();

			Object.entries(payload).forEach(([key, value]) => {
				if (key === "images" && value instanceof FileList) {
					Array.from(value).forEach((file) => {
						formData.append("images", file);
					});
				} else if (Array.isArray(value)) {
					value.forEach((v) => formData.append(key, String(v)));
				} else {
					formData.append(key, String(value));
				}
			});

			const res = await createProductMutation.mutateAsync(formData);

			// router.push(PAGE.ADDRESS_CREATE.link);

			return;
		},
		(errors) => {
			console.log("ERRORS", errors);
		},
	);

	if (isLoading) return <Loading />;

	return (
		<>
			{errorMessage && (
				<ErrorToast message={errorMessage} onClose={closeError} />
			)}
			<form
				className='flex flex-row w-full justify-between gap-8 pb-20'
				onSubmit={submit}
			>
				<section className='flex flex-col h-full w-full gap-6'>
					<h6 className='text-16 sm:text-18 lg:text-20 font-500 leading-140'>
						PRODUCT IMAGES
					</h6>
					<div className='flex flex-col w-full gap-3'>
						<label
							htmlFor='productImages'
							className='inline-flex items-center justify-center px-4 py-2 rounded-full border-1 border-grey bg-white text-grey-900 shadow-md transition hover:shadow-lg active:shadow-inner'
						>
							Select product images
						</label>
						<Controller
							control={control}
							name='images'
							render={({ field }) => (
								<input
									type='file'
									multiple
									accept='image/*'
									onChange={(e) => field.onChange(e.target.files)}
								/>
							)}
						/>
						<FieldError errorMessage={errors.images?.message} />
					</div>

					<div className='grid grid-cols-2 gap-3'>
						{imagesPreview.map((src, index) => (
							<Image
								key={src}
								src={src}
								alt={`preview-${index}`}
								width={0}
								height={0}
								sizes='100vw'
								style={{ width: "auto", height: "auto", borderRadius: "10px" }}
							/>
						))}
					</div>
				</section>
				<div className='w-full flex flex-col gap-14'>
					<section className='flex flex-col gap-3'>
						<h6 className='text-16 sm:text-18 lg:text-20 font-500 leading-140 pb-2'>
							PRODUCT GROUP
						</h6>
						<Controller
							control={control}
							name='productGroupId'
							render={({ field }) => (
								<CustomSelect
									label='PRODUCT GROUP'
									placeholder='Product group'
									className='w-full '
									options={groupOptions}
									styleType='outlined'
									onChange={(option) => field.onChange(option?.value)}
									value={
										groupOptions.find((o) => o.value === field.value) ?? null
									}
								/>
							)}
						/>
						<Input
							variant='outlined'
							label='PRODUCT NAME'
							placeholder='Product name'
							errorMessage={errors.title?.message}
							disabled={watch("productGroupId") != optionCreate.value}
							{...register("title")}
						/>
						<h6 className='text-16 sm:text-18 lg:text-20 font-500 leading-140 pb-2'>
							PRODUCT DETAILS
						</h6>
						<Controller
							control={control}
							name='category'
							render={({ field }) => (
								<CustomSelect
									label='CATEGORY'
									placeholder='category'
									className='w-full'
									options={categoryOptions}
									styleType='outlined'
									isMulti={true}
									value={
										Array.isArray(field.value)
											? categoryOptions.filter((o) =>
													field.value.includes(o.value),
												)
											: []
									}
									onChange={(selected) =>
										field.onChange(
											Array.isArray(selected)
												? selected.map((s) => s.value)
												: [],
										)
									}
								/>
							)}
						/>
						<Input
							variant='outlined'
							label='COLOR'
							placeholder='Color'
							errorMessage={errors.color?.message}
							{...register("color")}
						/>
						<Input
							variant='outlined'
							label='MEASUREMENTS'
							placeholder='Measurements'
							errorMessage={errors.measurements?.message}
							{...register("measurements")}
						/>
						<div className='flex flex-row gap-4 items-start justify-between'>
							<Input
								variant='outlined'
								label='PRISE'
								placeholder='Price'
								type='number'
								errorMessage={errors.price?.message}
								{...register("price", { valueAsNumber: true })}
							/>
							<Input
								variant='outlined'
								label='QUANTITY WAREHOUSE'
								placeholder='Quantity warehouse'
								type='number'
								errorMessage={errors.quantityWarehouse?.message}
								{...register("quantityWarehouse", { valueAsNumber: true })}
							/>
						</div>
						<div className='flex flex-row gap-4 w-full'>
							<Label id='isNew' label='IS NEW?' className='w-16' />
							<CheckBox
								id='isNew'
								errorMessage={errors.isNew?.message}
								{...register("isNew")}
							/>
						</div>
						<h6 className='text-16 sm:text-18 lg:text-20 font-500 leading-140 pb-2'>
							SALE
						</h6>
						<div className='flex flex-row gap-4 items-start justify-between'>
							<div className='flex flex-col gap-2 w-24'>
								<Label id='haveSle' label='HAVE SALE?' className='w-full' />
								<Toggle
									id='haveSle'
									checked={haveSale}
									onChange={(checked: boolean) => setHaveSale(checked)}
								/>
							</div>
							<Input
								variant='outlined'
								label='SALE'
								placeholder='Sale'
								type='number'
								min={0}
								max={1}
								step={0.01}
								errorMessage={errors.sale?.message}
								disabled={!haveSale}
								{...register("sale", { valueAsNumber: true })}
							/>
						</div>
						<Input
							variant='outlined'
							label='OFFER EXPIRES'
							placeholder='Offer expires'
							errorMessage={errors.offerExpires?.message}
							type='date'
							disabled={!haveSale}
							{...register("offerExpires", { valueAsDate: true })}
						/>
						<TextArea
							label='DESCRIPTION'
							placeholder='Description'
							errorMessage={errors.description?.message}
							{...register("description")}
						/>
					</section>
					<Button type='submit' text='Create' className='py-3' />
				</div>
			</form>
		</>
	);
}
