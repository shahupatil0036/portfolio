import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between px-4 pt-4 pb-8 md:px-24 max-w-7xl mx-auto overflow-hidden">
            <section id="home" className="w-full">
                <Hero />
            </section>

            <section id="about" className="w-full scroll-mt-20">
                <About />
            </section>

            <section id="education" className="w-full scroll-mt-20">
                <Education />
            </section>

            <section id="projects" className="w-full scroll-mt-20">
                <Projects />
            </section>

            <section id="contact" className="w-full scroll-mt-20">
                <Contact />
            </section>
        </main>
    );
}
