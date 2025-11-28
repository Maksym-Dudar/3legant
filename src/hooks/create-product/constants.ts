import type { ICreateProduct } from "@/shared/types/product/createProduct.type";
import type { Option } from "@/shared/types";

export const initialProduct: ICreateProduct = {
        productGroupId: -1,
        title: "",
        quantityWarehouse: 0,
        description: "",
        price: 0,
        haveSale: true,
        isNew: true,
        color: "",
        measurements: "",
        img: [],
        category: [],
}

export const optionCreate: Option = {
	label: "Create",
	value: -1,
};