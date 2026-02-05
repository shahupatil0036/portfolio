"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isDark, setIsDark] = useState(true);
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();
    const pathname = usePathname();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 20);
    });

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDark]);

    const toggleTheme = () => setIsDark(!isDark);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Education", href: "/education" },
        { name: "Projects", href: "/projects" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <motion.nav
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 inset-x-0 mx-auto mt-6 z-50 w-fit max-w-none"
        >
            <div className={`flex items-center justify-center gap-2 pl-2 pr-2 py-2 rounded-full shadow-2xl transition-all duration-500 ${scrolled
                ? "bg-white/70 dark:bg-[#1E1E1E]/70 backdrop-blur-xl border-black/10 dark:border-white/10"
                : "bg-white/90 dark:bg-[#1E1E1E]/90 border-transparent shadow-xl" // Slightly more opaque when static for contrast
                } border`}>

                {/* Desktop Links */}
                <ul className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <li key={link.name} className="flex items-center">
                                <Link
                                    href={link.href}
                                    className={`
                    relative px-5 py-2.5 text-sm font-medium transition-all duration-300 rounded-full flex items-center justify-center
                    ${isActive
                                            ? "text-black dark:text-white bg-black/5 dark:bg-white/10 shadow-sm"
                                            : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"}
                  `}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                {/* Right Actions - Theme Toggle Only */}
                <div className="flex items-center">
                    <button
                        onClick={toggleTheme}
                        className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-gray-600 dark:text-gray-300 transition-colors flex items-center justify-center active:scale-95 duration-200"
                        aria-label="Toggle Theme"
                    >
                        {isDark ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    {/* Hire Me button removed */}
                </div>
            </div>
        </motion.nav>
    );
}
