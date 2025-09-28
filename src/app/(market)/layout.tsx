import { BagSidebar, Header, MobileMenu, Overlay } from "@/components/widgets";
import Footer from "@/components/widgets/footer/Footer";
import { FooterBanner } from "@/components/widgets/footer/FooterBanner";
import { BagProvider, MobileMenuProvider } from "@/provider";
import type { PropsWithChildren } from "react";

export default function MarketLayouts({ children }: PropsWithChildren<unknown>) {
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
