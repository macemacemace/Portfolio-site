"use client";

import { useEffect, useRef, useState } from "react";

type RGB = [number, number, number];

// vaporwave stops: pink -> purple -> cyan
const DEFAULT_STOPS: RGB[] = [
  [255, 113, 206],
  [185, 103, 255],
  [1, 205, 254],
];

function grad(v: number, stops: RGB[]) {
  v = Math.min(1, Math.max(0, v));
  const seg = v * (stops.length - 1);
  const i = Math.min(stops.length - 2, Math.floor(seg));
  const f = seg - i;
  const a = stops[i];
  const b = stops[i + 1];
  return [
    a[0] + (b[0] - a[0]) * f,
    a[1] + (b[1] - a[1]) * f,
    a[2] + (b[2] - a[2]) * f,
  ];
}

// deterministic per-cell noise for the dithered pixel look
function hash(x: number, y: number) {
  const s = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
  return s - Math.floor(s);
}

export default function PixelText({
  text,
  className,
  stops = DEFAULT_STOPS,
}: {
  text: string;
  className?: string;
  stops?: RGB[];
}) {
  const wrapRef = useRef<HTMLSpanElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (!hover) return;
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const rect = wrap.getBoundingClientRect();
    const cs = getComputedStyle(wrap);
    const fontSize = parseFloat(cs.fontSize);
    const font =
      cs.font || `${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;
    const dpr = window.devicePixelRatio || 1;
    const w = rect.width;
    const h = rect.height;

    canvas.width = Math.max(1, Math.round(w * dpr));
    canvas.height = Math.max(1, Math.round(h * dpr));
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.scale(dpr, dpr);

    // build a mask of the text so pixels only show inside the letters
    const mask = document.createElement("canvas");
    mask.width = canvas.width;
    mask.height = canvas.height;
    const mctx = mask.getContext("2d");
    if (!mctx) return;
    mctx.scale(dpr, dpr);
    mctx.font = font;
    mctx.textBaseline = "alphabetic";
    const baseline = fontSize * 0.82 + (h - fontSize) / 2;
    mctx.fillStyle = "#fff";
    mctx.fillText(text, 0, baseline);

    const clip = () => {
      ctx.globalCompositeOperation = "destination-in";
      ctx.drawImage(mask, 0, 0, w, h);
      ctx.globalCompositeOperation = "source-over";
    };

    const cell = Math.max(3, Math.round(fontSize / 16));

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) {
      for (let y = 0; y < h; y += cell) {
        const c = grad(y / h, stops);
        ctx.fillStyle = `rgb(${c[0]},${c[1]},${c[2]})`;
        ctx.fillRect(0, y, w, cell);
      }
      clip();
      return;
    }

    let raf = 0;
    let start = 0;

    const frame = (ts: number) => {
      if (!start) start = ts;
      const el = (ts - start) / 1000;
      ctx.clearRect(0, 0, w, h);

      for (let y = 0; y < h; y += cell) {
        for (let x = 0; x < w; x += cell) {
          const n = hash(x, y);
          // every cell stays lit; brightness twinkles over time (dancing pixels)
          const flick = 0.45 + 0.55 * (0.5 + 0.5 * Math.sin(el * 5 + n * 6.283));
          // occasional bright white sparkle
          const spark = Math.sin(el * 9 + n * 40) > 0.9 ? 0.55 : 0;

          const c = grad(y / h, stops);
          const r = Math.round(c[0] * flick + (255 - c[0] * flick) * spark);
          const g = Math.round(c[1] * flick + (255 - c[1] * flick) * spark);
          const b = Math.round(c[2] * flick + (255 - c[2] * flick) * spark);
          ctx.fillStyle = `rgb(${r},${g},${b})`;
          ctx.fillRect(x, y, cell - 1, cell - 1);
        }
      }

      clip();
      raf = requestAnimationFrame(frame);
    };

    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, [hover, text, stops]);

  return (
    <span
      ref={wrapRef}
      className={`relative inline-block ${className ?? ""}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <span style={{ visibility: hover ? "hidden" : "visible" }}>{text}</span>
      {hover && (
        <canvas
          ref={canvasRef}
          className="pointer-events-none absolute left-0 top-0"
          aria-hidden
        />
      )}
    </span>
  );
}
