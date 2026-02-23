"use client";

import { usePathname } from "next/navigation";
import BottomNav from "./BottomNav";
import InstallPrompt from "./InstallPrompt";

export default function NavigationManager({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isAdmin = pathname?.startsWith('/admin');

    return (
        <>
            {!isAdmin && <InstallPrompt />}
            {children}
            {!isAdmin && <BottomNav />}
        </>
    );
}
