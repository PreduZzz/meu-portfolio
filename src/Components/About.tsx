import { LuCake, LuGraduationCap, LuMapPin, LuTarget } from "react-icons/lu";
import foto from "../assets/foto-pedro.jpg";

// EDITE: seus dados reais
const info = [
  { label: "Idade", value: "25 Anos", Icon: LuCake },
  { label: "Formação", value: "Análise e Desenvolvimento de Sistemas", Icon: LuGraduationCap },
  { label: "Localização", value: "Curitiba - PR", Icon: LuMapPin },
  { label: "Objetivo", value: "Busco uma oportunidade de estágio na área de TI, onde eu possa aplicar meus conhecimentos, adquirir experiência prática e continuar evoluindo profissionalmente.", Icon: LuTarget },
];

// EDITE: conte sua história com suas palavras
const paragraphs = [
  "Sou estudante de Análise e Desenvolvimento de Sistemas, atualmente no 4º período e já perto de concluir a faculdade. Ao longo do curso fui me envolvendo cada vez mais com programação e desenvolvimento, principalmente criando projetos e aprendendo na prática.",
  "Hoje gosto de colocar em prática o que aprendo, desenvolver projetos e buscar melhorar cada vez mais minhas habilidades. Fora da programação, gosto bastante de jogos, RPG e criação de histórias, hobbies que também ajudam a desenvolver minha criatividade.",
];

export default function About() {
  return (
    <section
      id="sobre"
      className="border-t border-blue-500/10 bg-[#050b18] px-6 py-20"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-3">
        {/* Texto */}
        <div>
          <p className="mb-2 text-sm font-medium text-blue-500">Sobre mim</p>
          <h2 className="text-3xl font-bold text-white">Quem sou eu?</h2>
          <div className="mt-5 space-y-4 leading-relaxed text-slate-300">
            {paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>

        {/* Foto */}
        <div className="mx-auto w-full max-w-xs overflow-hidden rounded-2xl border border-blue-500/20">
          <img
            src={foto}
            alt="Pedro Augusto"
            className="aspect-4/5 w-full object-cover object-top grayscale"
          />
        </div>

        {/* Dados */}
        <ul className="space-y-6">
          {info.map(({ label, value, Icon }) => (
            <li key={label} className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-500/15 text-xl text-blue-400">
                <Icon aria-hidden />
              </span>
              <div>
                <p className="text-sm text-slate-400">{label}</p>
                <p className="font-medium text-white">{value}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}