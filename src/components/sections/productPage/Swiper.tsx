"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";
import { PATH_TO_SLIDER } from "@/constants/path";
import Image from "next/image";
import PadingXLayouts from "@/components/layouts/PadingXLayouts";

export function Slider() {
	const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
	return (
		<PadingXLayouts>
			<div className='flex w-full flex-row'>
				<Swiper
					modules={[Navigation, Thumbs, Autoplay]}
					navigation={{
						prevEl: ".prev",
						nextEl: ".next",
					}}
					thumbs={{ swiper: thumbsSwiper }}
					autoplay={{ delay: 3000 }}
					className='w-full'
				>
					{PATH_TO_SLIDER.map((item) => (
						<SwiperSlide key={item.alt}>
							<Image
								src={item.href}
								alt={item.alt}
								width={600}
								height={600}
								className='w-full h-auto object-cover'
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
				<Swiper
					onSwiper={setThumbsSwiper}
					modules={[Thumbs]}
					slidesPerView={4}
					spaceBetween={10}
					watchSlidesProgress
					freeMode
					className='w-full'
				>
					{PATH_TO_SLIDER.map((item) => (
						<SwiperSlide key={item.alt}>
							<Image
								src={item.href}
								alt={item.alt}
								width={100}
								height={100}
								className='w-full h-[100px] object-cover cursor-pointer'
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</PadingXLayouts>
	);
}
