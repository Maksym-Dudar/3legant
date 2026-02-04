"use client";

import { useQuery } from "@tanstack/react-query";
import { userService } from "@/services/requests/user/user.services";

export function useAuth() {
	const query = useQuery({
		queryKey: ["auth", "me"],
		queryFn: ({ signal }) => userService.getUser(signal),
		retry: false,
	});

	return {
		user: query.data ?? null,
		isAuthorized: !!query.data,
		isLoading: query.isLoading,
	};
}
