"use client";
import {
	BagSidebar,
	Footer,
	Header,
	MobileMenu,
	Overlay,
} from "@/components/widgets";
import { AccountLayouts } from "@/components/widgets/user-dashboard";
import PadingXLayouts from "@/layout/PadingXLayouts";
import { BagProvider, MobileMenuProvider } from "@/provider";

import type { PropsWithChildren } from "react";

export default function layouts({ children }: PropsWithChildren<unknown>) {
	return (
		<>
			<BagProvider>
				<MobileMenuProvider>
					<Overlay />
					<BagSidebar />
					<MobileMenu />
					<Header />
					<PadingXLayouts>
						<AccountLayouts>
							{children}
						</AccountLayouts>
					</PadingXLayouts>
					<Footer />
				</MobileMenuProvider>
			</BagProvider>
		</>
	);
}
