import { FaGithub } from "react-icons/fa";
import { LuExternalLink, LuFolder } from "react-icons/lu";
import { projects } from "../Data/Projects";

export default function Projects() {
  return (
    <section
      id="projetos"
      className="border-t border-blue-500/10 bg-[#050b18] px-6 py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-sm font-medium text-blue-500">
              Meus projetos
            </p>
            <h2 className="text-3xl font-bold text-white">
              Projetos em Destaque
            </h2>
            <p className="mt-3 max-w-xl text-slate-400">
              Alguns dos projetos que desenvolvi durante meus estudos e
              experiências práticas.
            </p>
          </div>
          <a
            href="https://github.com/PreduZzz"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-blue-500/60 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500/10"
          >
            Ver todos no GitHub
          </a>
        </div>

        <ul className="mt-10 grid gap-5 md:grid-cols-2">
          {projects.map(
            ({ id, title, description, tags, repoUrl, liveUrl }) => (
              <li
                key={id}
                className="flex flex-col rounded-xl border border-blue-500/20 bg-slate-900/50 p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-500/15 text-xl text-blue-400">
                    <LuFolder aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-semibold text-white">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-400">
                      {description}
                    </p>
                  </div>
                </div>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-200"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                {(repoUrl || liveUrl) && (
                  <div className="mt-6 flex gap-5 pt-1 text-sm">
                    {repoUrl && (
                      <a
                        href={repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-slate-300 transition hover:text-blue-400"
                      >
                        <FaGithub aria-hidden /> Código
                      </a>
                    )}
                    {liveUrl && (
                      <a
                        href={liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-slate-300 transition hover:text-blue-400"
                      >
                        <LuExternalLink aria-hidden /> Ver online
                      </a>
                    )}
                  </div>
                )}
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
}