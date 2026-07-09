import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
  { href: "/#about", label: "About" },
  { href: "#", label: "Blog" },
  { href: "#", label: "Contact" },
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
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-10">
            <Link
              href="/"
              aria-label="Home"
              className="flex h-8 w-8 items-center justify-center rounded-md bg-accent text-xs font-semibold text-on-accent"
            >
              MJ
            </Link>
            <div className="flex items-center gap-6 text-sm">
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
        <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-8 lg:px-10">
          {children}
        </main>
        <footer className="border-t border-line">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-sm text-ink-3 lg:px-10">
            <span>© {new Date().getFullYear()} Martin Jakovoski</span>
            <span className="font-mono text-xs">built with Next.js</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
