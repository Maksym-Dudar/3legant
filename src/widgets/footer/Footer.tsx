import { LINK_FOOTER, LINk_HOME, LINK_NAV_ITEMS } from "@/shared/constants/links";
import Link from "next/link";
import Image from "next/image";
import PadingXLayouts from "@/shared/layout/PadingXLayouts";

export default function Footer() {
	return (
		<footer className='bg-black'>
			<PadingXLayouts>
				<div className='w-full flex flex-col pt-20 pb-8 gap-12'>
					<div className='flex flex-col md:flex-row gap-10 md:gap-0 justify-center md:justify-between items-center'>
						<section className='flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 items-center'>
							<Link key={LINk_HOME.href} href={LINk_HOME.href} className=''>
								<h1 className='text-18 sm:text-20 md:text-22 lg:text-24 font-500 leading-100 text-white'>
									3legant
								</h1>
							</Link>
							<div className='h-[1px] w-6 md:rotate-90 bg-darkgray'></div>
							<p className='text-12 md:text-14 text-whitegray font-400 leading-160'>
								Gift & Decoration Store
							</p>
						</section>
						<section className='flex flex-col sm:flex-row justify-center items-center gap-8 lg:gap-10'>
							{LINK_NAV_ITEMS.map((item) => (
								<Link
									key={item.href}
									href={item.href}
									className='text-12 md:text-14 font-400 leading-160 font-inter text-white'
								>
									{item.label}
								</Link>
							))}
						</section>
					</div>
					<div className='h-[1px] w-full bg-darkgray'></div>
					<div className='flex flex-col-reverse gap-8 md:gap-0 md:flex-row items-center md:justify-between'>
						<section className='flex flex-col-reverse md:flex-row gap-7 items-center'>
							<p className='text-whitegray text-8 sm:text-10 md:text-12 font-400 leading-170'>
								Copyright © 2023 3legant. All rights reserved
							</p>
							<div className='flex flex-row gap-7'>
								{LINK_FOOTER.map((item) => (
									<Link
										key={item.href}
										href={item.href}
										className='text-10 md:text-12 font-600 leading-170 font-medium text-white'
									>
										{item.label}
									</Link>
								))}
							</div>
						</section>
						<section className='flex gap-6'>
							<Image
								src='/images/socialmessenger_icon/instagram.svg'
								width={20}
								height={20}
								alt='instagram'
							/>
							<Image
								src='/images/socialmessenger_icon/facebook.svg'
								width={20}
								height={20}
								alt='facebook'
							/>
							<Image
								src='/images/socialmessenger_icon/youtube.svg'
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
