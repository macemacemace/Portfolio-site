import type { IconType } from "react-icons";
import {
  SiNodedotjs,
  SiTypescript,
  SiJavascript,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiDocker,
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiTailwindcss,
  SiGit,
  SiPython,
  SiRedis,
  SiLinux,
  SiSpringboot,
  SiGraphql,
  SiHtml5,
  SiCss,
  SiVite,
  SiReactrouter,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { FiCode } from "react-icons/fi";

const icons: Record<string, IconType> = {
  "Node.js": SiNodedotjs,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  Docker: SiDocker,
  React: SiReact,
  "Next.js": SiNextdotjs,
  Express: SiExpress,
  "Tailwind CSS": SiTailwindcss,
  Git: SiGit,
  Python: SiPython,
  Redis: SiRedis,
  Linux: SiLinux,
  "Spring Boot": SiSpringboot,
  Java: FaJava,
  GraphQL: SiGraphql,
  HTML: SiHtml5,
  CSS: SiCss,
  Vite: SiVite,
  "React Router": SiReactrouter,
};

// Official brand colors. Monochrome logos (Next.js, Express) are left out
// so they fall back to the theme color and stay visible in dark + light mode.
const colors: Record<string, string> = {
  "Node.js": "#5FA04E",
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  PostgreSQL: "#4169E1",
  MySQL: "#4479A1",
  MongoDB: "#47A248",
  Docker: "#2496ED",
  React: "#61DAFB",
  "Tailwind CSS": "#06B6D4",
  Git: "#F05032",
  Python: "#3776AB",
  Redis: "#FF4438",
  Linux: "#FCC624",
  "Spring Boot": "#6DB33F",
  Java: "#E76F00",
  GraphQL: "#E10098",
  HTML: "#E34F26",
  CSS: "#1572B6",
  Vite: "#646CFF",
  "React Router": "#CA4245",
};

export function TechIcon({ name, className }: { name: string; className?: string }) {
  const Icon = icons[name] ?? FiCode;
  const color = colors[name];
  return (
    <Icon
      className={className}
      style={color ? { color } : undefined}
      aria-hidden
    />
  );
}

export default function TechChip({ name }: { name: string }) {
  return (
    <div className="flex w-20 flex-col items-center gap-2 transition-transform hover:scale-110">
      <TechIcon name={name} className="h-10 w-10 text-ink" />
      <span className="text-center text-xs font-medium text-ink">{name}</span>
    </div>
  );
}
