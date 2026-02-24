import { instance } from "../axios.interceptor";
import { API } from "@/config";

class EmailService {
	constructor() {}

	async sendMail(payload: ISendMailDto, signal?: AbortSignal) {
		return ((await instance.post(API.CONTACT, payload, { signal })).data);

	}
}

export const emailService = new EmailService();
