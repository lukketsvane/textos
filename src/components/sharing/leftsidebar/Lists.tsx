"use client";

import { Button } from "@/components/ui/button";
import { links } from "@/constants";
import { usePrevious } from "@/hooks/usePrevious";
import { useTweetModal } from "@/hooks/useTweetModal";
import { cn, getCurrentPath } from "@/lib/utils";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
    username: string;
    totalUnreadNotifications: number;
}

const Lists = ({ username, totalUnreadNotifications }: Props) => {
    const pathname = usePathname();
    const { addToNavigationHistory } = usePrevious();
    const openTweetModal = useTweetModal((state) => state.onOpen);

    return (
        <ul className="flex flex-col space-y-3">
            {links.map((link) => {
                const isLogo = link.title === "X Logo";
                const isSamePath = !isLogo && link.href === pathname;
                const size = isLogo ? 50 : 22; // Size adjustment as per your design

                return (
                    <li key={link.title} className={cn("w-fit rounded-full overflow-hidden", isSamePath && "font-extrabold")}>
                        <Link href={link.href} onClick={() => {
                            if (link.href === "/notifications" || link.href === `/${username}`) {
                                addToNavigationHistory(getCurrentPath());
                            }
                        }} className={cn("flex flex-row items-center space-x-5 tracking-wider text-xl max-xl:p-3 hover:bg-black-200 transition", isLogo ? "xl:p-4" : "xl:py-3.5 xl:px-2")}>
                            <div className={`relative ${!isLogo && 'pl-3'}`}>
                                <Image src={isSamePath ? link.activeIcon : link.icon} alt={link.title} width={size} height={size} className="object-contain" />
                                {link.href === "/notifications" && totalUnreadNotifications > 0 && (
                                    <span className="w-3 h-3 bg-blue-500 text-white rounded-full absolute top-0 right-0 text-xs flex items-center justify-center">
                                        {totalUnreadNotifications}
                                    </span>
                                )}
                            </div>
                            {!isLogo && <span className="max-xl:hidden xl:inline">{link.title}</span>}
                        </Link>
                    </li>
                );
            })}
            <li>
                <div className="mt-4 w-11/12 flex justify-center">
                    <Button variant="primary" className="flex items-center justify-center space-x-2 max-xl:w-fit xl:w-full p-3" onClick={openTweetModal}>
                        <Plus size={22} /> {/* Ensure this size matches other icons */}
                        <span className="max-xl:hidden xl:inline">Post</span>
                    </Button>
                </div>
            </li>
        </ul>
    );
};

export default Lists;
