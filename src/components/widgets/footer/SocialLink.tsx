import { PAGE } from "@/config/page.config";
import Link from "next/link";
import Image from "next/image";
import { IMAGE } from "@/config/image.config";


export function SocialLink() {
	return (
		<div className='flex flex-row gap-6'>
			<Link href={PAGE.INSTAGRAM.link}>
				<Image
					src={IMAGE.INSTAGRAMWHITE.href}
					alt={IMAGE.INSTAGRAMWHITE.alt}
					width={24}
					height={24}
				/>
			</Link>
			<Link href={PAGE.FACEBOOK.link}>
				<Image
					src={IMAGE.FACEBOOKWHITE.href}
					alt={IMAGE.FACEBOOKWHITE.alt}
					width={24}
					height={24}
				/>
			</Link>
			<Link href={PAGE.YOUTUBE.link}>
				<Image
					src={IMAGE.YOUTUBEWHITE.href}
					alt={IMAGE.YOUTUBEWHITE.alt}
					width={24}
					height={24}
				/>
			</Link>
		</div>
	);
}
