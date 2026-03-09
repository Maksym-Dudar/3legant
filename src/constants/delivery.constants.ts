export type IDelivery = "Free" | "Express" | "Pick-up"
 
interface IDeliveryOptions {
	label: string;
	valueName: string;
	value: IDelivery;
}

export const deliveryOptions: IDeliveryOptions[] = [
	{ label: "Free shipping", value: "free", valueName: "$0.00" },
	{ label: "Express shipping", value: "express", valueName: "+$15.00" },
	{ label: "Pick Up", value: "pick-up", valueName: "%21.00" },
];