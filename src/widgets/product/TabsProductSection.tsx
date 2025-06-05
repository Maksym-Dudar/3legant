import { PropsWithChildren, useState } from "react";
import { AdditionalInfoProductSection } from "./AdditionalInfoProductSection";
import { CommentProductSection } from "./CommentProductSection";

export function TabsProductSection({
    images,
    title,
    subtitel,
}: PropsWithChildren<{ images: string; title: string; subtitel: string }>) {
    const [tab, setTab] = useState("Additional Info");
    const stile = "text-18 leading-170 font-inter font-500 ";
    let tabSection;
    switch (tab) {
        case "Additional Info":
            tabSection = <AdditionalInfoProductSection images={images} title={title} subtitel={subtitel} />;
            break;
        case "Reviews":
            tabSection = <CommentProductSection />;
            break;
        default:
            tabSection = "Erro";
            break;

    }
  return (
		<div className='flex flex-col gap-12'>
			<div className='flex flex-row gap-20 w-full justify-start border-b-1'>
				<button
					className={
						tab != "Additional Info" ? (stile + "text-descriptiongrey") : stile
					}
					onClick={() => setTab("Additional Info")}
				>
					Additional Info
				</button>
				<button
					className={
						tab != "Reviews" ? (stile + "text-descriptiongrey") : stile
					}
					onClick={() => setTab("Reviews")}
				>
					Reviews
				</button>
			</div>
			{tabSection}
		</div>
	);
}