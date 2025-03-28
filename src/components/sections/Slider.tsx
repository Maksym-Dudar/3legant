"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PadingXLayouts from "../layouts/PadingXLayouts";
import Image from "next/image";
import { PATH_TO_SLIDER } from "@/constants/path";

export default function Slider() {
	return (
		<PadingXLayouts>
			<div className='w-full'>
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
							src='/images/slider/prev.svg'
							alt='prev'
							width={32}
							height={32}
						/>
					</div>
					<div className='next absolute top-40% translate-y-1/2 z-10 right-8 rounded-full bg-white p-2.5 cursor-pointer'>
						<Image
							src='/images/slider/next.svg'
							alt='next'
							width={32}
							height={32}
						/>
					</div>
				</Swiper>
			</div>
		</PadingXLayouts>
	);
}
