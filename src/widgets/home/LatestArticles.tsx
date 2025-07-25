import { PATH_TO_ARTICLES } from "@/shared/constants/path";
import PadingXLayouts from "@/shared/layout/PadingXLayouts";
import { ArticlesCard } from "@/entities/articles/ArticlesCard";
import { ButtonPage } from "@/shared/ui";


export default function LatestArticles() {
	return (
		<PadingXLayouts>
			<div className='flex flex-col w-full py-20 gap-10'>
				<div className='flex justify-between w-full'>
					<h3 className='text-32 lg:text-36 xl:text-40 font-500 leading-110'>
						Articles
					</h3>
					<ButtonPage title='More Products' href='/shop' />
				</div>
				<div className='grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-6'>
					{PATH_TO_ARTICLES.map(({ title, href, path }) => (
						<ArticlesCard key={title} title={title} href={href} path={path} />
					))}
				</div>
			</div>
		</PadingXLayouts>
	);
}
