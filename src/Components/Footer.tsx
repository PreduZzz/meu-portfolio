import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { LuArrowUp, LuMail } from "react-icons/lu";
import { contact, gmailUrl } from "../Data/Contact";

const socials = [
  { label: "LinkedIn", href: contact.linkedin, Icon: FaLinkedin },
  { label: "GitHub", href: contact.github, Icon: FaGithub },
  { label: "Instagram", href: contact.instagram, Icon: FaInstagram },
  { label: "E-mail", href: gmailUrl, Icon: LuMail },
];

export default function Footer() {
  return (
    <footer className="border-t border-blue-500/10 bg-[#050b18] px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6">
        <div className="flex items-center gap-3 text-white">
          <span className="text-2xl font-black italic text-blue-500">PA</span>
          <span className="font-semibold">
            Pedro <span className="text-blue-500">Augusto</span>
          </span>
        </div>

        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} Pedro Augusto. Todos os direitos
          reservados.
        </p>

        <div className="flex items-center gap-5">
          <ul className="flex gap-5">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="text-xl text-slate-300 transition hover:text-blue-400"
                >
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#inicio"
            aria-label="Voltar ao topo"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-500/40 text-blue-400 transition hover:bg-blue-500/10"
          >
            <LuArrowUp aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  );
}