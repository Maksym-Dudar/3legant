import { AsideBannerAuth, SignInForm } from "@/components/widgets/auth";

export default function page() {
	return (
		<section className='flex overflow-hidden'>
			<AsideBannerAuth />
			<SignInForm />
		</section>
	);
}
