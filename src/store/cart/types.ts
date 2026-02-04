export interface ICartStoreItem {
	id: number;
	quantity: number;
}
export interface IInitialCartStore {
	cart: ICartStoreItem[];
}

export interface IAction {
	addProduct: (item: ICartStoreItem) => void;
	removeProduct: (item: ICartStoreItem) => void;
	decreaseItemCount: (item: ICartStoreItem) => void;
}

export interface ICartStore extends IInitialCartStore, IAction {}
