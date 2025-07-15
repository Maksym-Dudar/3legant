export interface ItemWishlistType {
	id: number;
}
export interface IInitialWishlistStore {
	wishlist: Set<ItemWishlistType>;
}

export interface IAction {
	addProduct: (item: ItemWishlistType) => void;
	removeProduct: (item: ItemWishlistType) => void;
}

export interface IWishlistStore extends IInitialWishlistStore, IAction {}
