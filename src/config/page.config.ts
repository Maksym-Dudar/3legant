import type { Category } from "./product.config";

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
        label: 'Blog'
     };
    CONTACT_US: IPage = {
        link: "/contact-us",
        label: "Contact us"
    };
    ACCOUNT: IPage = {
        link: "/account",
        label: "Account"
    };
    PRIVACY_POLICY: IPage = {
        link: "/privacy-policy",
        label: "Privacy policy"
    };
    TERMS_OF_USE: IPage = {
        link: "/terms-of-use",
        label: "Terms of use"
    };
    CART: IPage = {
        link: "/cart",
        label: "Cart"
    }
    WISHLIST: IPage = {
        link: "/wishlist",
        label: "Wishlist"
    }
    
    FACEBOOK: ISocial = {
        link: "/facebook"
    }

    INSTAGRAM: ISocial = {
        link: "/instagram"
    }

    YOUTUBE: ISocial = {
        link: "/youtube"
    }

    SHOP_BY_CATEGORY(item: Category) {
        return `${PAGE.SHOP.link}?categorie=${item}`;
    }

}

export const PAGE = new PagesConfig()

export const MENU = [PAGE.HOME, PAGE.SHOP, PAGE.BLOG, PAGE.CONTACT_US];
export const TERMSPRIVACY = [PAGE.PRIVACY_POLICY, PAGE.TERMS_OF_USE];