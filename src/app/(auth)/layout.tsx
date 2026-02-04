import { AsideBannerAuth } from "@/components/forms/auth";
import type { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren<unknown>) {
    return (
			<article className='flex overflow-hidden'>
				<AsideBannerAuth />
				{children}
			</article>
		);
}
