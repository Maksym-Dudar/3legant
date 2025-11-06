import type { IAddress } from "@/shared/types/address.type";


export interface IInitialAddressStore {
	addressArray: IAddress[];
}

interface IAction {
	rehydrate: (addres: IAddress[]) => void;
	createAddres: (addres: IAddress) => void;
	updateAddres: (addres: IAddress) => void;
	delateAddres: (addres: IAddress) => void;
}

export interface IAddressStore extends IInitialAddressStore, IAction {}
