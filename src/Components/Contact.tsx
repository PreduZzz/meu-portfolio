import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LuCheck, LuCopy, LuMail, LuMapPin } from "react-icons/lu";
import { contact, emailUrl } from "../Data/Contact";

const items = [
  { label: "E-mail", value: contact.email, Icon: LuMail },
  { label: "Localização", value: contact.location, Icon: LuMapPin },
  { label: "LinkedIn", value: "Pedro Augusto", href: contact.linkedin, Icon: FaLinkedin },
  { label: "GitHub", value: "PreduZzz", href: contact.github, Icon: FaGithub },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // sem permissão para copiar: o e-mail continua visível ao lado
    }
  }

  return (
    <section
      id="contato"
      className="border-t border-blue-500/10 bg-[#050b18] px-6 py-20"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        {/* Texto e botões */}
        <div>
          <p className="mb-2 text-sm font-medium text-blue-500">Contato</p>
          <h2 className="text-3xl font-bold text-white">Vamos conversar?</h2>
          <p className="mt-3 max-w-md text-slate-400">
            Se você tem uma oportunidade, projeto ou apenas quer trocar uma
            ideia, fique à vontade para me chamar.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={emailUrl}
              className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-500"
            >
              <LuMail aria-hidden /> Enviar e-mail
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="flex items-center gap-2 rounded-lg border border-blue-500/60 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-500/10"
            >
              {copied ? <LuCheck aria-hidden /> : <LuCopy aria-hidden />}
              <span aria-live="polite">
                {copied ? "E-mail copiado" : "Copiar e-mail"}
              </span>
            </button>
          </div>
        </div>

        {/* Lista de contatos */}
        <ul className="space-y-4">
          {items.map(({ label, value, href, Icon }) => (
            <li
              key={label}
              className="flex items-center gap-4 rounded-xl border border-blue-500/20 bg-slate-900/50 p-4"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-500/15 text-xl text-blue-400">
                <Icon aria-hidden />
              </span>
              <div className="min-w-0">
                <p className="text-sm text-slate-400">{label}</p>
                {href ? (
                  <a
                    href={href}
                    {...(href.startsWith("http") && {
                      target: "_blank",
                      rel: "noreferrer",
                    })}
                    className="font-medium text-white transition hover:text-blue-400"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="break-all font-medium text-white">{value}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}