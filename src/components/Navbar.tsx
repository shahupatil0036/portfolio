"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { usePathname } from "next/navigation";
import { GlassButton } from "@/components/ui/glass-button";

export default function Navbar() {
    const [isDark, setIsDark] = useState(true);
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");
        const options = {
            root: null,
            rootMargin: "-50% 0px -50% 0px", // Activate when section is in middle of viewport
            threshold: 0,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, options);

        sections.forEach((section) => observer.observe(section));

        return () => sections.forEach((section) => observer.unobserve(section));
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.replace("#", "");
        const elem = document.getElementById(targetId);
        if (elem) {
            // Check if we can just use scrollIntoView, or if we need manual calculation due to sticky header
            // With scroll-padding-top in globals.css, scrollIntoView should work perfectly
            elem.scrollIntoView({ behavior: "smooth" });
        }
    };

    const toggleTheme = () => setIsDark(!isDark);

    const navLinks = [
        { name: "Home", href: "#home" },
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
            className="fixed top-0 inset-x-0 mx-auto mt-6 z-50 w-fit max-w-none"
        >
            <div className={`flex items-center justify-center gap-2 px-3 py-3 rounded-full transition-all duration-500 ${scrolled
                ? "bg-white/10 dark:bg-[#1E1E1E]/40 backdrop-blur-xl border-t border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
                : "bg-white/5 dark:bg-[#1E1E1E]/20 backdrop-blur-lg border border-white/10 shadow-lg"
                } border`}>

                {/* Desktop Links */}
                <ul className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.href.substring(1);
                        return (
                            <li key={link.name} className="flex items-center">
                                <Link href={link.href} onClick={(e) => scrollToSection(e, link.href)}>
                                    <GlassButton
                                        size="sm"
                                        className={`transition-colors duration-300 ${isActive ? "bg-white/20 dark:bg-white/10" : ""}`}
                                        contentClassName={isActive ? "font-bold" : "font-normal"}
                                    >
                                        {link.name}
                                    </GlassButton>
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
