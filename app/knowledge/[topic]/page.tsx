import Link from "next/link";
import { notFound } from "next/navigation";
import { getNotes, getTopic, getTopics } from "@/lib/knowledge";

export function generateStaticParams() {
  return getTopics().map((t) => ({ topic: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic } = await params;
  const topicData = getTopic(topic);
  return { title: topicData ? topicData.title : "Not found" };
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic } = await params;
  const topicData = getTopic(topic);
  if (!topicData) notFound();

  const notes = getNotes(topic);

  return (
    <div>
      <Link
        href="/knowledge"
        className="font-mono text-sm text-zinc-500 hover:text-emerald-400"
      >
        ← knowledge base
      </Link>
      <h1 className="mt-4 text-3xl font-bold text-zinc-100">
        {topicData.title}
      </h1>
      {topicData.description && (
        <p className="mt-3 max-w-xl text-zinc-400">{topicData.description}</p>
      )}
      <ul className="mt-8 space-y-3">
        {notes.map((note) => (
          <li key={note.slug}>
            <Link
              href={`/knowledge/${topic}/${note.slug}`}
              className="group block rounded-lg border border-zinc-800 bg-zinc-900/50 p-5 transition-colors hover:border-emerald-500/50"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="font-semibold text-zinc-100 transition-colors group-hover:text-emerald-400">
                  {note.title}
                </h2>
                {note.date && (
                  <span className="shrink-0 font-mono text-xs text-zinc-600">
                    {note.date}
                  </span>
                )}
              </div>
              {note.description && (
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {note.description}
                </p>
              )}
              {note.tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {note.tags.map((tag) => (
                    <span key={tag} className="font-mono text-xs text-emerald-400">
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
