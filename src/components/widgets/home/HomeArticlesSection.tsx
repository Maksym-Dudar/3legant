// "use client";

// import { useQuery } from "@tanstack/react-query";
// import { ArticlesCard } from "@/components/cards";
// import { ArrowLink, ErrorToast } from "@/components/ui";
// import { PAGE } from "@/config/page.config";
// import { fetchArticlesCard } from "@/services/requests/articles";
// import { Loading, Error } from "..";

// export default function HomeArticlesSection() {
// 	const { isLoading, error, data } = useQuery({
// 		queryKey: ["articlesCard"],
// 		queryFn: fetchArticlesCard,
// 	});

// 	if (isLoading) return <Loading />;

// 	return (
// 		<>
// 			{!!error ? (
// 				<ErrorToast message={error} onClose={closeError} />
// 			) : (
// 				<section className='flex flex-col w-full py-20 gap-10'>
// 					<div className='flex justify-between w-full'>
// 						<h3 className='text-32 lg:text-36 xl:text-40 font-500 leading-110'>
// 							Articles
// 						</h3>
// 						<ArrowLink title='More Articles' src={PAGE.BLOG.link} />
// 					</div>
// 					<div className='grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-6'>
// 						{data?.map(({ title, src, link, alt }) => (
// 							<ArticlesCard
// 								key={title}
// 								title={title}
// 								src={src}
// 								link={link}
// 								alt={alt}
// 							/>
// 						))}
// 					</div>
// 				</section>
// 			)}
// 		</>
// 	);
// }
