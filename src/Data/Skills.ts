import type { IconType } from "react-icons";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiPhp,
  SiPython,
  SiC,
  SiHtml5,
  SiTailwindcss,
  SiGit,
  SiGithub,
} from "react-icons/si";

export interface Skill {
  name: string;
  Icon: IconType;
  color: string; // cor da marca, em hex
}

export const skills: Skill[] = [
  { name: "JavaScript", Icon: SiJavascript, color: "#f7df1e" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178c6" },
  { name: "React", Icon: SiReact, color: "#61dafb" },
  { name: "HTML & CSS", Icon: SiHtml5, color: "#e34f26" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38bdf8" },
  { name: "PHP", Icon: SiPhp, color: "#777bb4" },
  { name: "Python", Icon: SiPython, color: "#3776ab" },
  { name: "C", Icon: SiC, color: "#a8b9cc" },
  { name: "Git", Icon: SiGit, color: "#f05032" },
  { name: "GitHub", Icon: SiGithub, color: "#ffffff" },
];

export const otherTools: string[] = [
  "Excel, Word e PowerPoint",
  "Montagem e manutenção de computadores",
  "Edição de vídeo (Premiere, DaVinci Resolve)",
  "Inglês intermediário",
];