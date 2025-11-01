import { BagSidebar, Footer, FooterBanner, Header, MobileMenu, Overlay } from "@/components/widgets";
import { BagProvider, MobileMenuProvider } from "@/provider";
import type { PropsWithChildren } from "react";

export default function layout({ children }: PropsWithChildren<unknown>) {
	return (
		<>
			<BagProvider>
				<MobileMenuProvider>
					<Overlay />
					<BagSidebar />
					<MobileMenu />
					<Header /> 
					{children}
					<FooterBanner />
					<Footer />
				</MobileMenuProvider>
			</BagProvider>
		</>
	);
}
