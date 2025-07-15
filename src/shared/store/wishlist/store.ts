import { create, StateCreator } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import {
	IWishlistStore,
	IInitialWishlistStore,
	ItemWishlistType,
} from "./types";

const initialWishlistStore: IInitialWishlistStore = {
	wishlist: new Set(),
};

const wishlistStore: StateCreator<IWishlistStore> = (set) => ({
	...initialWishlistStore,
	addProduct: (item) => {
		set((state) => {
			const wishlist = new Set(state.wishlist);
			const existing = wishlist.has(item);
			if (!existing) {
				wishlist.add(item);
			}
			return { ...state, wishlist };
		});
	},
	removeProduct: (item) => {
		set((state) => {
			const wishlist = new Set(state.wishlist);
			const existing = wishlist.has(item);
			if (existing) {
				wishlist.delete(item);
			}
			return { ...state, wishlist };
		});
	},
});

const useWishlistStore = create<IWishlistStore>()(
	persist(wishlistStore, {
		name: "wishlist",
		storage: createJSONStorage(() => localStorage),
		partialize: (state) => ({
			wishlist: Array.from(state.wishlist),
		}),
		onRehydrateStorage: () => (state) => {
			if (state?.wishlist && Array.isArray(state.wishlist)) {
				setTimeout(() => {
					useWishlistStore.setState({
						wishlist: new Set(state.wishlist),
					});
				}, 0);
			}
		},
	})
);

export const useWishlistStored = () => useWishlistStore((state) => state.wishlist);
export const useCountProductInWishlistStore = () =>
	useWishlistStore((state) => state.wishlist.size);
export const addProductToWishlistStore = (item: ItemWishlistType) =>
	useWishlistStore.getState().addProduct(item);
export const removeProductToWishlistStore = (item: ItemWishlistType) =>
	useWishlistStore.getState().removeProduct(item);

