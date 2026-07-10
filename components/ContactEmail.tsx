"use client";

import { useState } from "react";
import { FiMail, FiCopy, FiCheck } from "react-icons/fi";

const EMAIL = "martin2jakovoski@gmail.com";

export default function ContactEmail() {
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);

  async function handleClick() {
    if (!revealed) {
      setRevealed(true);
      return;
    }
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <button
        onClick={handleClick}
        className="flex items-center gap-3 rounded-full border border-accent bg-card-2 px-6 py-3 font-mono text-sm text-ink transition-colors hover:bg-accent-soft"
      >
        <FiMail className="h-4 w-4 text-accent" />
        {revealed ? EMAIL : "Reveal email"}
        {revealed &&
          (copied ? (
            <FiCheck className="h-4 w-4 text-accent" />
          ) : (
            <FiCopy className="h-4 w-4 text-accent" />
          ))}
      </button>
      <span
        className={`text-sm text-accent transition-opacity ${
          copied ? "opacity-100" : "opacity-0"
        }`}
      >
        Copied to clipboard!
      </span>
    </div>
  );
}
