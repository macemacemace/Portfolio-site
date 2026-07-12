import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Alfa_Slab_One } from "next/font/google";
import { projects } from "@/lib/projects";
import TechChip from "@/components/TechChip";
import { FaGithub } from "react-icons/fa6";
import { FiArrowLeft, FiExternalLink, FiImage } from "react-icons/fi";

const alfaSlab = Alfa_Slab_One({ weight: "400", subsets: ["latin"] });

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

      {/* Banner — image, retro-text, or placeholder */}
      {project.banner ? (
        <Image
          src={project.banner}
          alt={`${project.title} banner`}
          width={project.bannerWidth ?? 1600}
          height={project.bannerHeight ?? 700}
          className="mt-6 h-auto w-full rounded-xl border border-line"
          priority
        />
      ) : project.bannerText ? (
        <div className="mt-6 flex h-72 w-full items-center justify-center rounded-xl border border-line bg-[#0d0b16] px-6 sm:h-96">
          <span
            className={`${alfaSlab.className} whitespace-nowrap bg-[linear-gradient(180deg,#ffffff_0%,#cfe6ff_22%,#6d9df0_42%,#1b2670_52%,#f4f6ff_55%,#9a6df0_74%,#e14fd0_100%)] bg-clip-text text-center text-[clamp(1.1rem,6.2vw,4.5rem)] text-transparent [-webkit-text-stroke:1px_#160e38] [filter:drop-shadow(0_0_14px_rgba(185,103,255,0.5))]`}
          >
            {project.bannerText}
          </span>
        </div>
      ) : (
        <div className="mt-6 flex h-72 w-full flex-col items-center justify-center gap-2 rounded-xl border border-line bg-accent-soft text-accent">
          <FiImage className="h-10 w-10" />
          <span className="text-sm">project banner</span>
        </div>
      )}

      <h1 className="mt-8 text-4xl font-bold text-ink">{project.title}</h1>
      <p className="mt-4 max-w-2xl leading-relaxed text-ink-2">
        {project.longDescription}
      </p>

      <div className="mt-6 flex flex-wrap gap-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md border border-line-2 px-4 py-2 text-sm text-ink transition-colors hover:border-accent hover:text-accent"
          >
            <FaGithub className="h-4 w-4" />
            View code
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Live demo"
            className="flex items-center justify-center rounded-md bg-accent px-3 py-2 text-on-accent transition-opacity hover:opacity-90"
          >
            <FiExternalLink className="h-4 w-4" />
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
