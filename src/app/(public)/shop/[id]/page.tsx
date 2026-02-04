import { NewArrivals } from "@/components/widgets";
import { CommentProductSection, HeroProductSection } from "@/components/widgets/product";


export default function page() {
	return (
		<>
			<HeroProductSection />
			<CommentProductSection />
			<NewArrivals />
		</>
	);
}
