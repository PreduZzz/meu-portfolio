import type { IconType } from "react-icons";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiHtml5,
  SiPython,
  SiGit,
  SiGithub,
  SiMysql,
  SiFigma,
} from "react-icons/si";

export interface Skill {
  name: string;
  Icon: IconType;
  color: string; // cor da marca, em hex
}

// EDITE: deixe só o que você realmente usa
export const skills: Skill[] = [
  { name: "React", Icon: SiReact, color: "#61dafb" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178c6" },
  { name: "JavaScript", Icon: SiJavascript, color: "#f7df1e" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#5fa04e" },
  { name: "HTML & CSS", Icon: SiHtml5, color: "#e34f26" },
  { name: "Python", Icon: SiPython, color: "#3776ab" },
  { name: "Git", Icon: SiGit, color: "#f05032" },
  { name: "GitHub", Icon: SiGithub, color: "#ffffff" },
  { name: "MySQL", Icon: SiMysql, color: "#4479a1" },
  { name: "Figma", Icon: SiFigma, color: "#f24e1e" },
];

// EDITE: ferramentas que você conhece mas usa menos
export const otherTools: string[] = [
  "Postman",
  "Docker (básico)",
  "Power BI (básico)",
  "Microsoft 365",
  "Windows / Linux",
];