"use client";

import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";

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

export default function About() {
    return (
        <section id="about" className="py-20 w-full">
            <div className="bg-gray-50 dark:bg-[#1E1E1E] rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-white/5">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center space-y-8"
                >
                    <h2 className="text-2xl font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">About Me</h2>

                    <p className="text-xl md:text-2xl leading-relaxed font-light text-gray-800 dark:text-gray-200">
                        I am passionate about bridging the gap between people and technology through intuitive
                        <span className="font-semibold text-black dark:text-white"> Android development</span>.
                        With a focus on performance and user experience, I build apps that solve real-world problems.
                    </p>

                    <div className="pt-8">
                        <h3 className="text-sm font-semibold mb-6 text-gray-400 uppercase tracking-widest">Tech Stack</h3>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                            {techStack.map((tech, index) => (
                                <motion.div
                                    key={tech.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.1, rotate: 3 }}
                                    className="relative flex flex-col items-center gap-3 p-4 bg-white dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm"
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
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
