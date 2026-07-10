import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import TechChip from "@/components/TechChip";
import { FaGithub } from "react-icons/fa6";
import { FiArrowLeft, FiExternalLink, FiImage } from "react-icons/fi";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return { title: project ? project.title : "Not found" };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <article className="pt-4">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm text-ink-2 transition-colors hover:text-accent"
      >
        <FiArrowLeft className="h-4 w-4" />
        All projects
      </Link>

      {/* Banner */}
      <div className="relative mt-6 h-56 w-full overflow-hidden rounded-xl border border-line bg-accent-soft sm:h-72">
        {project.banner ? (
          <Image
            src={project.banner}
            alt={`${project.title} banner`}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 text-accent">
            <FiImage className="h-10 w-10" />
            <span className="text-sm">project banner</span>
          </div>
        )}
      </div>

      <h1 className="mt-8 text-4xl font-bold text-ink">{project.title}</h1>
      <p className="mt-4 max-w-2xl leading-relaxed text-ink-2">
        {project.longDescription}
      </p>

      <div className="mt-6 flex flex-wrap gap-4">
        {project.github && (
          <a
            href={project.github}
            className="flex items-center gap-2 rounded-md border border-line-2 px-4 py-2 text-sm text-ink transition-colors hover:border-accent hover:text-accent"
          >
            <FaGithub className="h-4 w-4" />
            View code
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            className="flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-medium text-on-accent transition-opacity hover:opacity-90"
          >
            <FiExternalLink className="h-4 w-4" />
            Live demo
          </a>
        )}
      </div>

      <section className="mt-10 rounded-xl border border-line bg-card p-6">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">
          Built with
        </h2>
        <div className="mt-4 flex flex-wrap gap-2.5">
          {project.tech.map((t) => (
            <TechChip key={t} name={t} />
          ))}
        </div>
      </section>
    </article>
  );
}
