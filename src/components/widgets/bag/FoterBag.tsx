import { ButtonAction } from "@/components/ui";
import { PAGE } from "@/config/page.config";
import Link from "next/link";

interface Props {
	subtotal: number;
	total: number;
	checkout: () => void;
}

export function FoterBag({ subtotal, total, checkout }: Props) {
	return (
		<section className='flex flex-col'>
			<div className='flex flex-row justify-between border-b border-gray-200 py-3'>
				<p className='text-black font-inter text-14 sm:text-16 font-400 leading-160'>
					Subtotal
				</p>
				<p className='text-black font-inter text-14 sm:text-16 font-5600 leading-160'>
					{subtotal}
				</p>
			</div>
			<div className='flex flex-row justify-between py-3'>
				<p className='text-black text-16 sm:text-20 font-500 leading-140'>
					Total
				</p>
				<p className='text-black text-16 sm:text-20 font-500 leading-140'>
					{total}
				</p>
			</div>
			<div className='flex flex-col gap-4 pt-4 items-center'>
				<ButtonAction
					type='button'
					text='Checkout'
					paddingY={3}
					onClick={checkout}
				/>
				<div>
					<Link
						href={PAGE.CART.link}
						className='flex w-fit pt-2 border-b border-black'
					>
						<div className='py-1 pr-1 font-inter text-12 md:text-14 font-600 leading-160 text-black'>
							{PAGE.CART.label}
						</div>
					</Link>
				</div>
			</div>
		</section>
	);
}
