import { Button } from "@/components/ui";
import { PAGE } from "@/config";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

export function UserActionButton() {
	const router = useRouter();
	const { isAuthorized, isLoading } = useAuth();

	const text = isLoading ? "Loading" : isAuthorized ? "Account" : "Sign In";
	const handleClick = () => router.push(isAuthorized ? PAGE.ACCOUNT.link : PAGE.SIGN_IN.link);
	return (
		<Button
			type='button'
			text={text}
			onClick={handleClick}
			className='py-2'
			disabled={isLoading}
		/>
	);
}
