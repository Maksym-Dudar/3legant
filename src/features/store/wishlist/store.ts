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

const wishlistStore: StateCreator<IWishlistStore> = (set, get) => ({
	...initialWishlistStore,
	addProduct: (item) => {
		set((state) => {
			const wishlist = new Set(state.wishlist);
			const existing = [...wishlist].some((x) => x.id === item.id);
			if (!existing) {
				wishlist.add(item);
			}
			return { wishlist };
		});
	},
	removeProduct: (item) => {
		set((state) => {
			const wishlist = new Set(
				[...state.wishlist].filter((x) => x.id !== item.id)
			);
			return { ...state, wishlist };
		});
	},

	togleProduct: (item) => {
		set((state) => {
			const exists = [...state.wishlist].some((x) => x.id === item.id);
			let wishlist: Set<ItemWishlistType>;

			if (exists) {
				wishlist = new Set([...state.wishlist].filter((x) => x.id !== item.id));
			} else {
				wishlist = new Set(state.wishlist);
				wishlist.add(item);
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

export const useWishlistStored = () =>
	useWishlistStore((state) => state.wishlist);
export const useCountProductInWishlistStore = () =>
	useWishlistStore((state) => state.wishlist.size);
export const addProductToWishlistStore = (item: ItemWishlistType) =>
	useWishlistStore.getState().addProduct(item);
export const removeProductToWishlistStore = (item: ItemWishlistType) =>
	useWishlistStore.getState().removeProduct(item);
export const togleProductToWishlistStore = (item: ItemWishlistType) =>
	useWishlistStore.getState().togleProduct(item); 

