"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface OverlayContextType {
	overlay: boolean;
	onOverlay: () => void;
	offOverlay: () => void;
}

const OverlayContext = createContext<OverlayContextType | undefined>(undefined);

export function OverlayProvider({ children }: { children: ReactNode }) {
	const [overlay, setOverlay] = useState(false);

	const onOverlay = () => setOverlay(true);
	const offOverlay = () => setOverlay(false);

	return (
		<OverlayContext.Provider value={{ overlay, onOverlay, offOverlay }}>
			{children}
		</OverlayContext.Provider>
	);
}

export function useOverlayContext() {
	const context = useContext(OverlayContext);
	if (!context) {
		throw new Error("useOverlayContext must be used within a OverlayProvider");
	}
	return context;
}
