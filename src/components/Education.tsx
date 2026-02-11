"use client";

import { GraduationCap, School, Calendar, BookOpen } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface EducationItem {
    institution: string;
    degree: string;
    year: string;
    score: string;
    icon: React.ElementType;
}

const educationData: EducationItem[] = [
    {
        institution: "Trinity College of Engineering and Research, Pune, MH",
        degree: "Bachelor of Engineering (IT Engineering)",
        year: "Present",
        score: "Current CGPA: 8.85",
        icon: GraduationCap,
    },
    {
        institution: "SMK Arts and Science College, Deola, MH",
        degree: "Higher Secondary Certificate (HSC)",
        year: "2022",
        score: "Percentage: 83.33%",
        icon: School,
    },
    {
        institution: "SKD International School, Deola, MH",
        degree: "Secondary School Certificate (SSC)",
        year: "2020",
        score: "Percentage: 89.2%",
        icon: BookOpen,
    },
];

import { SectionHeading } from "@/components/ui/section-heading";

export default function Education() {
    return (
        <section id="education" className="py-20 w-full relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/[0.02] -z-[1]" />

            <ScrollReveal className="space-y-12 max-w-5xl mx-auto px-4">
                <SectionHeading title="Education" />

                <div className="relative border-l-2 border-gray-200 dark:border-white/10 ml-6 md:ml-12 space-y-12">
                    {educationData.map((edu, index) => (
                        <div
                            key={index}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Node */}
                            <div className="absolute -left-[25px] top-0 w-12 h-12 rounded-full bg-white dark:bg-[#0a0a0a] border-4 border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.5)] flex items-center justify-center z-10 group-hover:scale-110 transition-transform duration-300">
                                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                                    <edu.icon size={16} className="text-white" />
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 sm:items-start justify-between bg-white dark:bg-[#1E1E1E] p-6 rounded-2xl border border-gray-200 dark:border-white/5 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {edu.degree}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                                        {edu.institution}
                                    </p>
                                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mt-2 inline-block bg-gray-100 dark:bg-white/5 px-3 py-1 rounded-full border border-gray-200 dark:border-white/10">
                                        {edu.score}
                                    </p>
                                </div>

                                <div className="flex items-center gap-2 text-sm text-gray-400 whitespace-nowrap sm:mt-2 bg-gray-50 dark:bg-white/5 px-3 py-1 rounded-full w-fit sm:w-auto h-fit">
                                    <Calendar size={14} />
                                    <span>{edu.year}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </ScrollReveal>
        </section>
    );
}
