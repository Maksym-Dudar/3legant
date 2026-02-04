export function fetchArticlesCard() {
	return Promise.resolve([
		{
			title: "7 ways to decor your home",
			link: "/blog",
			src: "/market/images/main_page/articles/img_1.png",
			alt: "article_1",
		},
		{
			title: "Kitchen organization",
			link: "/blog",
			src: "/market/images/main_page/articles/img_2.png",
			alt: "article_2",
		},
		{
			title: "Decor your bedroom",
			link: "/blog",
			src: "/market/images/main_page/articles/img_3.png",
			alt: "article_3",
		},
	]);
}
