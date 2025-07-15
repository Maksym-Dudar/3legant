"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { useOverlayContext } from "./OverlayContext";

interface MobileMenuContextType {
	isOpenMobileMenu: boolean;
	openMobileMenu: () => void;
	closeMobileMenu: () => void;
}

const MobileMenuContext = createContext<MobileMenuContextType | undefined>(
	undefined
);

export function MobileMenuProvider({ children }: { children: ReactNode }) {
	const { offOverlay, onOverlay } = useOverlayContext();
	const [isOpenMobileMenu, setisOpenMobileMenu] = useState(false);

	const openMobileMenu = () => {
		onOverlay();
		setisOpenMobileMenu(true);
	};
	const closeMobileMenu = () => {
		offOverlay();
		setisOpenMobileMenu(false);
	};

	return (
		<MobileMenuContext.Provider
			value={{ isOpenMobileMenu, openMobileMenu, closeMobileMenu }}
		>
			{children}
		</MobileMenuContext.Provider>
	);
}

export function useMobileMenuContext() {
	const context = useContext(MobileMenuContext);
	if (!context) {
		throw new Error(
			"useMobileMenuContext must be used within a MobileMenuProvider"
		);
	}
	return context;
}
