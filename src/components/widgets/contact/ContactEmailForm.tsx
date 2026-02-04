"use client";

import { ButtonAction, InputFullWidth } from "@/components/ui";
import { TextArea } from "@/components/ui/inputs/TextArea";
import { sendEmailMessage } from "@/services/requests/contact";
import { useState } from "react";
interface IData {
	name: string;
	email: string;
	message: string;
}
const initData: IData = {
	name: "",
	email: "",
	message: "",
};
export function ContactEmailForm() {
	const [data, setData] = useState<IData>(initData);
	const submit = async () => {
		await sendEmailMessage(data);
	};
	return (
		<form onSubmit={submit} className='flex flex-col w-full gap-6'>
			<InputFullWidth
				id='name'
				name='name'
				label='FULL NAME'
				type='text'
				placeholder='Your name'
				value={data?.name}
				isRequired={true}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					setData((val) => ({ ...val, name: e.target.value }))
				}
			/>
			<InputFullWidth
				id='email'
				name='email'
				label='EMAIL ADDRESS'
				type='email'
				placeholder='Your email'
				value={data.email}
				isRequired={true}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					setData((val) => ({ ...val, email: e.target.value }))
				}
			/>
			<TextArea
				id='message'
				name='message'
				label='MESSAGE'
				placeholder='Your message'
				value={data.message}
				isRequired={true}
				rows={10}
				onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
					setData((val) => ({ ...val, message: e.target.value }))
				}
			/>
			<ButtonAction
				type='submit'
				text='Send Message'
				onClick={() => {}}
				paddingY={2}
				paddingX={10}
				width='fit'
			/>
		</form>
	);
}
