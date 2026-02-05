import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Component as ShadowOverlay } from "@/components/ui/ethereal-shadow";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Shahu Patil | Android Developer",
    description: "Android Developer crafting seamless mobile experiences.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body className={`${inter.className} antialiased min-h-screen selection:bg-white selection:text-black flex flex-col`}>
                <div className="fixed inset-0 -z-10 h-full w-full overflow-hidden">
                    <ShadowOverlay
                        animation={{ scale: 100, speed: 90 }}
                        noise={{ opacity: 1, scale: 1.2 }}
                        sizing="fill"
                        className="absolute inset-0 -z-10"
                    />
                </div>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
