import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { TechIcon } from "@/components/TechChip";
import { FiChevronRight } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects built by Martin Jakovoski.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-4">
      <h1 className="text-4xl font-bold text-ink">Projects</h1>
      <p className="mt-3 max-w-xl text-ink-2">
        Some of the finished and unfinished projects I&apos;ve built.
      </p>
      <ul className="mt-10 space-y-4">
        {projects.map((project) => (
          <li key={project.slug}>
            <Link
              href={`/projects/${project.slug}`}
              className="group flex items-center justify-between gap-6 rounded-xl border border-line bg-card p-6 transition-colors hover:border-accent"
            >
              <div>
                <h2 className="text-lg font-semibold text-ink transition-colors group-hover:text-accent">
                  {project.title}
                </h2>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-2">
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="flex items-center gap-1.5 text-xs text-ink-3"
                    >
                      <TechIcon name={t} className="h-3.5 w-3.5 text-accent" />
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <FiChevronRight className="h-5 w-5 shrink-0 text-ink-3 transition-colors group-hover:text-accent" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
