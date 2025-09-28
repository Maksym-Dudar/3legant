import { mobileSize } from "@/constants/windowSize";
import { useWindowSize } from "@/hooks";

export function showMobileAdaptive() {
	const { width } = useWindowSize();

	return width < mobileSize;
}