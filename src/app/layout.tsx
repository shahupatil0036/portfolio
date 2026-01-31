import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
            <body className={`${inter.className} antialiased min-h-screen selection:bg-white selection:text-black`}>
                {children}
            </body>
        </html>
    );
}
