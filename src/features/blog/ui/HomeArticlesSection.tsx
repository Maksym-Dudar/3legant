"use client";

import { ArticlesCard } from "@/components/cards";
import { ArrowLink, ErrorToast } from "@/components/ui";
import { PAGE } from "@/config/page.config";
import { Loading } from "@/components/widgets";
import { fetchArticlesCard } from "@/services/requests/articles";
import { useQuery } from "@tanstack/react-query";
import { useErrorToast } from "@/hooks/useErrorToast";

export default function HomeArticlesSection() {
	const { isLoading, error, data, isError } = useQuery({
		queryKey: ["articlesCard"],
		queryFn: fetchArticlesCard,
	});
	const { errorMessage, closeError } = useErrorToast(error, isError);

	if (isLoading) return <Loading />;

	return (
		<>
			{errorMessage && (
				<ErrorToast message={errorMessage} onClose={closeError} />
			)}
			{!errorMessage && (
				<section className='flex flex-col w-full py-20 gap-10'>
					<div className='flex justify-between w-full'>
						<h3 className='text-32 lg:text-36 xl:text-40 font-500 leading-110'>
							Articles
						</h3>
						<ArrowLink title='More Articles' link={PAGE.BLOG.link} />
					</div>
					<div className='grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-6'>
						{data?.map((item) => (
							<ArticlesCard key={item.title} {...item} />
						))}
					</div>
				</section>
			)}
		</>
	);
}
