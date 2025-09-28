import Link from "next/link";
import PadingXLayouts from "@/layout/PadingXLayouts";
import { Menu } from "./Menu";
import { SocialLink } from "./SocialLink";
import { CopyrightPolicy } from "./CopyrightPolicy";
import { PAGE } from "@/config/page.config";

export default function Footer() {
	return (
		<footer className='bg-black'>
			<PadingXLayouts>
				<div className='w-full flex flex-col pt-20 pb-8 gap-12'>
					<div className='flex flex-col md:flex-row gap-10 md:gap-0 justify-center md:justify-between items-center'>
						<section className='flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 items-center'>
							<Link key={PAGE.HOME.link} href={PAGE.HOME.link}>
								<h1 className='text-18 sm:text-20 md:text-22 lg:text-24 font-500 leading-100 text-white'>
									3legant
								</h1>
							</Link>
							<div className='h-[1px] w-6 md:rotate-90 bg-darkgray'></div>
							<p className='text-12 md:text-14 text-whitegray font-400 leading-160'>
								Gift & Decoration Store
							</p>
						</section>
						<Menu />
					</div>
					<div className='h-[1px] w-full bg-darkgray'></div>
					<div className='flex flex-col-reverse gap-8 md:gap-0 md:flex-row items-center md:justify-between'>
						<CopyrightPolicy />
						<SocialLink />
					</div>
				</div>
			</PadingXLayouts>
		</footer>
	);
}
