"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Navbar() {
    const [isDark, setIsDark] = useState(true);
    const [activeSection, setActiveSection] = useState("hero");
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();

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

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        sections.forEach((section) => observer.observe(section));
        return () => sections.forEach((section) => observer.unobserve(section));
    }, []);

    const toggleTheme = () => setIsDark(!isDark);

    const navLinks = [
        { name: "Home", href: "#hero" },
        { name: "About", href: "#about" },
        { name: "Education", href: "#education" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <motion.nav
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mx-auto mt-6 z-50 w-fit max-w-none"
        >
            <div className="flex items-center justify-center gap-2 px-6 py-3 rounded-full shadow-2xl bg-white dark:bg-[#1E1E1E] border border-black/5 dark:border-white/10 transition-all duration-500">

                {/* Desktop Links */}
                <ul className="hidden md:flex items-center gap-2">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.href.substring(1);
                        return (
                            <li key={link.name} className="flex items-center">
                                <Link
                                    href={link.href}
                                    className={`
                    relative px-5 py-2.5 text-sm font-medium transition-all duration-300 rounded-full flex items-center justify-center
                    ${isActive
                                            ? "text-black dark:text-white bg-black/5 dark:bg-white/10"
                                            : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"}
                  `}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                {/* Right Actions */}
                <div className="flex items-center gap-2">
                    <button
                        onClick={toggleTheme}
                        className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-gray-600 dark:text-gray-300 transition-colors flex items-center justify-center"
                        aria-label="Toggle Theme"
                    >
                        {isDark ? <Sun size={18} /> : <Moon size={18} />}
                    </button>

                    <Link
                        href="#contact"
                        className="hidden sm:flex items-center justify-center bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full text-sm font-bold hover:scale-105 active:scale-95 transition-all shadow-lg shadow-black/20 dark:shadow-white/20"
                    >
                        Hire Me
                    </Link>
                </div>
            </div>
        </motion.nav>
    );
}
