import type { Metadata } from "next";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects built by Martin Jakovoski.",
};

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-zinc-100">Projects</h1>
      <p className="mt-3 max-w-xl text-zinc-400">
        Things I&apos;ve built — APIs, services and web apps.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col rounded-lg border border-zinc-800 bg-zinc-900/50 p-5 transition-colors hover:border-zinc-700"
          >
            <h2 className="font-semibold text-zinc-100">{project.title}</h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
              {project.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="font-mono text-xs text-emerald-400">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-4 flex gap-4 text-sm">
              {project.github && (
                <a
                  href={project.github}
                  className="text-zinc-300 underline underline-offset-4 hover:text-emerald-400"
                >
                  GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  className="text-zinc-300 underline underline-offset-4 hover:text-emerald-400"
                >
                  Live demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
