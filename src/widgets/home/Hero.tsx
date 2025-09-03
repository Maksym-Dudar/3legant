"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { PATH_TO_SLIDER } from "@/shared/constants/path";
import PadingXLayouts from "@/shared/layout/PadingXLayouts";
import { mobileSize } from "@/shared/constants/windowSize";
import { useWindowSize } from "@/shared/hooks/useWindowSize";

export default function Hero() {
		const { width } = useWindowSize();
	
		const showButtonInSwiper = width > mobileSize;
	return (
		<PadingXLayouts>
			<div className='w-full flex flex-col'>
				<Swiper
					modules={[Navigation, Pagination, Autoplay]}
					navigation={{
						prevEl: ".prev",
						nextEl: ".next",
					}}
					pagination={{ clickable: true }}
					autoplay={{ delay: 3000 }}
					loop={true}
					className='w-full'
				>
					{PATH_TO_SLIDER.map((item) => (
						<SwiperSlide key={item.alt}>
							<Image
								src={item.href}
								alt={item.alt}
								width={0}
								height={0}
								sizes='100vw'
								style={{ width: "100%", height: "auto" }}
							/>
						</SwiperSlide>
					))}
					{showButtonInSwiper && (
						<>
							<button className='prev rotate-180 absolute top-40% translate-y-1/2 z-10 left-8 rounded-full bg-white p-2.5 cursor-pointer'>
								<Image
									src='/images/main_page/slider/arrow.svg'
									alt='prev'
									width={32}
									height={32}
								/>
							</button>
							<button className='next absolute top-40% translate-y-1/2 z-10 right-8 rounded-full bg-white p-2.5 cursor-pointer'>
								<Image
									src='/images/main_page/slider/arrow.svg'
									alt='next'
									width={32}
									height={32}
								/>
							</button>
						</>
					)}
				</Swiper>
				<div className='flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 sm:gap-0 py-8 lg:pr-8'>
					<h2 className='text-40 lg:text-64 xl:text-72 font-500 leading-110'>
						Simply Unique
						<br />
						Simply Better
					</h2>
					<div className='text-descriptiongrey items-center justify-center font-inter w-4/5 sm:w-2/5 lg:w-2/5'>
						<strong className='text-black text-16 font-600 leading-160'>
							3legant
						</strong>{" "}
						is a gift & decorations store based in HCMC, Vietnam. Est since
						2019.
					</div>
				</div>
			</div>
		</PadingXLayouts>
	);
}
