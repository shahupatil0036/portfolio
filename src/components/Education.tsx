"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

const educationData = [
    {
        institution: "[Insert Placeholder for College Name]",
        degree: "B.E. in Computer Engineering",
        year: "Current",
        type: "College",
    },
    {
        institution: "[Insert Placeholder for College Name]",
        degree: "Higher Secondary Certificate (HSC)",
        year: "2023",
        type: "HSC",
    },
    {
        institution: "[Insert Placeholder for School Name]",
        degree: "Secondary School Certificate (SSC)",
        year: "2021",
        type: "SSC",
    },
];

export default function Education() {
    return (
        <section id="education" className="py-20 w-full">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="space-y-12"
            >
                <div className="flex items-center gap-4">
                    <div className="h-px bg-gray-200 dark:bg-white/10 flex-1"></div>
                    <h2 className="text-3xl font-bold text-center">Education</h2>
                    <div className="h-px bg-gray-200 dark:bg-white/10 flex-1"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-white dark:bg-[#1E1E1E] p-8 rounded-3xl border border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/20 transition-all duration-300 hover:shadow-xl"
                        >
                            <div className="flex flex-col h-full justify-between gap-4">
                                <div>
                                    <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                                        <GraduationCap size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{edu.degree}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 font-medium">{edu.institution}</p>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-400 sm:mt-4">
                                    <Calendar size={14} />
                                    <span>{edu.year}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
