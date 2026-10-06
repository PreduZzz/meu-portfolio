import { LuCheck } from "react-icons/lu";
import { skills, otherTools } from "../Data/Skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-blue-500/10 bg-[#050b18] px-6 py-20"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-2 text-sm font-medium text-blue-500">Minhas skills</p>
        <h2 className="text-3xl font-bold text-white">
          Tecnologias e Ferramentas
        </h2>
        <p className="mt-3 max-w-xl text-slate-400">
          Aqui estão algumas das tecnologias e ferramentas que utilizo e estou
          sempre aprendendo.
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_260px]">
          {/* Grade de tecnologias */}
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {skills.map(({ name, Icon, color }) => (
              <li
                key={name}
                className="flex flex-col items-center gap-3 rounded-xl border border-blue-500/20 bg-slate-900/50 px-3 py-5"
              >
                <Icon aria-hidden className="text-4xl" style={{ color }} />
                <span className="text-center text-sm text-slate-200">
                  {name}
                </span>
              </li>
            ))}
          </ul>

          {/* Outras ferramentas */}
          <div className="lg:border-l lg:border-blue-500/10 lg:pl-8">
            <h3 className="mb-4 font-semibold text-white">
              <span className="text-blue-500">Outras</span> ferramentas
            </h3>
            <ul className="space-y-3">
              {otherTools.map((tool) => (
                <li
                  key={tool}
                  className="flex items-center gap-3 text-sm text-slate-300"
                >
                  <LuCheck aria-hidden className="text-blue-500" />
                  {tool}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-slate-400">
              Sempre buscando aprender e evoluir!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}