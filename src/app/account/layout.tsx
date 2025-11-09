"use client";
import {
	BagSidebar,
	Footer,
	Header,
	Loading,
	MobileMenu,
	Overlay,
} from "@/components/widgets";
import { AccountLayouts } from "@/components/widgets/user-dashboard";
import { PAGE } from "@/config/page.config";
import PadingXLayouts from "@/layout/PadingXLayouts";
import { BagProvider, MobileMenuProvider } from "@/provider";
import { getUserData } from "@/services/requests/user";
import { useUserStore } from "@/services/store/user/store";
import { useRouter } from "next/navigation";

import { useEffect, useState, type PropsWithChildren } from "react";

export default function layouts({ children }: PropsWithChildren<unknown>) {
	const { user, updateUser } = useUserStore();
	const [ loading, setloading ] = useState(true);
	const router = useRouter();
	useEffect(() => {
		const fetchUser = async () => {
			if (!user || !user.email) {
				router.push(PAGE.SIGN_IN.link);
			} else {
				setloading(false)
				const res = await getUserData(user.email);
				updateUser(res.data);
			}
		};
		fetchUser();
	}, []);
	if(loading) return <Loading />
	return (
		<>
			<BagProvider>
				<MobileMenuProvider>
					<Overlay />
					<BagSidebar />
					<MobileMenu />
					<Header />
					<PadingXLayouts>
						<AccountLayouts>{children}</AccountLayouts>
					</PadingXLayouts>
					<Footer />
				</MobileMenuProvider>
			</BagProvider>
		</>
	);
}
