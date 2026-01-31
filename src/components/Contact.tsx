"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-20 w-full mb-20">
            <div className="bg-black dark:bg-white/5 rounded-[2.5rem] p-8 md:p-16 text-white text-center overflow-hidden relative">
                {/* Decorative Gradients */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/20 to-purple-900/20 pointer-events-none"></div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative z-10 max-w-2xl mx-auto"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's Build Something</h2>
                    <p className="text-gray-400 mb-10 text-lg">
                        Have a project in mind? Let's collaborate to create something amazing.
                    </p>

                    <form className="space-y-4 text-left">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium ml-1 text-gray-400">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Shahu Patil"
                                    className="w-full bg-white/10 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium ml-1 text-gray-400">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="shahu@example.com"
                                    className="w-full bg-white/10 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium ml-1 text-gray-400">Message</label>
                            <textarea
                                id="message"
                                placeholder="Tell me about your project..."
                                rows={4}
                                className="w-full bg-white/10 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                            ></textarea>
                        </div>

                        <button type="submit" className="w-full bg-white text-black font-bold text-lg rounded-2xl py-4 hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 group">
                            Send Message
                            <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
