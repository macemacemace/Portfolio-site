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
  SiGithub,
  SiPython,
  SiRedis,
  SiLinux,
} from "react-icons/si";
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
  GitHub: SiGithub,
  Python: SiPython,
  Redis: SiRedis,
  Linux: SiLinux,
};

export function TechIcon({ name, className }: { name: string; className?: string }) {
  const Icon = icons[name] ?? FiCode;
  return <Icon className={className} aria-hidden />;
}

export default function TechChip({ name }: { name: string }) {
  return (
    <span className="flex items-center gap-2 rounded-full border border-line-2 bg-card-2 px-3 py-1.5 text-xs text-ink">
      <TechIcon name={name} className="h-3.5 w-3.5 text-accent" />
      {name}
    </span>
  );
}
