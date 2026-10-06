import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { LuArrowUpRight, LuMail } from "react-icons/lu";
import foto from "../assets/foto-pedro.jpg";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/pedro-augusto-pereira-3ba0b3356", Icon: FaLinkedin },
  { label: "GitHub", href: "https://github.com/PreduZzz", Icon: FaGithub },
  { label: "Instagram", href: "https://instagram.com/predu_augusto", Icon: FaInstagram },
  { label: "E-mail", href: "https://mail.google.com/mail/?view=cm&to=pedroaugustopereira2610@gmail.com", Icon: LuMail },
];

const values = ["Foco", "Disciplina", "Evolução", "Resultados"];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-140 items-center overflow-hidden bg-[#050b18] pt-16"
    >
      {/* Brilho azul no canto, como no layout */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-0 h-full w-96 bg-blue-600/30 blur-3xl"
      />

      {/* Foto à direita, esmaecendo para o fundo */}
      <img
        src={foto}
        alt="Retrato de Pedro Augusto"
        className="absolute inset-y-0 right-0 hidden h-full w-2/5 object-cover object-[center_25%] brightness-75 md:block mask-[linear-gradient(to_right,transparent,black_35%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-16">
        <div className="max-w-xl">
          <p className="mb-2 font-medium text-blue-500">Olá, eu sou 👋</p>
          <h1 className="text-5xl font-bold text-white md:text-6xl">
            Pedro <span className="text-blue-500">Augusto</span>
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-300">
            Estudante de ADS focado em desenvolvimento web com React e
            TypeScript, apaixonado por transformar ideias em projetos reais.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projetos"
              className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-500"
            >
              Ver projetos <LuArrowUpRight aria-hidden />
            </a>
            <a
              href="#contato"
              className="flex items-center gap-2 rounded-lg border border-blue-500/60 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-500/10"
            >
              Entrar em contato <LuMail aria-hidden />
            </a>
          </div>

          <ul className="mt-8 flex gap-5">
  {socials.map(({ label, href, Icon }) => (
    <li key={label}>
      <a
        href={href}
        {...(href.startsWith("http") && { target: "_blank", rel: "noreferrer" })}
        aria-label={label}
        className="text-2xl text-slate-300 transition hover:text-blue-400"
      >
        <Icon />
      </a>
    </li>
  ))}
</ul>
        </div>
      </div>

      {/* Lema lateral (só em telas grandes) */}
      <div className="absolute right-10 top-1/3 z-10 hidden lg:block">
        <div className="mb-4 h-0.5 w-8 bg-blue-500" />
        <ul className="space-y-2 text-sm uppercase tracking-[0.3em] text-slate-300">
          {values.map((v) => (
            <li key={v}>{v}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}