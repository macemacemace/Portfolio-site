export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  banner?: string;
  bannerWidth?: number;
  bannerHeight?: number;
  bannerText?: string;
  github?: string;
  demo?: string;
}

// Add your real projects here. `banner` is an image path inside /public,
// e.g. put a screenshot in public/projects/ and set banner: "/projects/gym-ascend.png".
export const projects: Project[] = [
  {
    slug: "eclipse",
    title: "Eclipse",
    description:
      "League of Legends stats tracker with summoner lookup and champion tier lists.",
    longDescription:
      "A League of Legends stat tracker app that lets you look up players, analyze champion win rates and view live games.",
    tech: ["React", "Vite", "React Router", "CSS", "Node.js", "Express"],
    banner: "/projects/eclipse-bh.png",
    bannerWidth: 1983,
    bannerHeight: 793,
    github: "https://github.com/macemacemace/project-eclipse",
    demo: "https://eclipse.martinjakovoski.dev",
  },
  {
    slug: "gym-ascend",
    title: "Gym Ascend",
    description: "Competitive fitness app",
    longDescription:
      "A video game inspired app where you can track your fitness progress, track macros and compete in the international ladder.",
    tech: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "React",
      "Vite",
      "Tailwind CSS",
      "Docker",
    ],
    banner: "/projects/gym-ascend.png",
    bannerWidth: 2033,
    bannerHeight: 783,
    github: "https://github.com/macemacemace/GymAscend",
    demo: "https://gymascend.martinjakovoski.dev/login",
  },
  {
    slug: "this-site",
    title: "This site",
    description: "Hello",
    longDescription: "Everything you need to know about me",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    bannerText: "martinjakovoski.dev",
    github: "https://github.com/macemacemace/Portfolio-site",
  },
];
