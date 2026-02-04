"use client";

import { useEffect, useState } from "react";

export function useErrorToast(isError: boolean, error: Error | null) {
	const [errorMessage, setErrorMessage] = useState<string | null>(null);

	useEffect(() => {
		if (isError && error) {
			setErrorMessage(error instanceof Error ? error.message : "Unknown error");
		}
	}, [isError, error]);

	const closeError = () => setErrorMessage(null);

	return { errorMessage, closeError };
}
