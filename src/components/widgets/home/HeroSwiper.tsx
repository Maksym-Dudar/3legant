"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import PadingXLayouts from "@/layout/PadingXLayouts";
import { mobileSize } from "@/constants/windowSize";
import { useWindowSize } from "@/hooks";
import { IMAGE } from "@/config/image.config";
import Image from "next/image";


export default function HeroSwiper() {
	const { width } = useWindowSize();
	const showButtonInSwiper = width > mobileSize;
	
	return (
		<PadingXLayouts>
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
							src={item.href}
							alt={item.alt}
							width={0}
							height={0}
							sizes='100vw'
							style={{ width: "100%", height: "auto" }}
							priority
						/>
					</SwiperSlide>
				))}
				{showButtonInSwiper && (
					<>
						<button className='prev rotate-180 absolute top-40% translate-y-1/2 z-10 left-8 justify-center items-center rounded-full bg-white p-[10px] cursor-pointer'>
							<Image
								src={IMAGE.ARROWBLACK.href}
								alt={IMAGE.ARROWBLACK.alt}
								width={32}
								height={32}
								priority
							/>
						</button>
						<button className='next absolute top-40% translate-y-1/2 z-10 right-8 justify-center items-center rounded-full bg-white p-[10px] cursor-pointer'>
							<Image
								src={IMAGE.ARROWBLACK.href}
								alt={IMAGE.ARROWBLACK.alt}
								width={32}
								height={32}
								priority
							/>
						</button>
					</>
				)}
			</Swiper>
		</PadingXLayouts>
	);
}
