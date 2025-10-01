import { create, type StateCreator } from "zustand";
import type { IInitialUserStore, IUser, IUserStore } from "./types";
import { createJSONStorage, persist } from "zustand/middleware";

const initialUserStore: IInitialUserStore = {
	user: null,
};

const userStore: StateCreator<IUserStore> = (set) => ({
	...initialUserStore,
	updateUser: (fields) =>
		set((state) => ({
			user: state.user ? { ...state.user, ...fields } : { ...fields },
		})),
	clearUser: () => set({ user: null }),
});

export const useUserStore = create<IUserStore>()(
	persist(userStore, {
		name: "user",
		storage: createJSONStorage(() => localStorage),
		partialize: (state) => ({
			user: state.user,
		}),
	})
);

export function updateUserData(userData: Partial<IUser>) {
	if (!userData) return;
	useUserStore.getState().updateUser(userData);
}
