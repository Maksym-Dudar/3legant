import { CardBagType } from "@/app/types/card";
import { create, StateCreator } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface IInitialBagStore {
	bag: Map<number, CardBagType>;
}

interface IAction {
	addProduct: (item: CardBagType) => void;
	removeProduct: (item: CardBagType) => void;
	decreaseItemCount: (item: CardBagType) => void;
	crear: () => void;
}

interface IBagStore extends IInitialBagStore, IAction {}

const initialBagStore: IInitialBagStore = {
	bag: new Map(),
};

const bagStore: StateCreator<IBagStore> = (set, get) => ({
	...initialBagStore,
	addProduct: (item) => {
		const stateBag = get().bag;
		const existingItem = stateBag.get(item.id);
		if (existingItem) {
			item.quantity = existingItem.quantity + 1;
			stateBag.set(item.id, item);
			set((state) => ({ ...state, bag: stateBag }));
        } else {
            stateBag.set(item.id, item);
			set((state) => ({ ...state, bag: stateBag }));
		}
	},
	removeProduct: (item) => {
		const stateBag = get().bag;
		const existingItem = stateBag.get(item.id);
		if (existingItem) {
			stateBag.delete(item.id);
			set((state) => ({ ...state, bag: stateBag }));
		} else {
			console.log("Don't have this item in bag");
			set((state) => ({ ...state, bag: state.bag }));
		}
	},
	decreaseItemCount: (item) => {
		const stateBag = get().bag;
		const existingItem = stateBag.get(item.id);
		if (existingItem) {
            item.quantity = existingItem.quantity - 1;
            if (item.quantity != 0) {
                stateBag.set(item.id, item);
            } else {
                stateBag.delete(item.id);
            }
			set((state) => ({ ...state, bag: stateBag }));
        } else {
            console.log("Don't have this item in bag");
			set((state) => ({ ...state, bag: state.bag }));
		}
	},
	crear: () => set((state) => ({ bag: new Map() })),
});

const useBagStore = create<IBagStore>()(
	persist(bagStore, {
		name: "shopping-bag",
		storage: createJSONStorage(() => localStorage),
		partialize: (state) => ({ bag: state.bag }),
	})
);

export const useBag = () => useBagStore((state) => state.bag);
export const addProductToBagStore = (item: CardBagType) =>
	useBagStore.getState().addProduct(item);
export const removeProductToBagStore = (item: CardBagType) =>
    useBagStore.getState().removeProduct(item);
export const decreaseItemCountBagStore = (item: CardBagType) =>
	useBagStore.getState().decreaseItemCount(item);
export const crearBagStore = () =>
    useBagStore.getState().crear();
