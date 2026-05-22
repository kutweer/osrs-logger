"use client";

import { useState } from "react";
import Image from "next/image";

interface BossHeroImageProps {
  src: string;           // wiki image (may 404 for some bosses)
  alt: string;
  fallbackSrc?: string;  // RuneLite item sprite — always loads
}

/**
 * Renders the boss hero banner.
 * Falls back to the icon item sprite (centered) if the wiki image 404s.
 */
export function BossHeroImage({ src, alt, fallbackSrc }: BossHeroImageProps) {
  const [error, setError] = useState(false);

  // If wiki image fails AND no fallback, render nothing
  if (error && !fallbackSrc) return null;

  return (
    <div className="relative h-48 sm:h-64 bg-gradient-to-b from-muted/40 to-card/80 border-b border-border/40 flex items-center justify-center">
      {!error ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain p-6"
          priority
          sizes="(max-width: 768px) 100vw, 960px"
          onError={() => setError(true)}
        />
      ) : fallbackSrc ? (
        // Centered item sprite as a reasonable stand-in
        <Image
          src={fallbackSrc}
          alt={alt}
          width={96}
          height={96}
          className="object-contain opacity-70"
        />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent pointer-events-none" />
    </div>
  );
}
