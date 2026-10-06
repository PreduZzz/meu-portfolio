import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="bg-[#050b18] text-white">
        <Hero />
        <About />
        <Skills />
        <section id="projetos" className="flex h-screen items-center justify-center">Projetos</section>
        <section id="curriculo" className="flex h-screen items-center justify-center">Currículo</section>
        <section id="contato" className="flex h-screen items-center justify-center">Contato</section>
      </main>
    </>
  );
}