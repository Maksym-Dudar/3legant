import { IMAGE, NEXT_PUBLIC_BACKEND_URL, PAGE } from "@/config";
import { useErrorToast } from "@/hooks/useErrorToast";
import { authService, userService } from "@/services/requests";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function useSidebar() {
  	const router = useRouter();
		const [localError, setLocalError] = useState<Error | null>(null);
		const { data, isError, error } = useQuery({
			queryKey: ["user"],
			queryFn: ({ signal }) => userService.getUser(signal),
		});
		const logoutMutation = useMutation({
			mutationKey: ["logout"],
			mutationFn: () => authService.logOut(),
			onSuccess: () => {
				router.push(PAGE.HOME.link);
			},
			onError: (error) => setLocalError(error),
		});
		const sendFileMutation = useMutation({
			mutationKey: ["avatar"],
			mutationFn: (file: File) => userService.updateAvatar({ avatar: file }),
			onError: (error) => setLocalError(error),
		});
		const { errorMessage, closeError } = useErrorToast(
			error || localError,
			isError,
		);

		const userAvatar = data?.avatar
			? NEXT_PUBLIC_BACKEND_URL + data.avatar
			: IMAGE.USER_ICON.src;

		function logOut() {
			logoutMutation.mutate();
		}

		function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
			const file = event.target.files?.[0];
			if (!file) {
				setLocalError(Error("File not find"));
				return;
			}
			sendFileMutation.mutate(file);
		}

		const onCloseError = () => {
			closeError();
			setLocalError(null);
		};
  return { data, errorMessage, userAvatar, logOut, handleFileChange, onCloseError };
}