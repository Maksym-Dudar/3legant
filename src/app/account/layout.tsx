"use client";
import {
	Footer,
	Header,
	Loading,
	MobileMenu,
	Overlay,
} from "@/components/widgets";
import { PAGE } from "@/config/page.config";
import PadingXLayouts from "@/components/layout/PaddingXLayouts";
import { BagProvider, MobileMenuProvider } from "@/provider";
import { useUserStore } from "@/store/user/store";
import { useRouter } from "next/navigation";

import { useEffect, useState, type PropsWithChildren } from "react";

export default function AccountLayouts({ children }: PropsWithChildren<unknown>) {
	const { updateUser } = useUserStore();
	const [loading, setloading] = useState(true);
	const router = useRouter();
	useEffect(() => {
		const fetchUser = async () => {
			try {
				const res = await getUserData();
				setloading(false);
				updateUser(res.data);
			} catch (error) {
				router.push(PAGE.SIGN_IN.link);
			}
		};

		fetchUser();
	}, []);

	if (loading) return <Loading />;

	return (
		<>
			<BagProvider>
				<MobileMenuProvider>
					<Overlay />
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
