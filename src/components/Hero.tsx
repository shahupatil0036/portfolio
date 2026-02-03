"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail, Download, Check, Linkedin, Github, Instagram } from "lucide-react";
import Image from "next/image";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export default function Hero() {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("shahupatil0036@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-2 pb-12">
            <div className="container px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
                    {/* Left Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col items-center lg:grid lg:grid-cols-[auto_1px_1fr] lg:gap-x-8 lg:gap-y-6 lg:items-start text-center lg:text-left order-2 lg:order-1"
                    >
                        {/* Row 1: Status Badge (Col 3) */}
                        <div className="lg:col-start-3 lg:row-start-1 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold border border-green-200 dark:border-green-800 mb-6 lg:mb-0 w-fit whitespace-nowrap">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            Available for Work
                        </div>

                        {/* Row 2: Social Icons (Col 1) - Desktop Only */}
                        <div className="hidden lg:flex flex-col gap-6 lg:col-start-1 lg:row-start-2 pt-2">
                            <a href="https://www.linkedin.com/in/shahu-patil-4b9300237/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black dark:hover:text-white transition-colors hover:scale-110 duration-300">
                                <Linkedin size={24} />
                            </a>
                            <a href="https://github.com/shahupatil0036" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black dark:hover:text-white transition-colors hover:scale-110 duration-300">
                                <Github size={24} />
                            </a>
                            <a href="https://www.instagram.com/shahu_patil.007/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black dark:hover:text-white transition-colors hover:scale-110 duration-300">
                                <Instagram size={24} />
                            </a>
                        </div>

                        {/* Row 2: Vertical Divider (Col 2) - Desktop Only */}
                        <div className="hidden lg:block w-px bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 dark:from-white/5 dark:via-white/10 dark:to-white/5 lg:col-start-2 lg:row-start-2 h-full rounded-full"></div>

                        {/* Row 2: Headlines (Col 3) */}
                        <div className="space-y-4 lg:col-start-3 lg:row-start-2">
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
                                I'm Shahu Patil
                            </h1>
                            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
                                Android Developer crafting seamless mobile experiences.
                            </p>
                        </div>

                        {/* Row 3: Actions (Col 3) */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-2 lg:mt-0 lg:col-start-3 lg:row-start-3 w-full lg:w-auto">
                            <button className="group relative flex items-center justify-center gap-2 bg-black dark:bg-white text-white dark:text-black px-6 py-2.5 rounded-full font-semibold hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-black/20 dark:shadow-white/10 whitespace-nowrap">
                                <GlowingEffect
                                    spread={40}
                                    glow={true}
                                    disabled={false}
                                    proximity={64}
                                    inactiveZone={0.01}
                                    borderWidth={2}
                                />
                                <span className="relative z-10 flex items-center gap-2">
                                    <Download size={18} />
                                    Download Resume
                                </span>
                            </button>
                            <button
                                onClick={handleCopy}
                                className="group relative flex items-center justify-center gap-2 bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white px-6 py-2.5 rounded-full font-semibold border border-gray-200 dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors whitespace-nowrap"
                            >
                                <GlowingEffect
                                    spread={40}
                                    glow={true}
                                    disabled={false}
                                    proximity={64}
                                    inactiveZone={0.01}
                                    borderWidth={2}
                                />
                                <span className="relative z-10 flex items-center gap-2">
                                    {copied ? <Check size={18} /> : <Mail size={18} />}
                                    {copied ? "Email Copied!" : "Copy Email"}
                                </span>
                            </button>
                        </div>

                        {/* Mobile Social Icons (Layout Fallback) */}
                        <div className="flex lg:hidden items-center gap-6 mt-6">
                            <a href="https://www.linkedin.com/in/shahu-patil-4b9300237/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black dark:hover:text-white transition-colors hover:scale-110 duration-300">
                                <Linkedin size={24} />
                            </a>
                            <a href="https://github.com/shahupatil0036" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black dark:hover:text-white transition-colors hover:scale-110 duration-300">
                                <Github size={24} />
                            </a>
                            <a href="https://www.instagram.com/shahu_patil.007/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black dark:hover:text-white transition-colors hover:scale-110 duration-300">
                                <Instagram size={24} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Column: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="flex justify-center lg:justify-end order-1 lg:order-2"
                    >
                        <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white dark:border-white/10 shadow-2xl group">
                            <Image
                                src="/images/CV.jpg"
                                alt="Shahu Patil"
                                fill
                                priority
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
