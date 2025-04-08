"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, Navigation, Thumbs } from "swiper/modules";
import { PropsWithChildren, useState } from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export function SwiperSectionProduct({
	images,
}: PropsWithChildren<{ images: string[] }>) {
	const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
	return (
		<div className='w-1/2 flex flex-col'>
			<Swiper
				modules={[Navigation, Thumbs, Autoplay]}
				navigation={{
					prevEl: ".prev",
					nextEl: ".next",
				}}
				thumbs={{ swiper: thumbsSwiper }}
				loop={true}
				autoplay={{ delay: 3000 }}
				className='w-full'
			>
				{images.map((item) => (
					<SwiperSlide key={item}>
						<Image
							src={item}
							alt={item}
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
			<Swiper
				onSwiper={setThumbsSwiper}
				modules={[Thumbs]}
				watchSlidesProgress
				freeMode
				slidesPerView={3}
				spaceBetween={24}
				className='w-full'
			>
				{images.map((item) => (
					<SwiperSlide key={item}>
						<Image
							src={item}
							alt={item}
							width={0}
							height={0}
							sizes='100vw'
							style={{ width: "100%", height: "auto" }}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
