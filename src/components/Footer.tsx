"use client";

import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full py-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-white/10 mt-auto">
            <div className="mb-4 md:mb-0">
                © {currentYear} Shahu Patil. All rights reserved.
            </div>

            <div className="flex items-center gap-6">
                <a href="https://www.linkedin.com/in/shahu-patil-4b9300237/" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors" aria-label="LinkedIn">
                    <Linkedin size={20} />
                </a>
                <a href="https://github.com/shahupatil0036" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors" aria-label="GitHub">
                    <Github size={20} />
                </a>
                <a href="#" className="hover:text-black dark:hover:text-white transition-colors" aria-label="Twitter">
                    <Twitter size={20} />
                </a>
                <a href="https://www.instagram.com/shahu_patil.007/" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors" aria-label="Instagram">
                    <Instagram size={20} />
                </a>
            </div>
        </footer>
    );
}
