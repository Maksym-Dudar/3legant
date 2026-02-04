import type { PropsWithChildren } from "react";
import PadingXLayouts from "@/components/layout/PaddingXLayouts";
import { AdminHeader } from "./AdminHeader";
export function AdminLayout({ children }: PropsWithChildren<unknown>) {
	return (
		<PadingXLayouts>
			<div className='flex flex-col gap-10 w-full'>
				<AdminHeader />
				{children}
			</div>
		</PadingXLayouts>
	);
}
