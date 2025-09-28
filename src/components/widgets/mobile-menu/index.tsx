"use client";

import { Header } from "./Header";
import { Menu } from "./Menu";
import { SocialLink } from "./SocialLink";
import { MainButton } from "./MainButton";
import { StoreList } from "./StoreList";
import { useMobileMenuContext } from "@/provider";

export function MobileMenu() {
	const { isOpenMobileMenu } = useMobileMenuContext();
	
	return (
		isOpenMobileMenu && (
			<div className='flex'>
				<aside className='flex flex-col justify-between fixed h-full w-11/12 sm:w-8/12  z-50 bg-white py-6 sm:py-8 px-6'>
					<section className='flex flex-col gap-4'>
						<Header />
						<Menu />
					</section>
					<section className='flex flex-col gap-4'>
						<StoreList />
						<MainButton
							isAuthorized={/* todo */ true}
							authorized={{ text: "Account", onClick: () => {} }}
							noAuthorized={{ text: "Sing in", onClick: () => {} }}
						/>
						<SocialLink />
					</section>
				</aside>
			</div>
		)
	);
}
