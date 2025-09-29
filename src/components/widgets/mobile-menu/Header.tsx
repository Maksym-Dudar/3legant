import { ButtonClose } from "@/components/ui";
import { IMAGE } from "@/config/image.config";
import { useMobileMenuContext } from "@/provider";
import Image from "next/image";


export function Header() {
    const { closeMobileMenu } = useMobileMenuContext();

	return (
		<section>
			<div className='flex flex-row justify-between'>
				<h1 className='text-16 leading-150 font-500 sm:text-20'>3legant</h1>
				<ButtonClose size={6} onClick={closeMobileMenu} />
			</div>
			<label className='flex relative'>
				<input
					type='text'
					placeholder='Search'
					className='text-14 font-400 leading-160 font-inter pl-11 py-2 border-1 border-descriptiongrey rounded-lg w-full'
				/>
				<Image
					src={IMAGE.SEARCH.href}
					width={20}
					height={20}
					alt={IMAGE.SEARCH.alt}
					className='absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5'
				/>
			</label>
		</section>
	);
}
