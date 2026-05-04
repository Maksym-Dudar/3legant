"use client";

import { useEffect, useState } from "react";

export function useErrorToast(error: Error | null, isError?: boolean) {
	const [errorMessage, setErrorMessage] = useState<string | null>(null);

	useEffect(() => {
		if (isError || error) {
			setErrorMessage(error instanceof Error ? error.message : "Unknown error");
		}
	}, [isError, error]);

	const closeError = () => setErrorMessage(null);

	return { errorMessage, closeError, setErrorMessage };
}
