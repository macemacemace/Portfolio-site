import type { Metadata } from "next";
import { Geist, Geist_Mono, Alfa_Slab_One } from "next/font/google";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import PixelText from "@/components/PixelText";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const alfaSlab = Alfa_Slab_One({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Martin Jakovoski — Backend & Full-Stack Developer",
    template: "%s | Martin Jakovoski",
  },
  description:
    "Portfolio and blog of Martin Jakovoski, backend & full-stack developer.",
};

const themeInit = `
try {
  var t = localStorage.getItem("theme");
  if (t === "dark" || (!t && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.documentElement.classList.add("dark");
  }
} catch (e) {}
`;

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "#", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className="min-h-full flex flex-col bg-bg text-ink">
        <header className="sticky top-0 z-10 border-b border-line bg-bg/80 backdrop-blur">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
            <Link
              href="/#about"
              aria-label="About me"
              className={`${alfaSlab.className} inline-block bg-[linear-gradient(180deg,#ffffff_0%,#cfe6ff_22%,#6d9df0_42%,#1b2670_52%,#f4f6ff_55%,#9a6df0_74%,#e14fd0_100%)] bg-clip-text text-3xl text-transparent [-webkit-text-stroke:1px_#160e38] [filter:drop-shadow(0_0_8px_rgba(185,103,255,0.55))]`}
            >
              <PixelText
                text="MJ"
                stops={[
                  [255, 255, 255],
                  [214, 234, 255],
                  [200, 175, 255],
                ]}
              />
            </Link>
            <div className="flex items-center gap-7 text-lg">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-ink-2 transition-colors hover:text-ink"
                >
                  {link.label}
                </Link>
              ))}
              <ThemeToggle />
            </div>
          </nav>
        </header>
        <main className="mx-auto w-full max-w-7xl flex-1 px-6 py-8 lg:px-12">
          {children}
        </main>
        <footer className="border-t border-line">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 text-sm text-ink-3 lg:px-12">
            <span>© {new Date().getFullYear()} Martin Jakovoski</span>
            <span className="font-mono text-xs">built with Next.js</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
