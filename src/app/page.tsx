import Navbar from "@/components/Navbar";
import { Component as ShadowOverlay } from "@/components/ui/ethereal-shadow";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            <div className="fixed inset-0 -z-10 h-full w-full overflow-hidden">
                <ShadowOverlay
                    animation={{ scale: 100, speed: 90 }}
                    noise={{ opacity: 1, scale: 1.2 }}
                    sizing="fill"
                    className="absolute inset-0 -z-10"
                />
            </div>
            <Navbar />
            <main className="flex min-h-screen flex-col items-center justify-between px-4 pt-4 pb-8 md:px-24 max-w-7xl mx-auto overflow-hidden">
                <Hero />
                <About />
                <Education />
                <Projects />
                <Contact />
                <Footer />
            </main>
        </>
    );
}
