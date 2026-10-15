export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  repoUrl?: string; // link do GitHub
  liveUrl?: string; // link do site no ar, se existir
}

export const projects: Project[] = [
  {
    id: "portfolio",
    title: "Meu Portfólio",
    description:
      "Este site: portfólio pessoal com seções de sobre, skills, projetos, currículo e contato.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    repoUrl: "https://github.com/PreduZzz/meu-portfolio",
  },

  // Para adicionar outro: copie o bloco acima, preencha e salve.
];