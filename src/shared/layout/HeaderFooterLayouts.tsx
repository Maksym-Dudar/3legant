"use client";

import { PropsWithChildren } from "react";
import Header from "../../widgets/header/Header";
import Footer from "../../widgets/footer/Footer";
import { FooterBanner } from "../../widgets/footer/FooterBanner";
import { Overlay } from "@/widgets/overlay/overlay";
import { BagProvider } from "../context/BagContext";
import { BagSidebar } from "@/widgets/bag/BagSidebar";
import { MobileMenu } from "@/widgets/mobile-menu/MobileMenu";
import { MobileMenuProvider } from "../context/MobileMenuContext";
export default function MainLayouts({ children }: PropsWithChildren<unknown>) {
	return (
		<>
			<BagProvider>
				<MobileMenuProvider>
					<Overlay />
					<BagSidebar />
					<MobileMenu />
					<Header />
					{/* {children}
					<FooterBanner />
					<Footer /> */}
				</MobileMenuProvider>
			</BagProvider>
		</>
	);
}
