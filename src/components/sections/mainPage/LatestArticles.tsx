import { PATH_TO_ARTICLES } from "@/constants/path";
import PadingXLayouts from "../../layouts/PadingXLayouts";
import { ButtonPage } from "../../ui/ButtonPage";
import { ArticlesCard } from "../../ui/cards/ArticlesCard";

export function LatestArticles() {
	return (
		<PadingXLayouts>
			<div className='flex flex-col w-full p-20 gap-10'>
				<div className='flex justify-between w-full'>
					<h3 className='text-40 font-500 leading-110'>Articles</h3>
					<ButtonPage title='More Products' href='/shop' />
				</div>
				<div className='flex gap-6'>
                    {PATH_TO_ARTICLES.map(({ title, href, path }) => (
                        <ArticlesCard key={title} title={title} href={href} path={path} />
                    ))}
                </div>
			</div>
		</PadingXLayouts>
	);
}
