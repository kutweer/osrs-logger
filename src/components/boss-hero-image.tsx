"use client";

import { useState } from "react";
import Image from "next/image";

interface BossHeroImageProps {
  src: string;
  alt: string;
}

/**
 * Renders the boss hero banner image with graceful error handling.
 * Returns null (renders nothing) if the image fails to load.
 */
export function BossHeroImage({ src, alt }: BossHeroImageProps) {
  const [error, setError] = useState(false);

  if (error) return null;

  return (
    <div className="relative h-48 sm:h-64 bg-gradient-to-b from-muted/40 to-card/80 border-b border-border/40">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain p-6"
        priority
        sizes="(max-width: 768px) 100vw, 960px"
        onError={() => setError(true)}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent" />
    </div>
  );
}
