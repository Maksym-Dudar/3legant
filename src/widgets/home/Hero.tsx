"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { PATH_TO_SLIDER } from "@/shared/constants/path";
import PadingXLayouts from "@/shared/layout/PadingXLayouts";

export default function Hero() {
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
					<div className='prev absolute top-40% translate-y-1/2 z-10 left-8 rounded-full bg-white p-2.5 cursor-pointer'>
						<Image
							src='/images/main_page/slider/prev.svg'
							alt='prev'
							width={32}
							height={32}
						/>
					</div>
					<div className='next absolute top-40% translate-y-1/2 z-10 right-8 rounded-full bg-white p-2.5 cursor-pointer'>
						<Image
							src='/images/main_page/slider/next.svg'
							alt='next'
							width={32}
							height={32}
						/>
					</div>
				</Swiper>
				<div className='flex justify-between items-center gap-32 py-8 pr-8'>
					<h2 className='text-72 font-500 leading-110 max-w break-words'>
						Simply Unique
						<br />
						Simply Better
					</h2>
					<div className='text-descriptiongrey font-inter'>
						<span className='text-black text-16 font-600 leading-160'>
							3legant
						</span>{" "}
						is a gift & decorations store based in HCMC,
						<br />
						Vietnam. Est since 2019.
					</div>
				</div>
			</div>
		</PadingXLayouts>
	);
}
