"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const projects = [
    {
        title: "Wiggles - Puppy Adoption App",
        description: "A modern Android application demonstrating Jetpack Compose UI with smooth navigation transitions.",
        icon: "🐶",
        tags: ["Kotlin", "Jetpack Compose", "Android"],
        className: "md:col-span-2",
    },
    {
        title: "QUIK - Messaging App",
        description: "Open source messaging app with scheduled sending, backup/restore, and speech-to-text features.",
        icon: "💬",
        tags: ["Kotlin", "Android SDK", "Open Source"],
        className: "md:col-span-1",
    },
    {
        title: "Project Three",
        description: "Real-time chat application with end-to-end encryption.",
        icon: "🔒",
        tags: ["Java", "WebSockets", "SQL"],
        className: "md:col-span-1",
    },
    {
        title: "Project Four",
        description: "E-commerce platform with AR product preview features.",
        icon: "🛍️",
        tags: ["Kotlin", "ARCore", "Stripe"],
        className: "md:col-span-2",
    },
];

import { SectionHeading } from "@/components/ui/section-heading";

export default function Projects() {
    return (
        <section id="projects" className="py-20 w-full">
            <ScrollReveal>
                <div className="flex flex-col items-center mb-12 relative">
                    <SectionHeading title="Selected Projects" className="mb-0" />
                    <button className="text-sm font-semibold underline decoration-2 underline-offset-4 hover:text-gray-600 dark:hover:text-gray-300 transition-colors absolute right-0 bottom-4 hidden md:block">
                        View All
                    </button>
                    {/* Mobile View All button positioned below heading */}
                    <button className="md:hidden text-sm font-semibold underline decoration-2 underline-offset-4 hover:text-gray-600 dark:hover:text-gray-300 transition-colors mt-[-1rem] z-20">
                        View All
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`group relative bg-[#1E1E1E] dark:bg-[#1E1E1E] bg-gray-100 rounded-3xl p-8 border border-transparent dark:border-white/5 hover:border-white/10 dark:hover:bg-[#252525] hover:bg-white transition-all duration-300 ${project.className}`}
                        >
                            <GlowingEffect
                                spread={40}
                                glow={true}
                                disabled={false}
                                proximity={64}
                                inactiveZone={0.01}
                                borderWidth={3}
                            />
                            <div className="relative z-10">
                                <div className="absolute top-0 right-0 text-gray-400 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
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
                            </div>

                            <a href="#" className="absolute inset-0 z-20" aria-label={`View ${project.title}`}></a>
                        </div>
                    ))}
                </div>
            </ScrollReveal>
        </section>
    );
}
