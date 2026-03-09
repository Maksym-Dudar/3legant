"use client";

import { OfferTime } from "@/components/ui";
import { useTimer } from "@/hooks";

interface Props {
	offerExpires?: Date;
	sale?: boolean;
}

export function CountdownTimer({ offerExpires, sale }: Props) {
	const time = useTimer();
	if (!offerExpires || !sale) return;
	let diftime = new Date(offerExpires.getTime() - time.getTime());
	return (
		<section className='flex flex-col py-6 gap-3 border-b border-grey'>
			<p className='font-inter font-400 text-14 md:text-16 leading-160 text-subtitle'>
				Offer expires in:
			</p>
			{diftime && (
				<div className='flex gap-4'>
					<OfferTime time={diftime.getDate()} title='Days' />
					<OfferTime time={diftime.getHours()} title='Hours' />
					<OfferTime time={diftime.getMinutes()} title='Minutes' />
					<OfferTime time={diftime.getSeconds()} title='Seconds' />
				</div>
			)}
		</section>
	);
}
