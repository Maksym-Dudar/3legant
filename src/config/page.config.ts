import type { CategoryFilter } from "./product.config";

interface IPage {
    link: string;
    label: string;
}

interface ISocial{
    link: string
}


class PagesConfig {
	HOME: IPage = {
		link: "/",
		label: "Home",
	};
	SHOP: IPage = {
		link: "/shop",
		label: "Shop",
	};
	BLOG: IPage = {
		link: "/blog",
		label: "Blog",
	};
	CONTACT_US: IPage = {
		link: "/contact-us",
		label: "Contact us",
	};
	ACCOUNT: IPage = {
		link: "/account",
		label: "Account",
	};
	ADDRESS: IPage = {
		link: `${this.ACCOUNT.link}/address`,
		label: "Address",
	};
	ADDRESCREATE: IPage = {
		link: `${this.ADDRESS.link}/create`,
		label: "Create",
	};
	ORDERS: IPage = {
		link: `${this.ACCOUNT.link}/orders`,
		label: "Orders",
	};
	WISHLIST: IPage = {
		link: `${this.ACCOUNT.link}/wishlist`,
		label: "Wishlist",
	};

	PRIVACY_POLICY: IPage = {
		link: "/privacy-policy",
		label: "Privacy policy",
	};
	TERMS_OF_USE: IPage = {
		link: "/terms-of-use",
		label: "Terms of use",
	};
	CART: IPage = {
		link: "/cart",
		label: "Cart",
	};
	FORGOT_PASSWORD: IPage = {
		link: "/forgot-password",
		label: "Forgot password",
	};
	SIGN_IN: IPage = {
		link: "/sign-in",
		label: "Sign In",
	};
	SIGN_UP: IPage = {
		link: "/sign-up",
		label: "Sing Up",
	};
	FACEBOOK: ISocial = {
		link: "/facebook",
	};

	INSTAGRAM: ISocial = {
		link: "/instagram",
	};

	YOUTUBE: ISocial = {
		link: "/youtube",
	};

	SHOP_BY_CATEGORY(item: CategoryFilter) {
		return `${this.SHOP.link}?categorie=${item}`;
	}
	PRODUCT(item: number) {
		return `${this.SHOP.link}/${item}`;
	}

	// Admin
	ADMIN_DASHBOARD: IPage = {
		link: "/admin-panel",
		label: "Dashboard",
	};
	CREATE_PRODUCT: IPage = {
		link: `${this.ADMIN_DASHBOARD.link}/create-product`,
		label: "Product",
	};
	ADMIN_ORDERS: IPage = {
		link: `${this.ADMIN_DASHBOARD.link}/orders`,
		label: "Orders",
	};
}

export const PAGE = new PagesConfig()

export const MENU = [PAGE.HOME, PAGE.SHOP, PAGE.BLOG, PAGE.CONTACT_US];
export const TERMSPRIVACY = [PAGE.PRIVACY_POLICY, PAGE.TERMS_OF_USE];