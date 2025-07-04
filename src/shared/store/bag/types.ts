export interface ItemBagType {
	id: number;
    quantity: number;
}
export interface IInitialBagStore {
	bag: Map<number, ItemBagType>;
}

export interface IAction {
	addProduct: (item: ItemBagType) => void;
	removeProduct: (item: ItemBagType) => void;
	decreaseItemCount: (item: ItemBagType) => void;
	crear: () => void;
}

export interface IBagStore extends IInitialBagStore, IAction {}
