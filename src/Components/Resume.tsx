import { LuDownload, LuEye, LuFileText } from "react-icons/lu";

const PDF_URL = "/curriculo-pedro-augusto.pdf";

export default function Resume() {
  return (
    <section
      id="curriculo"
      className="border-t border-blue-500/10 bg-[#050b18] px-6 py-20"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        {/* Texto e botões */}
        <div>
          <p className="mb-2 text-sm font-medium text-blue-500">Currículo</p>
          <h2 className="text-3xl font-bold text-white">Meu Currículo</h2>
          <p className="mt-3 max-w-md text-slate-400">
            Confira meu currículo completo com minhas experiências, formações e
            habilidades.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={PDF_URL}
              download
              className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-500"
            >
              <LuDownload aria-hidden /> Baixar currículo (PDF)
            </a>
            <a
              href={PDF_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg border border-blue-500/60 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-500/10"
            >
              <LuEye aria-hidden /> Ver no navegador
            </a>
          </div>
        </div>

        {/* Card do arquivo */}
        <a
          href={PDF_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Abrir currículo em PDF"
          className="mx-auto flex w-full max-w-xs flex-col items-center gap-4 rounded-2xl border border-blue-500/30 bg-slate-900/60 px-6 py-12 shadow-[0_0_40px_rgba(37,99,235,0.25)] transition hover:border-blue-400"
        >
          <LuFileText aria-hidden className="text-6xl text-blue-400" />
          <span className="font-semibold text-white">Currículo</span>
          <span className="text-xs text-slate-400">PDF</span>
        </a>
      </div>
    </section>
  );
}