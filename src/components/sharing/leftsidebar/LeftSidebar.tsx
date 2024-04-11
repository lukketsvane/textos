"use client";

import Logout from "./Logout";
import Lists from "./Lists";

interface LeftSidebarProps {
    username: string;
    name: string;
    imageUrl: string;
    totalUnreadNotifications: number;
}

const LeftSidebar = ({
    username,
    name,
    imageUrl,
    totalUnreadNotifications,
}: LeftSidebarProps) => {
    // Original icon size assumed to be 24x24 pixels, 30% reduction -> 16.8x16.8 (round to nearest whole number)
    const iconSize = 17; // This could be adjusted based on actual size in Lists and Logout components

    return (
        <aside className="w-fit max-w-[280px] h-screen p-3 hidden sm:flex flex-col sticky top-0">
            <section className="flex flex-col justify-between h-full space-y-20 overflow-y-auto">
                <Lists
                    totalUnreadNotifications={totalUnreadNotifications}
                    username={username}
                    iconSize={iconSize} // Passing the resized icon size down to Lists component
                />
                <Logout
                    imageUrl={imageUrl}
                    name={name}
                    username={username}
                    iconSize={iconSize} // Passing the resized icon size down to Logout component
                />
            </section>
        </aside>
    );
};

export default LeftSidebar;