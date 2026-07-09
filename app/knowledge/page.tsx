import type { Metadata } from "next";
import Link from "next/link";
import { getTopics } from "@/lib/knowledge";

export const metadata: Metadata = {
  title: "Knowledge Base",
  description: "Topic-organized notes on everything I learn.",
};

export default function KnowledgePage() {
  const topics = getTopics();

  return (
    <div>
      <h1 className="text-3xl font-bold text-zinc-100">Knowledge base</h1>
      <p className="mt-3 max-w-xl text-zinc-400">
        My personal wiki — notes on everything I learn, organized by topic. It
        grows as I do.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {topics.map((topic) => (
          <Link
            key={topic.slug}
            href={`/knowledge/${topic.slug}`}
            className="group rounded-lg border border-zinc-800 bg-zinc-900/50 p-5 transition-colors hover:border-emerald-500/50"
          >
            <div className="flex items-baseline justify-between">
              <h2 className="font-semibold text-zinc-100 transition-colors group-hover:text-emerald-400">
                {topic.title}
              </h2>
              <span className="font-mono text-xs text-zinc-600">
                {topic.noteCount} {topic.noteCount === 1 ? "note" : "notes"}
              </span>
            </div>
            {topic.description && (
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {topic.description}
              </p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
