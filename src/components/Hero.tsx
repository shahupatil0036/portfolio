"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail, Download } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return (
        <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center pt-24 pb-12">
            <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col items-center gap-6 max-w-2xl"
            >
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-white/10 shadow-2xl group">
                    <Image
                        src="/images/CV.jpg"
                        alt="Shahu Patil"
                        fill
                        priority
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                </div>


                {/* Status Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold border border-green-200 dark:border-green-800">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    Available for Work
                </div>

                {/* Headlines */}
                <div className="space-y-4">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
                        I'm Shahu Patil
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-lg mx-auto leading-relaxed">
                        Android Developer crafting seamless mobile experiences.
                    </p>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                    <button className="flex items-center justify-center gap-2 bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-black/20 dark:shadow-white/10">
                        <Download size={20} />
                        Download Resume
                    </button>
                    <button className="flex items-center justify-center gap-2 bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white px-8 py-3 rounded-full font-semibold border border-gray-200 dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors">
                        <Mail size={20} />
                        Copy Email
                    </button>
                </div>
            </motion.div>
        </section>
    );
}
