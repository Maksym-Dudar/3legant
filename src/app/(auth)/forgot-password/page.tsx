import { AsideBannerAuth, ForgotPasswordForm } from "@/components/widgets/auth";

export default function page() {
  return (
		<section className='flex overflow-hidden'>
			<AsideBannerAuth />
			<ForgotPasswordForm />
		</section>
	);
}