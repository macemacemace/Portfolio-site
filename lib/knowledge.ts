import fs from "fs";
import path from "path";
import matter from "gray-matter";

const KNOWLEDGE_DIR = path.join(process.cwd(), "content", "knowledge");

export interface NoteMeta {
  slug: string;
  topic: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
}

export interface Note extends NoteMeta {
  content: string;
}

export interface Topic {
  slug: string;
  title: string;
  description: string;
  noteCount: number;
}

function titleFromSlug(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export function getTopics(): Topic[] {
  if (!fs.existsSync(KNOWLEDGE_DIR)) return [];
  return fs
    .readdirSync(KNOWLEDGE_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => {
      const topicDir = path.join(KNOWLEDGE_DIR, entry.name);
      const metaPath = path.join(topicDir, "_topic.json");
      let title = titleFromSlug(entry.name);
      let description = "";
      if (fs.existsSync(metaPath)) {
        const meta = JSON.parse(fs.readFileSync(metaPath, "utf-8"));
        title = meta.title ?? title;
        description = meta.description ?? "";
      }
      const noteCount = fs
        .readdirSync(topicDir)
        .filter((f) => f.endsWith(".md")).length;
      return { slug: entry.name, title, description, noteCount };
    })
    .sort((a, b) => a.title.localeCompare(b.title));
}

export function getTopic(slug: string): Topic | undefined {
  return getTopics().find((t) => t.slug === slug);
}

export function getNotes(topic: string): NoteMeta[] {
  const topicDir = path.join(KNOWLEDGE_DIR, topic);
  if (!fs.existsSync(topicDir)) return [];
  return fs
    .readdirSync(topicDir)
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(topicDir, file), "utf-8");
      const { data } = matter(raw);
      const slug = file.replace(/\.md$/, "");
      return {
        slug,
        topic,
        title: data.title ?? titleFromSlug(slug),
        description: data.description ?? "",
        date: data.date ? String(data.date) : "",
        tags: data.tags ?? [],
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getNote(topic: string, slug: string): Note | undefined {
  const filePath = path.join(KNOWLEDGE_DIR, topic, `${slug}.md`);
  if (!fs.existsSync(filePath)) return undefined;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    topic,
    title: data.title ?? titleFromSlug(slug),
    description: data.description ?? "",
    date: data.date ? String(data.date) : "",
    tags: data.tags ?? [],
    content,
  };
}

export function getRecentNotes(limit = 5): NoteMeta[] {
  return getTopics()
    .flatMap((t) => getNotes(t.slug))
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, limit);
}
