interface IImage {
	href: string;
	alt: string;
}
class ImageConfig {
	ARRROW: IImage = {
		href: "/ui/arrow/arrow_short.svg",
		alt: "arrow",
	};
	ARROWBLACK: IImage = {
		href: "/ui/arrow/arrow_black.svg",
		alt: "arrow",
	};
	ARROWWHITE: IImage = {
		href: "/ui/arrow/arrow_white.svg",
		alt: "arrow",
	};
	FACEBOOKBLACK: IImage = {
		href: "/ui/social/facebook_black.svg",
		alt: "facebook",
	};
	FACEBOOKWHITE: IImage = {
		href: "/ui/social/facebook_white.svg",
		alt: "facebook",
	};
	INSTAGRAMBLACK: IImage = {
		href: "/ui/social/instagram_black.svg",
		alt: "instagram",
	};
	INSTAGRAMWHITE: IImage = {
		href: "/ui/social/instagram_white.svg",
		alt: "instagram",
	};
	SEARCH: IImage = {
		href: "/ui/icon/search.svg",
		alt: "search",
	};
	SHOPPINGBAG: IImage = {
		href: "/ui/icon/shopping_bag.svg",
		alt: "bag",
	};
	USERICON: IImage = {
		href: "/ui/icon/user_icon.svg",
		alt: "user",
	};
	YOUTUBEBLACK: IImage = {
		href: "/ui/social/youtube_black.svg",
		alt: "youtube",
	};
	YOUTUBEWHITE: IImage = {
		href: "/ui/social/youtube_white.svg",
		alt: "youtube",
	};
	EMAIL: IImage = {
		href: "/ui/icon/email.svg",
		alt: "email",
	};
	LIKE_ACTIVE: IImage = {
		href: "/ui/reaction/like_active.svg",
		alt: "email",
	};
	LIKE_NOT_ACTIVE: IImage = {
		href: "/ui/reaction/like_not_active.svg",
		alt: "email",
	};
	STAR_ACTIVE: IImage = {
		href: "/ui/reaction/star_active.svg",
		alt: "email",
	};
	STAR_NOT_ACTIVE: IImage = {
		href: "/ui/reaction/star_not_active.svg",
		alt: "email",
	};
	DELIVERY: IImage = {
		href: "/market/images/main_page/advantages/fast_delivery.svg",
		alt: "delivery",
	};
	MONEY: IImage = {
		href: "/market/images/main_page/advantages/money.svg",
		alt: "money",
	};
	PROTECTION: IImage = {
		href: "/market/images/main_page/advantages/protection.svg",
		alt: "protection",
	};
	RECTANGLE: IImage = {
		href: "/market/images/main_page/advantages/rectangle.svg",
		alt: "rectangle",
	};

	//image

	//footer
	FOOTER_BANNER: IImage = {
		href: "/market/images/footer_banner/footer_banner.png",
		alt: "banner",
	};

	// home
	PATH_IMAGE_SLIDER: IImage[] = [
		{
			alt: "slide1",
			href: "/market/images/main_page/slider/slide_1.png",
		},
		{
			alt: "slide2",
			href: "/market/images/main_page/slider/slide_2.png",
		},
		{
			alt: "slide3",
			href: "/market/images/main_page/slider/slide_3.png",
		},
	];

	BIG_BANNER: IImage = {
		href: "/market/images/main_page/banner_grid/big_banner.png",
		alt: "Banner 1",
	};

	SMALL_BANNER_1: IImage = {
		href: "/market/images/main_page/banner_grid/small_banner_1.png",
		alt: "Banner 2",
	};

	SMALL_BANNER_2: IImage = {
		href: "/market/images/main_page/banner_grid/small_banner_2.png",
		alt: "Banner 3",
	};

	DISCOUNT_BANNER: IImage = {
		href: "/market/images/main_page/discount_banner/banner.png",
		alt: "Banner",
	};

	//shop
	SHOPBANNER: IImage = {
		href: "/market/images/shop_page/hero_banner/hero_banner.png",
		alt: "Shop Banner",
	};
}

export const IMAGE = new ImageConfig();
