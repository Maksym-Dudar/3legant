import { Button } from "@/components/ui";
import { PAGE } from "@/config";
import Link from "next/link";

interface Props {
	isLoading: boolean;
	subtotal: number;
	total: number;
	onCheckout: () => void;
}
export function CartFooter({ isLoading, subtotal, total, onCheckout }: Props) {
	const subtotalText = isLoading ? "Loading..." : subtotal;
	const totalText = isLoading ? "Loading..." : total;
	return (
		<section className='flex flex-col'>
			<div className='flex flex-row justify-between border-b border-gray-200 py-3'>
				<p className='text-black font-inter text-14 sm:text-16 font-400 leading-160'>
					Subtotal
				</p>
				<p className='text-black font-inter text-14 sm:text-16 font-500 leading-160'>
					{subtotalText}
				</p>
			</div>
			<div className='flex flex-row justify-between py-3'>
				<p className='text-black text-16 sm:text-20 font-500 leading-140'>
					Total
				</p>
				<p className='text-black text-16 sm:text-20 font-500 leading-140'>
					{totalText}
				</p>
			</div>
			<div className='flex flex-col gap-4 pt-4 items-center'>
				<Button
					type='button'
					text='Checkout'
					className='py-12'
					onClick={onCheckout}
					disabled={isLoading}
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
