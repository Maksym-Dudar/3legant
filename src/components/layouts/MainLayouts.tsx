import type { PropsWithChildren } from "react";
import Header from "./Header";
import Footer from "./Footer";
export default function MainLayouts({ children }: PropsWithChildren<unknown>) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}
