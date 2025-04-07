"use client";

import { useParams } from "next/navigation";
import { cardPageType } from "../../../types/cardPage";
import { useEffect, useState } from "react";
import { PathPage } from "../../ui/PathPage";
import PadingXLayouts from "../../layouts/PadingXLayouts";
import { Slider } from "./Swiper";

export function HeroProductSection() {
    const [data, setData] = useState<cardPageType>();
    const params = useParams();
    const id = params.id;

    useEffect(() => {
        fetch(`/api/cardPage?id=${id}`)
        .then((req) => req.json())
        .then((data) => {
            setData(data);
            console.log(data);
        })
        .catch((error) => console.log(`Error fetching data:`, error));
    }, [id]);
    
    return( 
    <PadingXLayouts>
        <div className="flex gap-4 py-4">
            <PathPage name="Home" path="/" />
            <PathPage name="Shop" path="/shop" />
            <PathPage name={data?.category || "All"} path={`/shop?categorie=${data?.category}` || '/shop'} />
			<p className='font-inter '>
				{data?.name}
			</p>
        </div>
        <div className="">
            <section>

            </section>
        </div>
    </PadingXLayouts>
    );
}
