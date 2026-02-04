import { Breadcrumbs } from "@/components/widgets/breadcrumbs/Breadcrumbs";
import { ContactAbout } from "@/components/widgets/contact/ContactAbout";
import { ContactEmailForm } from "@/components/widgets/contact/ContactEmailForm";
import { ContactHero } from "@/components/widgets/contact/ContactHero";
import { ContactInfo } from "@/components/widgets/contact/ContactInfo";

export default function ContactUs() {
	return (
		<>
			<Breadcrumbs />
			<ContactHero />
			<ContactAbout />
			<ContactInfo />
			<ContactEmailForm />

		</>
	);
}
