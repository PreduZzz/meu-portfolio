export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  repoUrl?: string; // link do GitHub
  liveUrl?: string; // link do site no ar, se existir
}

// EDITE: seus projetos reais
export const projects: Project[] = [
  {
    id: "projeto-1",
    title: "EDITE: nome do projeto",
    description: "EDITE: o que ele faz, em uma frase.",
    tags: ["React", "TypeScript"],
    repoUrl: "https://github.com/PreduZzz/nome-do-repositorio",
  },
  {
    id: "projeto-2",
    title: "EDITE: nome do projeto",
    description: "EDITE: o que ele faz, em uma frase.",
    tags: ["Node.js", "MySQL"],
    repoUrl: "https://github.com/PreduZzz/nome-do-repositorio",
    liveUrl: "https://exemplo.com",
  },
];