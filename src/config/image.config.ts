export interface IImage {
	src: string;
	alt: string;
}
class ImageConfig {
	ARROW: IImage = {
		src: "/ui/arrow/arrow_short.svg",
		alt: "arrow",
	};
	ARROW_BLACK: IImage = {
		src: "/ui/arrow/arrow_black.svg",
		alt: "arrow",
	};
	ARROW_WHITE: IImage = {
		src: "/ui/arrow/arrow_white.svg",
		alt: "arrow",
	};
	FACEBOOK_BLACK: IImage = {
		src: "/ui/social/facebook_black.svg",
		alt: "facebook",
	};
	FACEBOOK_WHITE: IImage = {
		src: "/ui/social/facebook_white.svg",
		alt: "facebook",
	};
	INSTAGRAM_BLACK: IImage = {
		src: "/ui/social/instagram_black.svg",
		alt: "instagram",
	};
	INSTAGRAM_WHITE: IImage = {
		src: "/ui/social/instagram_white.svg",
		alt: "instagram",
	};
	SEARCH: IImage = {
		src: "/ui/icon/search.svg",
		alt: "search",
	};
	SHOPPING_BAG: IImage = {
		src: "/ui/icon/shopping_bag.svg",
		alt: "bag",
	};
	USER_ICON: IImage = {
		src: "/ui/icon/user_icon.svg",
		alt: "user",
	};
	YOUTUBE_BLACK: IImage = {
		src: "/ui/social/youtube_black.svg",
		alt: "youtube",
	};
	YOUTUBE_WHITE: IImage = {
		src: "/ui/social/youtube_white.svg",
		alt: "youtube",
	};
	EMAIL: IImage = {
		src: "/ui/icon/email.svg",
		alt: "email",
	};
	LIKE_ACTIVE: IImage = {
		src: "/ui/reaction/like_active.svg",
		alt: "email",
	};
	LIKE_NOT_ACTIVE: IImage = {
		src: "/ui/reaction/like_not_active.svg",
		alt: "email",
	};
	STAR_ACTIVE: IImage = {
		src: "/ui/reaction/star_active.svg",
		alt: "email",
	};
	STAR_NOT_ACTIVE: IImage = {
		src: "/ui/reaction/star_not_active.svg",
		alt: "email",
	};
	DELIVERY: IImage = {
		src: "/market/images/main_page/advantages/fast_delivery.svg",
		alt: "delivery",
	};
	MONEY: IImage = {
		src: "/market/images/main_page/advantages/money.svg",
		alt: "money",
	};
	PROTECTION: IImage = {
		src: "/market/images/main_page/advantages/protection.svg",
		alt: "protection",
	};
	CAMERA: IImage = {
		src: "/ui/icon/camera.svg",
		alt: "Camera",
	};
	EDIT: IImage = {
		src: "/ui/icon/edit.svg",
		alt: "Edit",
	};
	RECTANGLE: IImage = {
		src: "/ui/icon/rectangle.svg",
		alt: "rectangle",
	};
	HOME: IImage = {
		src: "/ui/icon/home.svg",
		alt: "home",
	};
	CONTACT_MAIL: IImage = {
		src: "/ui/icon/contact_mail.svg",
		alt: "mail",
	};
	EYE_OPEN: IImage = {
		src: "/ui/reaction/eye_open.svg",
		alt: "Open eye",
	};
	EYE_CLOSE: IImage = {
		src: "/ui/reaction/eye_close.svg",
		alt: "Close eye",
	};
	CHECK_MARK: IImage = {
		src: "/ui/icon/check_mark.svg",
		alt: "check_mark",
	};

	MY_PHOTO: IImage = {
		src: "/contact/me.jpg",
		alt: "Me",
	};

	FOOTER_BANNER: IImage = {
		src: "/market/images/footer_banner/footer_banner.png",
		alt: "banner",
	};

	PATH_IMAGE_SLIDER: IImage[] = [
		{
			alt: "slide1",
			src: "/market/images/main_page/slider/slide_1.png",
		},
		{
			alt: "slide2",
			src: "/market/images/main_page/slider/slide_2.png",
		},
		{
			alt: "slide3",
			src: "/market/images/main_page/slider/slide_3.png",
		},
	];
	CATEGORY_BANNER: IImage[] = [
		{
			src: "/market/images/main_page/banner_grid/big_banner.png",
			alt: "Banner 1",
		},
		{
			src: "/market/images/main_page/banner_grid/small_banner_1.png",
			alt: "Banner 2",
		},
		{
			src: "/market/images/main_page/banner_grid/small_banner_2.png",
			alt: "Banner 3",
		},
	];

	DISCOUNT_BANNER: IImage = {
		src: "/market/images/main_page/discount_banner/banner.png",
		alt: "Banner",
	};

	SHOP_BANNER: IImage = {
		src: "/market/images/shop_page/hero_banner/hero_banner.png",
		alt: "Shop Banner",
	};

	AUTH_BANNER: IImage = {
		src: "/auth/banner.png",
		alt: "Auth Banner",
	};
}

export const IMAGE = new ImageConfig();
