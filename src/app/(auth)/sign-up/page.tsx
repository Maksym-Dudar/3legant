import { AsideBannerAuth, SignUpForm } from "@/components/forms/auth";

export default function page() {
	return (
		<section className='flex overflow-hidden'>
			<AsideBannerAuth />
			<SignUpForm />
		</section>
	);
}
