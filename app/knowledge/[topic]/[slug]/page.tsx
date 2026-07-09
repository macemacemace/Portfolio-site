import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { getNote, getNotes, getTopic, getTopics } from "@/lib/knowledge";

export function generateStaticParams() {
  return getTopics().flatMap((t) =>
    getNotes(t.slug).map((n) => ({ topic: t.slug, slug: n.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ topic: string; slug: string }>;
}) {
  const { topic, slug } = await params;
  const note = getNote(topic, slug);
  return {
    title: note ? note.title : "Not found",
    description: note?.description,
  };
}

export default async function NotePage({
  params,
}: {
  params: Promise<{ topic: string; slug: string }>;
}) {
  const { topic, slug } = await params;
  const note = getNote(topic, slug);
  if (!note) notFound();

  const topicData = getTopic(topic);

  return (
    <article>
      <Link
        href={`/knowledge/${topic}`}
        className="font-mono text-sm text-zinc-500 hover:text-emerald-400"
      >
        ← {topicData?.title ?? topic}
      </Link>
      <h1 className="mt-4 text-3xl font-bold text-zinc-100">{note.title}</h1>
      <div className="mt-3 flex flex-wrap items-center gap-4">
        {note.date && (
          <span className="font-mono text-xs text-zinc-500">{note.date}</span>
        )}
        {note.tags.map((tag) => (
          <span key={tag} className="font-mono text-xs text-emerald-400">
            #{tag}
          </span>
        ))}
      </div>
      <div className="prose mt-8 text-zinc-300">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
        >
          {note.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
