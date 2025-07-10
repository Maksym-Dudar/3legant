import { create, StateCreator } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { IBagStore, IInitialBagStore, ItemBagType } from "./types";

const initialBagStore: IInitialBagStore = {
	bag: new Map(),
};

const bagStore: StateCreator<IBagStore> = (set) => ({
	...initialBagStore,
	addProduct: (item) => {
		set((state) => {
			const bag = new Map(state.bag);
			const existing = bag.get(item.id);
			if (existing) {
				item.quantity = existing.quantity + 1;
			}
			bag.set(item.id, item);
			return { ...state, bag };
		});
	},
	removeProduct: (item) => {
		set((state) => {
			const bag = new Map(state.bag);
			bag.delete(item.id);
			return { ...state, bag };
		});
	},
	decreaseItemCount: (item) => {
		set((state) => {
			const bag = new Map(state.bag);
			const existing = bag.get(item.id);
			if (existing) {
				const newQty = existing.quantity - 1;
				if (newQty > 0) {
					item.quantity = newQty;
					bag.set(item.id, item);
				}
			}
			return { ...state, bag };
		});
	},
});

const useBagStore = create<IBagStore>()(
	persist(bagStore, {
		name: "shopping-bag",
		storage: createJSONStorage(() => localStorage),
		partialize: (state) => ({
			bag: Object.fromEntries(state.bag),
		}),
		onRehydrateStorage: () => (state, error) => {
			if (state && state.bag && !(state.bag instanceof Map)) {
				setTimeout(() => {
					useBagStore.setState({
						bag: new Map(
							Object.entries(state.bag).map(([key, value]) => [
								Number(key),
								value as ItemBagType,
							])
						),
					});
				}, 0);
			}
		},
	})
);

export const useBag = () => useBagStore((state) => state.bag);
export const countProductInBagStore = () => useBagStore((state) => state.bag.size);
export const quantityProductInBagStore = (id: number) =>
	useBagStore.getState().bag.get(id)?.quantity;
export const addProductToBagStore = (item: ItemBagType) =>
	useBagStore.getState().addProduct(item);
export const removeProductToBagStore = (item: ItemBagType) =>
	useBagStore.getState().removeProduct(item);
export const decreaseItemCountBagStore = (item: ItemBagType) =>
	useBagStore.getState().decreaseItemCount(item);
