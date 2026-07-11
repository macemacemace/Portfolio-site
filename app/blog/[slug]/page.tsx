import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { getPost, getPosts, formatDate } from "@/lib/blog";
import { FiArrowLeft } from "react-icons/fi";

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  return {
    title: post ? post.title : "Not found",
    description: post?.description,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="pt-4">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-ink-2 transition-colors hover:text-accent"
      >
        <FiArrowLeft className="h-4 w-4" />
        All posts
      </Link>

      <h1 className="mt-6 text-4xl font-bold text-ink">{post.title}</h1>
      {post.date && (
        <p className="mt-3 font-mono text-sm text-ink-3">
          {formatDate(post.date)}
        </p>
      )}

      <div className="prose mt-8">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
