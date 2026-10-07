import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="bg-[#050b18] text-white">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <section id="curriculo" className="flex h-screen items-center justify-center">Currículo</section>
        <section id="contato" className="flex h-screen items-center justify-center">Contato</section>
      </main>
    </>
  );
}