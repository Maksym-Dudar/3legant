"use client";

import { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { getMe } from "@/services/user.service";

export const UserContext = createContext<any>(null);

export function UserProvider({ children }: { children: React.ReactNode }) {
	const { data: user } = useQuery({
		queryKey: ["me"],
		queryFn: getMe,
	});

	return (
		<UserContext.Provider value={user ?? null}>
			{children}
		</UserContext.Provider>
	);
}

export const useUser = () => {
	const user = useContext(UserContext);
	if (!user) throw new Error("useUser must be used inside UserProvider");
	return user;
};
