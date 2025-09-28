import { IMAGE } from "@/config/image.config";
import { PAGE } from "@/config/page.config";
import Image from "next/image";
import Link from "next/link";

export function SocialLink() {
	return (
		<div className='flex flex-row gap-6'>
			<Link href={PAGE.INSTAGRAM.link}>
				<Image
					src={IMAGE.INSTAGRAMBLACK.href}
					alt={IMAGE.INSTAGRAMBLACK.alt}
					width={24}
					height={24}
				/>
			</Link>
			<Link href={PAGE.FACEBOOK.link}>
				<Image
					src={IMAGE.INSTAGRAMBLACK.href}
					alt={IMAGE.INSTAGRAMBLACK.alt}
					width={24}
					height={24}
				/>
			</Link>
			<Link href={PAGE.YOUTUBE.link}>
				<Image
					src={IMAGE.INSTAGRAMBLACK.href}
					alt={IMAGE.INSTAGRAMBLACK.alt}
					width={24}
					height={24}
				/>
			</Link>
		</div>
	);
}
