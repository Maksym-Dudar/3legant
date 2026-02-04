import { ButtonCross } from "@/components/ui";
interface Props { 
	close: () => void;
}
export function CartHeader({close}: Props) {
	return (
		<section className='flex flex-row justify-between'>
			<h3 className='text-black text-20 sm:text-24 md:text-28 font-500 leading-120'>
				Cart
			</h3>
			<ButtonCross size={8} onClick={close} />
		</section>
	);
}
