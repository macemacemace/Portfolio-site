export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}

// Add your real projects here.
export const projects: Project[] = [
  {
    title: "Portfolio & Knowledge Base",
    description:
      "This website — a Next.js portfolio with a Markdown-driven knowledge base where I document everything I learn.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/yourusername/site",
    featured: true,
  },
  {
    title: "Example REST API",
    description:
      "Placeholder project — replace with a real one. A REST API with authentication, rate limiting and a PostgreSQL database.",
    tech: ["Node.js", "Express", "PostgreSQL"],
    featured: true,
  },
];
