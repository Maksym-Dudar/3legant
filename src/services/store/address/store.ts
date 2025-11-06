import { create, type StateCreator } from "zustand";
import { persist } from "zustand/middleware";
import type { IAddressStore, IInitialAddressStore } from "./types";
import type { IAddress } from "@/shared/types/address.type";

const initialAddressStore: IInitialAddressStore = {
	addressArray: [],
};

const addresStore: StateCreator<IAddressStore> = (set) => ({
	...initialAddressStore,
	rehydrate: (address: IAddress[]) => set(() => ({
		addressArray: address
	})),
	createAddres: (addres: IAddress) =>
		set((state) => ({
			addressArray: [...state.addressArray, addres],
		})),
	updateAddres: (addres: IAddress) =>
		set((state) => ({
			addressArray: state.addressArray.map((a) =>
				a.id === addres.id ? { ...a, ...addres } : a
			),
		})),
	delateAddres: (addres: IAddress) =>
		set((state) => ({
			addressArray: state.addressArray.filter((addr) => addr.id !== addres.id),
		})),
});

export const useAddressStore = create<IAddressStore>()(
	persist(addresStore, { name: "address" })
);

