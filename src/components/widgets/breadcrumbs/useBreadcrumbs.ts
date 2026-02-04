import { useSelectedLayoutSegments } from "next/navigation";

export function useBreadcrumbs() {
	const segments = useSelectedLayoutSegments();

	return segments.map((segment, index) => ({
		label: segment.toLowerCase(),
		src: "/" + segments.slice(0, index + 1).join("/"),
	}));
}
