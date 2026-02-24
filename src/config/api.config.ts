class ApiConfig {
	USER = "/user";
	USER_AVATAR = `${this.USER}/avatar`;
	USER_WISHLIST = `${this.USER}/wishlist`;
	USER_ORDERS = `${this.USER}/orders`;

	ADDRESS = "/address";
	ADDRESS_ALL = "/address/all";

	getAddressById(id: number) {
		return `${this.ADDRESS}?id=${id}`;
	}

	PRODUCT = "/product";
	PRODUCT_CARDS = `${this.PRODUCT}/cards`;
	PRODUCT_SEARCH = `${this.PRODUCT}/search`;
	PRODUCT_BAG = `${this.PRODUCT}/bag`;

	AUTH = "/auth";
	AUTH_SIGN_IN = `${this.AUTH}/sign-in`;
	AUTH_SIGN_UP = `${this.AUTH}/sign-up`;
	AUTH_RESET_PASSWORD_OTP = `${this.AUTH}/reset-password-otp`;
	AUTH_GENERATE_OTP = `${this.AUTH}/otp-code`;
	AUTH_LOG_OUT = `${this.AUTH}/log-out`;

	CONTACT = '/contact'
}

export const API = new ApiConfig();
