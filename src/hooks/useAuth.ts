"use client";

import { useUser } from "@/features/user/hook/useUser";

export function useAuth() {
	const query = useUser();

	return {
		user: query.userData ?? null,
		isAuthorized: !!query.userData,
		isLoading: query.isLoading,
	};
}
