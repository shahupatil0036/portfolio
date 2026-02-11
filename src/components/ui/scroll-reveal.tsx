"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    width?: "fit-content" | "100%";
}

export function ScrollReveal({ children, className, width = "fit-content" }: ScrollRevealProps) {
    const shouldReduceMotion = useReducedMotion();

    const variants = {
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        },
    };

    return (
        <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className={cn(className)}
            style={{ width }}
        >
            {children}
        </motion.div>
    );
}
