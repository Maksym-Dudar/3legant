import { create, type StateCreator } from "zustand";
import type { IBagStore, IInitialBagStore, ItemBagType } from "./types";
import { createJSONStorage, persist } from "zustand/middleware";

const initialBagStore: IInitialBagStore = {
	bag: [],
};

const bagStore: StateCreator<IBagStore> = (set) => ({
	...initialBagStore,
	addProduct: (item) => {
		set((state) => {
			const bag = [...state.bag];
			const index = bag.findIndex((val) => val.productId === item.productId);
			if (index !== -1) {
				const existing = bag[index];
				const newQty = Math.max(existing.quantity + 1, item.quantity);
				bag[index] = { ...existing, quantity: newQty };
			} else {
				bag.push({ productId: item.productId, quantity: item.quantity });
			}
			return { ...state, bag };
		});
	},

	removeProduct: (item) => {
		set((state) => {
			const bag = state.bag.filter((val) => val.productId !== item.productId);
			return { ...state, bag };
		});
	},

	decreaseItemCount: (item) => {
		set((state) => {
			const bag = [...state.bag];
			const index = bag.findIndex((val) => val.productId === item.productId);
			if (index !== -1) {
				const existing = bag[index];
				const newQty = existing.quantity - 1;
				if (newQty > 0) {
					bag[index] = { ...existing, quantity: newQty };
				} else {
					bag.splice(index, 1); 
				}
			}
			return { ...state, bag };
		});
	},
});

export const useBagStore = create<IBagStore>()(
	persist(bagStore, {
		name: "shopping-bag",
		storage: createJSONStorage(() => localStorage),
		partialize: (state) => ({
			bag: state.bag,
		}),
	})
);

export const quantityProductInBagStore = (id: number): number =>
	useBagStore.getState().bag.find((item) => item.productId === id)?.quantity ?? 0;


