import { create, type StateCreator } from "zustand";
import type { IInitialUserStore, IUserStore } from "./types";
import { createJSONStorage, persist } from "zustand/middleware";
import type { IUser } from "@/shared/types/user";

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


export const updateUserData = (userData: Partial<IUser>) => {
	if (!userData) return;
	useUserStore.getState().updateUser(userData);
}
