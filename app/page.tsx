import Image from "next/image";
import Reveal from "@/components/Reveal";
import TechChip from "@/components/TechChip";
import PixelText from "@/components/PixelText";
import PhotoRotator from "@/components/PhotoRotator";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FiFileText, FiChevronDown, FiMapPin } from "react-icons/fi";

const technologies = [
  "JavaScript",
  "Node.js",
  "React",
  "HTML",
  "CSS",
  "Java",
  "Spring Boot",
  "Python",
  "PostgreSQL",
  "Docker",
  "Git",
];

const favourites = [
  { type: "Show", title: "Attack on Titan", image: "/favourites/show.webp" },
  {
    type: "Song",
    title: "Late At Night — Vanna Rainelle",
    image: "/favourites/song.webp",
  },
  {
    type: "Movie",
    title: "The Lord of the Rings: The Return of the King",
    image: "/favourites/movie.webp",
  },
];

export default function Home() {
  return (
    <div>
      {/* First viewport: hero + tech box + scroll hint */}
      <section className="flex min-h-[calc(100dvh-11rem)] flex-col">
        <div className="flex flex-1 flex-col-reverse items-start gap-10 py-8 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold leading-tight text-ink sm:text-6xl lg:text-7xl">
            <PixelText text="Martin" />
            <br />
            <PixelText text="Jakovoski" className="text-accent" />
          </h1>
          <p className="mt-4 flex items-center gap-2 text-lg font-medium text-accent">
            <FiMapPin className="h-4 w-4" />
            Skopje, Macedonia
          </p>
          <p className="mt-6 max-w-lg leading-relaxed text-ink-2 lg:text-lg">
            I&apos;m a full-stack software engineer who specializes in building
            practical, reliable applications with JavaScript. Currently in my
            final year at University American College, I&apos;ve been coding for
            about three years now, and I&apos;m always seeking new knowledge to
            push my skills further.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="https://github.com/macemacemace"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-md border border-line-2 text-ink-2 transition-colors hover:border-accent hover:text-accent"
              aria-label="GitHub"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/martin-jakovoski-00a246300/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-md border border-line-2 text-ink-2 transition-colors hover:border-accent hover:text-accent"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-on-accent transition-opacity hover:opacity-90"
            >
              <FiFileText className="h-4 w-4" />
              View CV
            </a>
          </div>
        </div>
        <PhotoRotator />
        </div>

        {/* Technologies box */}
        <div className="rounded-xl border border-line bg-card p-6">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">
          Technologies I work with
        </h2>
        <div className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-6 sm:justify-start">
          {technologies.map((tech) => (
            <TechChip key={tech} name={tech} />
          ))}
          </div>
        </div>

        <div className="mt-auto flex justify-center pb-2 pt-10 text-ink-3">
          <a href="#about" className="flex flex-col items-center gap-1 text-xs transition-colors hover:text-accent">
            scroll for about me
            <FiChevronDown className="h-4 w-4 animate-bounce text-accent" />
          </a>
        </div>
      </section>

      {/* About me — revealed on scroll */}
      <section id="about" className="mt-24 scroll-mt-24 pb-8">
        <Reveal>
          <div className="grid gap-10 sm:grid-cols-2 sm:items-center">
            <div>
              <h2 className="text-3xl font-bold text-ink">About me</h2>
              <p className="mt-6 max-w-md text-2xl font-medium leading-relaxed text-ink-2">
                Beyond the professional side, here&apos;s what I&apos;m into:
              </p>
            </div>
            <Reveal delay={150}>
              <div>
                <h3 className="flex items-center gap-2 text-sm font-semibold text-accent">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                    <path d="M19 14c1.5-1.4 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2C10.5 3.5 9.3 3 7.5 3A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.1 3 5.5l7 7Z" />
                  </svg>
                  Favourites
                </h3>
                <div className="mt-4 grid grid-cols-3 gap-4">
                  {favourites.map((fav) => (
                    <div key={fav.type} className="group">
                      <div className="relative aspect-[2/3] overflow-hidden rounded-lg border border-line bg-card-2">
                        <Image
                          src={fav.image}
                          alt={fav.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <p className="mt-2 text-xs font-semibold text-accent">
                        {fav.type}
                      </p>
                      <p className="text-xs leading-snug text-ink-2">
                        {fav.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
