import { LINK_FOOTER, LINk_HOME, LINK_NAV_ITEMS } from "@/app/constants/links";
import PadingXLayouts from "../../app/layout/PadingXLayouts";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
	return (
		<footer className='bg-black'>
			<PadingXLayouts>
				<div className='w-full flex flex-col pt-20 pb-8 gap-12'>
					<div className='flex justify-between items-center'>
						<section className='flex gap-8 items-center'>
							<Link key={LINk_HOME.href} href={LINk_HOME.href} className=''>
								<h1 className='text-24 font-500 leading-100 text-white border-r-1 pr-8 border-footerline'>
									3legant
								</h1>
							</Link>
							<p className='text-fotergray text-14 font-400 leading-160'>
								Gift & Decoration Store
							</p>
						</section>
						<section className='flex gap-10'>
							{LINK_NAV_ITEMS.map((item) => (
								<Link
									key={item.href}
									href={item.href}
									className='text-14 font-400 leading-160 font-inter text-white'
								>
									{item.label}
								</Link>
							))}
						</section>
					</div>
					<div className='flex justify-between py-4 border-t-1 border-footerline'>
						<section className='flex gap-7 items-center'>
							<p className='text-fotergray text-12 font-400 leading-170'>
								Copyright © 2023 3legant. All rights reserved
							</p>
							{LINK_FOOTER.map((item) => (
								<Link
									key={item.href}
									href={item.href}
									className='text-12 font-600 leading-170 font-medium text-white'
								>
									{item.label}
								</Link>
							))}
						</section>
						<section className='flex gap-6'>
							<Image
								src='/images/footer_social_icon/instagram.svg'
								width={20}
								height={20}
								alt='instagram'
							/>
							<Image
								src='/images/footer_social_icon/facebook.svg'
								width={20}
								height={20}
								alt='facebook'
							/>
							<Image
								src='/images/footer_social_icon/youtube.svg'
								width={20}
								height={20}
								alt='youtube'
							/>
						</section>
					</div>
				</div>
			</PadingXLayouts>
		</footer>
	);
}
