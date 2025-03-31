import type { PropsWithChildren } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { FooterBanner } from "./FooterBanner";
export default function MainLayouts({ children }: PropsWithChildren<unknown>) {
	return (
		<>
			<Header />
			{children}
			<FooterBanner />
			<Footer />
		</>
	);
}
