import Image from "next/image";
import Reveal from "@/components/Reveal";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FiDownload, FiMusic, FiFilm, FiTv, FiChevronDown } from "react-icons/fi";

const technologies = [
  "Node.js",
  "TypeScript",
  "JavaScript",
  "PostgreSQL",
  "Docker",
  "React",
  "Next.js",
  "Git",
];

const favourites = [
  { icon: FiMusic, label: "Favourite song", value: "-----" },
  { icon: FiFilm, label: "Favourite movie", value: "-----" },
  { icon: FiTv, label: "Favourite series", value: "-----" },
];

export default function Home() {
  return (
    <div>
      {/* First viewport: hero + tech box + scroll hint */}
      <section className="flex min-h-[calc(100dvh-11rem)] flex-col">
        <div className="flex flex-1 flex-col-reverse items-start gap-10 py-8 sm:flex-row sm:items-center sm:gap-16">
          <div className="flex-1">
            <h1 className="text-5xl font-bold leading-tight text-ink sm:text-6xl lg:text-7xl">
            Martin
            <br />
            <span className="text-accent">Jakovoski</span>
          </h1>
          <p className="mt-6 max-w-lg leading-relaxed text-ink-2 lg:text-lg">
            ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
            ----- ----- ----- ----- ----- ----- ----- -----
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="https://github.com/yourusername"
              className="flex h-10 w-10 items-center justify-center rounded-md border border-line-2 text-ink-2 transition-colors hover:border-accent hover:text-accent"
              aria-label="GitHub"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              className="flex h-10 w-10 items-center justify-center rounded-md border border-line-2 text-ink-2 transition-colors hover:border-accent hover:text-accent"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a
              href="/cv.pdf"
              download
              className="flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-on-accent transition-opacity hover:opacity-90"
            >
              <FiDownload className="h-4 w-4" />
              Download CV
            </a>
          </div>
        </div>
        <div className="relative mx-auto h-52 w-44 shrink-0 sm:mx-0 sm:h-64 sm:w-56 lg:h-80 lg:w-72">
          <div className="absolute right-0 top-3 h-full w-full rounded-xl border-2 border-accent" />
          <div className="absolute right-3 top-0 h-full w-full overflow-hidden rounded-xl bg-accent-soft">
            <Image
              src="/me.svg"
              alt="Photo of Martin Jakovoski"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        </div>

        {/* Technologies box */}
        <div className="rounded-xl border border-line bg-card p-6">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">
          Technologies I work with
        </h2>
        <div className="mt-4 flex flex-wrap gap-2.5">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-line-2 bg-card-2 px-4 py-1.5 text-xs text-ink"
            >
              -----
            </span>
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
          <h2 className="text-3xl font-bold text-ink">About me</h2>
          <div className="mt-6 grid gap-8 sm:grid-cols-[1.5fr_1fr]">
            <div className="space-y-4 leading-relaxed text-ink-2">
              <p>
                ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
                ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
              </p>
              <p>
                ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
                ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
              </p>
            </div>
            <Reveal delay={200}>
              <div className="rounded-xl border border-line bg-card p-5">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-accent">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                    <path d="M19 14c1.5-1.4 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2C10.5 3.5 9.3 3 7.5 3A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.1 3 5.5l7 7Z" />
                  </svg>
                  Favourites
                </h3>
                <ul className="mt-4 space-y-4">
                  {favourites.map((fav) => (
                    <li key={fav.label} className="flex items-start gap-3">
                      <fav.icon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <div>
                        <p className="text-xs text-ink-3">{fav.label}</p>
                        <p className="text-sm text-ink">{fav.value}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
