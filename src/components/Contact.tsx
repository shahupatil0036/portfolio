"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        if (form.current) {
            emailjs.sendForm('service_dail8e8', 'template_pjvje7g', form.current, {
                publicKey: 'TJisolB64rTb_wkNT',
            })
                .then(
                    () => {
                        setStatus("success");
                        form.current?.reset();
                        setTimeout(() => setStatus("idle"), 5000);
                    },
                    (error: unknown) => {
                        console.error('FAILED...', error);
                        setStatus("error");
                        setTimeout(() => setStatus("idle"), 5000);
                    },
                );
        }
    };

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
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Contact Me</h2>
                    <p className="text-gray-400 mb-10 text-lg">
                        Have a project in mind? Let's collaborate to create something amazing.
                    </p>

                    <form ref={form} onSubmit={sendEmail} className="space-y-4 text-left">
                        <input type="hidden" name="subject" value="New Message from Portfolio" />
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium ml-1 text-gray-400">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="user_name"
                                    required
                                    placeholder="Shahu Patil"
                                    className="w-full bg-white/10 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium ml-1 text-gray-400">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="user_email"
                                    required
                                    placeholder="shahu@example.com"
                                    className="w-full bg-white/10 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium ml-1 text-gray-400">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                placeholder="Drop a message — I’ll get back to you."
                                rows={4}
                                className="w-full bg-white/10 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={status === "sending"}
                            className="w-full bg-white text-black font-bold text-lg rounded-2xl py-4 hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {status === "sending" ? "Sending..." : "Send Message"}
                            <Send size={20} className={`group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ${status === "sending" ? "hidden" : ""}`} />
                        </button>

                        {status === "success" && (
                            <p className="text-green-400 text-sm mt-2">Message sent successfully!</p>
                        )}
                        {status === "error" && (
                            <p className="text-red-400 text-sm mt-2">Failed to send message. Please try again.</p>
                        )}
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
