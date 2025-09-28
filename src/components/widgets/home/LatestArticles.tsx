import { ArticlesCard } from "@/components/cards";
import { ButtonPage } from "@/components/ui";
import { PAGE } from "@/config/page.config";
import PadingXLayouts from "@/layout/PadingXLayouts";
import { getArticlesCard } from "@/services/articles";
import { link } from "fs";

export default function LatestArticles() {
	return (
		<PadingXLayouts>
			<div className='flex flex-col w-full py-20 gap-10'>
				<div className='flex justify-between w-full'>
					<h3 className='text-32 lg:text-36 xl:text-40 font-500 leading-110'>
						Articles
					</h3>
					<ButtonPage title='More Articles' href={PAGE.BLOG.link} />
				</div>
				<div className='grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-6'>
					{getArticlesCard().map(({ title, href, link, alt }) => (
						<ArticlesCard key={title} title={title} href={href} link={link} alt={alt} />
					))}
				</div>
			</div>
		</PadingXLayouts>
	);
}
