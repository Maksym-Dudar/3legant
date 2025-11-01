export interface ItemBagType {
	product_id: number;
	quantity: number;
}
export interface IInitialBagStore {
	bag: Map<number, number>;
}

export interface IAction {
	addProduct: (item: ItemBagType) => void;
	removeProduct: (item: ItemBagType) => void;
	decreaseItemCount: (item: ItemBagType) => void;
}

export interface IBagStore extends IInitialBagStore, IAction {}
