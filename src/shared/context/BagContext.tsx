"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { useOverlayContext } from "./OverlayContext";

interface BagContextType {
	isOpenBag: boolean;
	openBag: () => void;
	closeBag: () => void;
}

const BagContext = createContext<BagContextType | undefined>(undefined);

export function BagProvider({ children }: { children: ReactNode }) {
	const { offOverlay, onOverlay } = useOverlayContext();
	const [isOpenBag, setisOpenBag] = useState(false);

	const openBag = () => {
		onOverlay();
		setisOpenBag(true);
	};
	const closeBag = () => {
		offOverlay();
		setisOpenBag(false);
	};

	return (
		<BagContext.Provider value={{ isOpenBag, openBag, closeBag }}>
			{children}
		</BagContext.Provider>
	);
}

export function useBagContext() {
	const context = useContext(BagContext);
	if (!context) {
		throw new Error("useBagContext must be used within a BagProvider");
	}
	return context;
}
