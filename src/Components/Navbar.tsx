import { useEffect, useState } from "react";
import { LuDownload, LuMenu, LuX } from "react-icons/lu";

const links = [
  { label: "Início", id: "inicio" },
  { label: "Sobre", id: "sobre" },
  { label: "Projetos", id: "projetos" },
  { label: "Skills", id: "skills" },
  { label: "Currículo", id: "curriculo" },
  { label: "Contato", id: "contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("inicio");

  // Destaca o link da seção que está visível na tela
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-blue-500/10 bg-[#050b18]/80 backdrop-blur">
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6"
      >
        <a href="#inicio" className="flex items-center gap-3 text-white">
          <span className="text-2xl font-black italic text-blue-500">PA</span>
          <span className="font-semibold">
            Pedro <span className="text-blue-500">Augusto</span>
          </span>
        </a>

        {/* Links desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map(({ label, id }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? "page" : undefined}
                className={`border-b-2 pb-1 text-sm transition-colors ${
                  active === id
                    ? "border-blue-500 text-blue-400"
                    : "border-transparent text-slate-300 hover:text-white"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
                <a
          href="/curriculo-pedro-augusto.pdf/"
          download
          className="hidden items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500 md:flex"
        >
          <LuDownload aria-hidden /> Baixar Currículo
        </a>

        {/* Botão hambúrguer */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className="text-2xl text-white md:hidden"
        >
          {open ? <LuX /> : <LuMenu />}
        </button>
      </nav>

      {/* Menu mobile */}
      {open && (
        <ul className="flex flex-col gap-1 border-t border-blue-500/10 bg-[#050b18] px-6 py-4 md:hidden">
          {links.map(({ label, id }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="block py-2 text-slate-300 hover:text-white"
              >
                {label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="/curriculo-pedro-augusto.pdf"
              download
              className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white"
            >
              <LuDownload aria-hidden /> Baixar Currículo
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}