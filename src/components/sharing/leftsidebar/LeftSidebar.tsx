"use client";

import { motion } from 'framer-motion';
import Logout from "./Logout";
import Lists from "./Lists";

interface LeftSidebarProps {
    username: string;
    name: string;
    imageUrl: string;
    totalUnreadNotifications: number;
}

const sidebarVariants = {
    hidden: { x: -300, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 30,
            damping: 20
        }
    }
};

const LeftSidebar = ({
    username,
    name,
    imageUrl,
    totalUnreadNotifications,
}: LeftSidebarProps) => {
    return (
        <motion.aside
            className="w-fit max-w-[280px] h-screen p-3 hidden sm:flex flex-col sticky top-0"
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
        >
            <section className="flex flex-col justify-between h-full space-y-20 overflow-y-auto">
                <Lists
                    totalUnreadNotifications={totalUnreadNotifications}
                    username={username}
                />
                <Logout 
                    imageUrl={imageUrl} 
                    name={name} 
                    username={username} 
                />
            </section>
        </motion.aside>
    );
};

export default LeftSidebar;