"use client";

import { ErrorToast } from "@/components/ui";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useErrorToast } from "@/hooks/useErrorToast";
import { usePathname, useRouter } from "next/navigation";
import { IMAGE, NEXT_PUBLIC_BACKEND_URL, PAGE } from "@/config";
import { authService, userService } from "@/services/requests";
import { SideMenu } from "./SideMenu";
import { SidebarUser } from "./SidebarUser";
import { useState } from "react";
import { useSidebar } from "./useSidebar";

export function Sidebar() {
	const pathname = usePathname();
	const { data, errorMessage, userAvatar, logOut, handleFileChange, onCloseError } =
		useSidebar();
	return (
		<>
			{errorMessage && (
				<ErrorToast message={errorMessage} onClose={onCloseError} />
			)}
			<aside className='flex flex-col justify-center py-10 px-4 gap-10 w-full sm:w-44 md:w-60 h-fit bg-gray rounded-md mb-20'>
				<SidebarUser
					firstName={data?.firstName || ""}
					lastName={data?.lastName || ""}
					userAvatar={userAvatar}
					handleFileChange={handleFileChange}
				/>
				<SideMenu logOut={logOut} pathname={pathname} />
			</aside>
		</>
	);
}
