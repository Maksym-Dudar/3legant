import { create, StateCreator } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { IUserStore, IInitialUserStore, ItemUserType } from "./types";

const initialUserStore: IInitialUserStore = {
	firstName: null,
	lastName: null,
	email: null,
	avatar: null,
	exparing: null,
};

const userStore: StateCreator<IUserStore> = (set, get) => ({
	...initialUserStore,

	createUser: (item) => {
		set((state) => {
			return { ...state, firstName: item.firstName, email: item.email, exparing: item.exparing };
		});
	},
	removeUser: () => {
		set(() => initialUserStore);
	},

	updateFirstName: (firstName) => {
		set((state) => {
			return { ...state, firstName: firstName };
		});
	},
	updateLastName: (lastName) => {
		set((state) => {
			return { ...state, lastName: lastName };
		});
	},
	updateEmail: (email) => {
		set((state) => {
			return { ...state, email: email };
		});
	},
	updateAvatar: (avatar) => {
		set((state) => {
			return { ...state, avatar: avatar };
		});
	},
});

const useUserStore = create<IUserStore>()(
	persist(userStore, {
		name: "user",
		storage: createJSONStorage(() => localStorage),
		partialize: (state) => ({
			...state
		}),
	})
);

export const useUserStored = () => useUserStore((state) => state);
export const createUserStore = (item: ItemUserType) =>
	useUserStore.getState().createUser(item);
export const removeUserStore = () =>
	useUserStore.getState().removeUser();
export const updateFirstNameUserStore = (item: string) =>
	useUserStore.getState().updateFirstName(item)
export const updateLastNameUserStore = (item: string) =>
	useUserStore.getState().updateLastName(item)
export const updateEmailUserStore = (item: string) =>
	useUserStore.getState().updateEmail(item);
export const updateAvatarUserStore = (item: string) =>
	useUserStore.getState().updateAvatar(item);
export const getUserStore = () =>
	useUserStore.getState()