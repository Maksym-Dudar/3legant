"use client";

import Image from "next/image";
import { SideMenuLinks } from "./SideMenuLinks";
import { useUserStore } from "@/services/store/user/store";
import { IMAGE } from "@/config/image.config";
import { PAGE } from "@/config/page.config";
import { useState } from "react";
import { ErrorToast } from "@/components/ui";
import { sendAvatar } from "@/services/requests/user";
import { logOutReq } from "@/services/requests/auth";
import { useRouter } from "next/navigation";
export function SideMenu() {
	const router = useRouter();
	const { user, clearUser } = useUserStore();
	const [errorToast, setErrorToast] = useState<string | null>(null);

	const firstName = user?.firstName || "";
	const lastName = user?.lastName || "";
	const userAvatar = user?.avatar
		? process.env.NEXT_PUBLIC_BACKEND_URL + user.avatar
		: null;

	async function logOut() {
		try {
			const res = await logOutReq();
			clearUser();
			router.push(PAGE.HOME.link);
		} catch (error) {
			setErrorToast(String(error));
		}
	}

	async function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
		try {
			const file = event.target.files?.[0];
			if (!file) {
				throw new Error("File not find");
			}
			await sendAvatar(file);
		} catch (error) {
			setErrorToast(String(error));
		}
	}
	return (
		<aside className='flex flex-col justify-center py-10 px-4 gap-10 w-full sm:w-44 md:w-60 h-fit bg-grey rounded-md mb-20'>
			{errorToast && (
				<ErrorToast message={errorToast} onClose={() => setErrorToast(null)} />
			)}
			<section className='flex flex-col gap-[6px] px-12 items-center'>
				<div className='flex relative'>
					<div className='m-3 w-20 h-20 rounded-full overflow-hidden'>
						<Image
							src={userAvatar ?? IMAGE.USERICON.href}
							alt={IMAGE.USERICON.alt}
							width={80}
							height={80}
							className='object-cover'
						/>
					</div>
					<div className='absolute bottom-4 right-4 border-2 border-grey flex w-7 h-7 rounded-full bg-black cursor-pointer items-center justify-center'>
						<Image
							src={IMAGE.CAMERA.href}
							alt={IMAGE.CAMERA.alt}
							width={16}
							height={15}
						/>
					</div>
					<input
						className='absolute inset-0 opacity-0 cursor-pointer rounded-full bottom-4'
						type='file'
						name='file'
						accept='image/png, image/jpeg'
						onChange={handleFileChange}
					/>
				</div>
				<h4 className='font-600 text-20 leading-160'>
					{firstName + " " + lastName}
				</h4>
			</section>
			<section className='flex flex-col items-start'>
				<SideMenuLinks text={PAGE.ACCOUNT.label} link={PAGE.ACCOUNT.link} />
				<hr className='mt-1 w-full bg-black h-[2px]' />
				<SideMenuLinks text={PAGE.ADDRESS.label} link={PAGE.ADDRESS.link} />
				<SideMenuLinks text={PAGE.ORDERS.label} link={PAGE.ORDERS.link} />
				<SideMenuLinks text={PAGE.WISHLIST.label} link={PAGE.WISHLIST.link} />
				<button
					className='pt-5 text-descriptiongrey font-inter font-500 text-14 md:text-16 leading-160 cursor-pointer'
					onClick={logOut}
				>
					Log Out
				</button>
			</section>
		</aside>
	);
}
