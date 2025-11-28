import { AdminLayout } from "@/components/widgets/admin-dashboard/layout/AdminLayout";
import PadingXLayouts from "@/layout/PadingXLayouts";
import { type PropsWithChildren } from "react";

export default function layouts({ children }: PropsWithChildren<unknown>) {
	return (
			<AdminLayout>{children}</AdminLayout>
	);
}
