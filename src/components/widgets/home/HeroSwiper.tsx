"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { IMAGE } from "@/config/image.config";
import Image from "next/image";

export default function HeroSwiper() {


	return (
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
				{IMAGE.PATH_IMAGE_SLIDER.map((item) => (
					<SwiperSlide key={item.alt}>
						<Image
							src={item.src}
							alt={item.alt}
							width={0}
							height={0}
							sizes='100vw'
							style={{ width: "100%", height: "auto" }}
							priority
						/>
					</SwiperSlide>
				))}
					<>
						<button className='prev rotate-180 absolute top-40% translate-y-1/2 z-10 left-8 justify-center items-center rounded-full bg-white p-[10px] cursor-pointer'>
							<Image
								src={IMAGE.ARROW_BLACK.src}
								alt={IMAGE.ARROW_BLACK.alt}
								width={32}
								height={32}
								priority
							/>
						</button>
						<button className='next absolute top-40% translate-y-1/2 z-10 right-8 justify-center items-center rounded-full bg-white p-[10px] cursor-pointer'>
							<Image
								src={IMAGE.ARROW_BLACK.src}
								alt={IMAGE.ARROW_BLACK.alt}
								width={32}
								height={32}
								priority
							/>
						</button>
					</>
				
			</Swiper>
	);
}
