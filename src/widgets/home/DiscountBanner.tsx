import { ButtonPage } from "@/shared";
import Image from "next/image";

export default function DiscountBanner() {
	return (
		<div className='flex flex-row bg-grey'>
			<Image
				src='/images/main_page/discount_banner/banner.png'
				alt='banner'
				width={0}
				height={0}
				sizes='100vw'
				style={{ width: "50%", height: "auto" }}
			/>
			<div className='flex flex-col justify-center pl-18 gap-6'>
				<div className='flex flex-col gap-4'>
					<p className='font-inter text-action size-4 w-full text-16 font-400 leading-160'>
						SALE UP TO 35% OFF
					</p>
					<h4 className='text-40 font-500 leading-110'>
						HUNDREDS of
						<br />
						New lower prices!
					</h4>
					<p className='font-inter text-descriptiongrey text-20 font-400 leading-160'>
						It’s more affordable than ever to give every
						<br /> room in your home a stylish makeover
					</p>
				</div>
				<ButtonPage title='Shop Now' href='/shop' />
			</div>
		</div>
	);
}
