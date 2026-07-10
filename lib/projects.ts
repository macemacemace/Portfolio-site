export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  banner?: string;
  github?: string;
  demo?: string;
}

// Add your real projects here. `banner` is an image path inside /public,
// e.g. put banner.png in public/projects/ and set banner: "/projects/banner.png".
export const projects: Project[] = [
  {
    slug: "project-one",
    title: "-----",
    description: "----- ----- ----- ----- ----- -----",
    longDescription:
      "----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----",
    tech: ["Node.js", "TypeScript", "PostgreSQL", "Docker"],
    github: "https://github.com/macemacemace",
  },
  {
    slug: "project-two",
    title: "-----",
    description: "----- ----- ----- ----- ----- -----",
    longDescription:
      "----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----",
    tech: ["Next.js", "React", "Tailwind CSS"],
    github: "https://github.com/macemacemace",
  },
  {
    slug: "project-three",
    title: "-----",
    description: "----- ----- ----- ----- ----- -----",
    longDescription:
      "----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----",
    tech: ["JavaScript", "Express", "MongoDB"],
    github: "https://github.com/macemacemace",
  },
];
