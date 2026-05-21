import { useSelectedLayoutSegments } from "next/navigation";

const segmentLabels: Record<string, string> = {
	account: "account",
	address: "address",
	create: "create",
	edit: "edit",
	orders: "orders",
	wishlist: "wishlist",
	shop: "shop",
	checkout: "checkout",
	cart: "cart",
	details: "details",
	complete: "complete",
	"contact-us": "contact us",
};

export function useBreadcrumbs() {
	const segments = useSelectedLayoutSegments();

	return segments.map((segment, index) => ({
		label: segmentLabels[segment] ?? segment.toLowerCase(),
		src: "/" + segments.slice(0, index + 1).join("/"),
	}));
}
