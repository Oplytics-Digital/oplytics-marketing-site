/**
 * ProductShot — a framed product screenshot that degrades to a labelled
 * placeholder until the real image is dropped in. Used on the /ai and /obeya
 * landing pages so copy and layout are reviewable before screenshots land.
 *
 * See SCREENSHOT-MANIFEST.md for what each `src` should contain.
 */
import { useState } from "react";

interface ProductShotProps {
  src: string;
  alt: string;
  /** Short label shown on the placeholder (e.g. "Opi Insights — SQDCP") */
  label: string;
  /** aspect-ratio utility, e.g. "aspect-[16/10]" (default) */
  aspect?: string;
  className?: string;
}

export default function ProductShot({
  src,
  alt,
  label,
  aspect = "aspect-[16/10]",
  className = "",
}: ProductShotProps) {
  const [missing, setMissing] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-[#1E2738] bg-[#080C16] ${aspect} ${className}`}
    >
      {missing ? (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 text-center"
          style={{
            backgroundImage:
              "linear-gradient(#1E2738 1px, transparent 1px), linear-gradient(90deg, #1E2738 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        >
          <span
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: "#4A5668" }}
          >
            {label}
          </span>
          <span className="text-[11px]" style={{ color: "#3A4658" }}>
            {src.split("/").pop()} — see SCREENSHOT-MANIFEST.md
          </span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover object-top"
          onError={() => setMissing(true)}
        />
      )}
    </div>
  );
}
