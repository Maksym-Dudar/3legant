import { OfferTime } from "@/components/ui";

interface Props {
	diftime: Date;
}

export function CountdownTimer({ diftime }: Props) {
	return (
		<section className='flex flex-col py-6 gap-3 border-b border-gray'>
			<p className='font-inter font-400 text-14 md:text-16 leading-160 text-subtitel'>
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
