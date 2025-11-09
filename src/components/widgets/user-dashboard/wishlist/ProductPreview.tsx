import { ButtonClose } from "@/components/ui";
import Image from "next/image";

interface Props{
    removeProduct: () => void;
    image: string;
    title: string;
    color: string;
}

export function ProductPreview({ removeProduct, title, image, color }: Props) {
	return (
		<section>
			<ButtonClose onClick={removeProduct} size={3} />
			<div className=''>
				<Image
					src={image}
					alt={image}
					width={0}
					height={0}
					sizes='100vw'
					style={{ width: "100%", height: "100%" }}
				/>
				<div className=''>
					<h6 className=''>{title}</h6>
					<p className=''>Color: {color}</p>
				</div>
			</div>
		</section>
	);
}