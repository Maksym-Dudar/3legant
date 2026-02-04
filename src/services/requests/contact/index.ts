import axios from "axios";

export async function sendEmailMessage(payload: {
	name: string;
	email: string;
	message: string;
}) {
	const res = await axios.post(
		`https://localhost:4200/contact`,
		payload,
		{
			headers: {
				"Content-Type": "application/json",
			},
			withCredentials: true,
		}
	);
	return res.data;
}
