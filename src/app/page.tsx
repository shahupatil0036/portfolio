import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24 max-w-7xl mx-auto overflow-hidden">
            <Navbar />
            <Hero />
            <About />
            <Education />
            <Projects />
            <Contact />
            <Footer />
        </main>
    );
}
