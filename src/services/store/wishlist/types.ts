export interface ItemWishlistType {
	product_id: number;
}
export interface IInitialWishlistStore {
	wishlist: Set<ItemWishlistType>;
}

interface IAction {
	addProduct: (item: ItemWishlistType) => void;
	removeProduct: (item: ItemWishlistType) => void;
	togleProduct: (item: ItemWishlistType) => void;
}

export interface IWishlistStore extends IInitialWishlistStore, IAction {}
