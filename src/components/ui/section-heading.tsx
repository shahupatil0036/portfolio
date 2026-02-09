"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionHeadingProps {
    title: string;
    className?: string;
}

export function SectionHeading({ title, className }: SectionHeadingProps) {
    return (
        <div className={cn("relative flex items-center justify-center overflow-hidden py-16 mb-8", className)}>
            {/* Background Ghost Text */}
            <span
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] md:text-[8rem] lg:text-[10rem] font-black uppercase text-gray-200/40 dark:text-white/[0.03] whitespace-nowrap pointer-events-none select-none tracking-tight"
                aria-hidden="true"
            >
                {title}
            </span>

            {/* Foreground Title */}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative z-10 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-wide"
            >
                {title}
            </motion.h2>
        </div>
    );
}
