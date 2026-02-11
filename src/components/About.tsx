"use client";

import { GlowingEffect } from "@/components/ui/glowing-effect";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const techStack = [
    { name: "Android", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
    { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
    { name: "Jetpack Compose", icon: "https://developer.android.com/static/images/jetpack/compose-logo.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
];

import { SectionHeading } from "@/components/ui/section-heading";

export default function About() {
    return (
        <section id="about" className="py-20 w-full">
            <div className="bg-gray-50 dark:bg-[#1E1E1E] rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-white/5">
                <SectionHeading title="About Me" />
                <ScrollReveal className="max-w-3xl mx-auto text-center space-y-8 relative z-10">
                    <p className="text-xl md:text-2xl leading-relaxed font-light text-gray-800 dark:text-gray-200">
                        I am passionate about bridging the gap between people and technology through intuitive
                        <span className="font-semibold text-black dark:text-white"> Android development</span>.
                        With a focus on performance and user experience, I build apps that solve real-world problems.
                    </p>

                    <div className="pt-8">
                        <h3 className="text-sm font-semibold mb-6 text-gray-400 uppercase tracking-widest">Tech Stack</h3>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                            {techStack.map((tech, index) => (
                                <div
                                    key={tech.name}
                                    className="group relative flex flex-col items-center gap-3 p-4 bg-white dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm hover:scale-110 hover:-rotate-3 transition-transform duration-300"
                                >
                                    <GlowingEffect
                                        spread={40}
                                        glow={true}
                                        disabled={false}
                                        proximity={64}
                                        inactiveZone={0.01}
                                        borderWidth={3}
                                    />
                                    <div className="relative z-10 flex flex-col items-center gap-3">
                                        <div className="w-12 h-12 flex items-center justify-center p-2 rounded-xl bg-white dark:bg-white/10 shadow-sm border border-gray-100 dark:border-white/5 group-hover:scale-110 transition-transform duration-300">
                                            <img
                                                src={tech.icon}
                                                alt={tech.name}
                                                className="w-full h-full object-contain"
                                                loading="lazy"
                                            />
                                        </div>
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tech.name}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
