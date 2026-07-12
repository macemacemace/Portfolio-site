import type { Metadata } from "next";
import Link from "next/link";
import { getPosts, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Writing about what I learn as a developer.",
};

export default function BlogPage() {
  const posts = getPosts();

  return (
    <div className="pt-4">
      <h1 className="text-4xl font-bold text-ink">Blog</h1>
      <p className="mt-3 max-w-xl text-ink-2">Thoughts and updates.</p>

      {posts.length === 0 ? (
        <p className="mt-10 text-ink-3">No posts yet — check back soon.</p>
      ) : (
        <ul className="mt-10 space-y-4">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block border-l-2 border-line py-1 pl-5 transition-colors hover:border-accent"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h2 className="text-lg font-semibold text-ink transition-colors group-hover:text-accent">
                    {post.title}
                  </h2>
                  {post.date && (
                    <span className="font-mono text-xs text-ink-3">
                      {formatDate(post.date)}
                    </span>
                  )}
                </div>
                {post.description && (
                  <p className="mt-1 text-sm leading-relaxed text-ink-2">
                    {post.description}
                  </p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
