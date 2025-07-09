"use client"

import { useState, type PropsWithChildren } from "react";
import Header from "../../widgets/header/Header";
import Footer from "../../widgets/footer/Footer";
import { FooterBanner } from "../../widgets/footer/FooterBanner";
import { BagSidebar } from "@/widgets/bag/BagSidebar";
export default function MainLayouts({ children }: PropsWithChildren<unknown>) {
	const [toggleBag, setToggleBag] = useState(false)
	return (
		<>
			{toggleBag && <BagSidebar onToggleBag={setToggleBag} />}
			<Header onToggleBag={setToggleBag} />
			{children}
			<FooterBanner />
			<Footer />
		</>
	);
}
