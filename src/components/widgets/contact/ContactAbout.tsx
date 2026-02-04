import { ArrowLink } from "@/components/ui";
import { IMAGE } from "@/config/image.config";
import { gitHubAccount } from "@/constants/contactData";
import Image from "next/image";

export function ContactAbout() {
	return (
		<div className='flex flex-col md:flex-row bg-gray'>
			<Image
				src={IMAGE.MYHPHOTO.src}
				alt={IMAGE.MYHPHOTO.alt}
				width={0}
				height={0}
				sizes='100vw'
				className='w-full md:w-1/2 object-cover'
			/>
			<div className='flex flex-col justify-center pl-8 sm:pl-10 md:pl-14 lg:pl-16 xl:pl-18 py-14 sm:py-16 md:py-18 gap-5 lg:gap-6 '>
				<div className='flex flex-col gap-5'>
					<h4 className='text-34 sm:text-36 lg:text-40 font-500 leading-110'>
						About Me
					</h4>
					<p className='text-black text-14 sm:text-16 font-inter font-400 leading-160 w-5/6'>
						I’m Maksym, a front-end developer who values clear communication,
						responsibility, and teamwork. I adapt quickly, learn fast, and
						strive to solve problems efficiently. I like to plan tasks so that
						results are understandable to everyone, durable, and optimized in
						terms of time and resources.
					</p>
				</div>
				<ArrowLink title='My GitHub' src={gitHubAccount} />
			</div>
		</div>
	);
}
