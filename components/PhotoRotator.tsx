"use client";

import Image from "next/image";
import { useState } from "react";

const photos = ["/me/me1.jpg", "/me/me2.jpg", "/me/me3.jpg"];

export default function PhotoRotator() {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % photos.length);

  return (
    <div className="relative mx-auto h-64 w-52 shrink-0 sm:mx-0 sm:h-72 sm:w-60 lg:h-80 lg:w-72">
      <div className="absolute right-0 top-3 h-full w-full rounded-xl border-2 border-accent" />
      <button
        onClick={next}
        aria-label="Show next photo"
        title="Click for the next photo"
        className="group absolute right-3 top-0 h-full w-full cursor-pointer overflow-hidden rounded-xl bg-accent-soft"
      >
        {photos.map((src, idx) => (
          <Image
            key={src}
            src={src}
            alt="Photo of Martin Jakovoski"
            fill
            sizes="288px"
            priority={idx === 0}
            className={`object-cover transition-opacity duration-500 ${
              idx === i ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <span className="pointer-events-none absolute inset-x-0 bottom-2.5 flex justify-center gap-1.5">
          {photos.map((_, idx) => (
            <span
              key={idx}
              className={`h-1.5 w-1.5 rounded-full transition-colors ${
                idx === i ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </span>
      </button>
    </div>
  );
}
