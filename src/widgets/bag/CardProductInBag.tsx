import { PropsWithChildren } from "react";
import Image from "next/image";

export function CardProductInBag({
	img,
	titel,
	color,
	price,
	count,
}: PropsWithChildren<{ img: string; titel: string; color: string; price: number; count: number }>) {
	return (
		<div>
			<section>
				<Image
					src={img}
					alt={img}
					width={0}
					height={0}
					sizes='100vw'
					style={{ width: "100%", height: "auto" }}
				/>
                <div className=''>
                    <h6>{titel}</h6>
                    <p>Color: {color}</p>
                </div>
			</section>
            <section>
                <p>{price}</p>
                <button></button>
            </section>
		</div>
	);
}
