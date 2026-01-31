"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        title: "Project One",
        description: "A seamless mobile banking experience built with Kotlin and Jetpack Compose.",
        icon: "🏦", // Placeholder for app icon
        tags: ["Kotlin", "Jetpack Compose", "Room"],
    },
    {
        title: "Project Two",
        description: "Cross-platform fitness tracker using Flutter and Firebase backend.",
        icon: "💪",
        tags: ["Flutter", "Firebase", "Dart"],
    },
    {
        title: "Project Three",
        description: "Real-time chat application with end-to-end encryption.",
        icon: "💬",
        tags: ["Java", "WebSockets", "SQL"],
    },
    {
        title: "Project Four",
        description: "E-commerce platform with AR product preview features.",
        icon: "🛍️",
        tags: ["Kotlin", "ARCore", "Stripe"],
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 w-full">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-3xl font-bold">Selected Projects</h2>
                    <button className="text-sm font-semibold underline decoration-2 underline-offset-4 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                        View All
                    </button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-[#1E1E1E] dark:bg-[#1E1E1E] bg-gray-100 rounded-3xl p-8 border border-transparent dark:border-white/5 hover:border-white/10 dark:hover:bg-[#252525] hover:bg-white transition-all duration-300"
                        >
                            <div className="absolute top-8 right-8 text-gray-400 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                                <ArrowUpRight size={24} />
                            </div>

                            <div className="w-16 h-16 rounded-2xl bg-white/5 dark:bg-white/5 bg-gray-200 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                {project.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-500 transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-white/50 dark:bg-white/5 text-gray-600 dark:text-gray-300 border border-transparent dark:border-white/5">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <a href="#" className="absolute inset-0 z-10" aria-label={`View ${project.title}`}></a>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
