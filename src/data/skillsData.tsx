import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { FaServer } from "react-icons/fa";
import {
  SiBootstrap,
  SiDocker,
  SiDotnet,
  SiElectron,
  SiExpress,
  SiFlutter,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import type { Position, TechIconData } from "../types/skills";

// Tech icon arrays using React icons
export const frontendIcons: TechIconData[] = [
  {
    icon: <SiFlutter className="w-full h-full text-blue-400" />,
    label: "Flutter",
    size: "md",
  },
  {
    icon: <AiFillHtml5 className="w-full h-full text-orange-500" />,
    label: "HTML",
    size: "sm",
  },
  {
    icon: <DiCss3 className="w-full h-full text-blue-500" />,
    label: "CSS",
    size: "sm",
  },
  {
    icon: <SiJavascript className="w-full h-full text-yellow-400" />,
    label: "JavaScript",
    size: "md",
  },
  {
    icon: <SiReact className="w-full h-full text-blue-400" />,
    label: "React",
    size: "md",
  },
  {
    icon: <SiNextdotjs className="w-full h-full text-slate-100" />,
    label: "Next.js",
    size: "md",
  },
  {
    icon: <SiTailwindcss className="w-full h-full text-cyan-400" />,
    label: "Tailwind",
    size: "md",
  },
  {
    icon: <SiBootstrap className="w-full h-full text-purple-600" />,
    label: "Bootstrap",
    size: "md",
  },
  {
    icon: <SiTypescript className="w-full h-full text-blue-600" />,
    label: "TypeScript",
    size: "sm",
  },
  {
    icon: <SiElectron className="w-full h-full text-cyan-300" />,
    label: "Electron",
    size: "md",
  },
];

export const backendIcons: TechIconData[] = [
  {
    icon: <SiDotnet className="w-full h-full text-purple-600" />,
    label: ".NET",
    size: "md",
  },
  {
    icon: <SiPostgresql className="w-full h-full text-blue-700" />,
    label: "PostgreSQL",
    size: "lg",
  },
  {
    icon: <SiMysql className="w-full h-full text-blue-500" />,
    label: "MySQL",
    size: "md",
  },
  {
    icon: <SiMongodb className="w-full h-full text-green-600" />,
    label: "MongoDB",
    size: "md",
  },
  {
    icon: <SiNodedotjs className="w-full h-full text-green-500" />,
    label: "Node.js",
    size: "md",
  },
  {
    icon: <SiExpress className="w-full h-full text-gray-600" />,
    label: "Express",
    size: "sm",
  },
  {
    icon: <SiPhp className="w-full h-full text-purple-500" />,
    label: "PHP",
    size: "md",
  },
];

export const devopsIcons: TechIconData[] = [
  {
    icon: <SiDocker className="w-full h-full text-blue-500" />,
    label: "Docker",
    size: "md",
  },
  {
    icon: <SiGit className="w-full h-full text-orange-600" />,
    label: "Git",
    size: "md",
  },
  {
    icon: <FaServer className="w-full h-full text-gray-500" />,
    label: "CI/CD",
    size: "md",
  },
];

// Fixed positions for each category
export const frontendPositions: Position[] = [
  [5, 20, -5], // Flutter
  [35, 15, 3], // HTML
  [65, 25, -8], // CSS
  [75, 55, 5], // JavaScript
  [50, 70, -3], // React
  [15, 75, 7], // Next.js
  [0, 55, -10], // Tailwind
  [40, 45, 0], // Bootstrap
  [25, 30, 4], // TypeScript
  [80, 75, -7], // Electron
];

export const backendPositions: Position[] = [
  [10, 25, -5], // .NET
  [45, 15, 0], // PostgreSQL
  [70, 30, 8], // MySQL
  [65, 65, -3], // MongoDB
  [35, 70, 5], // Node.js
  [5, 65, -8], // Express
  [40, 45, 2], // PHP
];

export const devopsPositions: Position[] = [
  [15, 35, -5], // Docker
  [60, 30, 8], // Git
  [40, 65, 0], // CI/CD
];
