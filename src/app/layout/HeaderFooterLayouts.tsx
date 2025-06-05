import type { PropsWithChildren } from "react";
import Header from "../../widgets/header/Header";
import Footer from "../../widgets/footer/Footer";
import { FooterBanner } from "../../widgets/footer/FooterBanner";
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
