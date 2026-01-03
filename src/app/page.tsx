import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden">
      <Hero />
      <About />
      <Projects />
      <Footer />
    </main>
  );
}