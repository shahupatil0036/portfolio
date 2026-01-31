"use client";

import { motion } from "framer-motion";

const techStack = [
    { name: "Android", icon: "🤖" },
    { name: "Kotlin", icon: "🧩" },
    { name: "Java", icon: "☕" },
    { name: "Flutter", icon: "🐦" },
    { name: "Firebase", icon: "🔥" },
    { name: "Git", icon: "📦" },
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
                        <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
                            {techStack.map((tech, index) => (
                                <motion.div
                                    key={tech.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.1, rotate: 3 }}
                                    className="flex flex-col items-center gap-3 p-4 bg-white dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm"
                                >
                                    <span className="text-3xl filter grayscale hover:grayscale-0 transition-all duration-300">{tech.icon}</span>
                                    <span className="text-sm font-medium">{tech.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
