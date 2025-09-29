import { ButtonAction } from "@/components/ui";

interface Props {
	isAuthorized: boolean;
	authorized: {
		text: string;
		onClick: () => void;
	};
	noAuthorized: {
		text: string;
		onClick: () => void;
	};
}

export function MainButton({ isAuthorized, authorized, noAuthorized }: Props) {
	return (
		<>
			{isAuthorized ? (
				<ButtonAction
					type='button'
					text={authorized.text}
					onClick={authorized.onClick}
					padding={2}
				/>
			) : (
				<ButtonAction
					type='button'
					text={noAuthorized.text}
					onClick={noAuthorized.onClick}
					padding={2}
				/>
			)}
		</>
	);
}
