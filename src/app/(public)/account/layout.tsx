import PaddingXLayouts from "@/components/layout/PaddingXLayouts";
import { AccountLayouts } from "@/components/widgets/user-dashboard";
import { type PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren<unknown>) {
	return (
		<PaddingXLayouts>
			<AccountLayouts>{children}</AccountLayouts>
		</PaddingXLayouts>
	);
}
