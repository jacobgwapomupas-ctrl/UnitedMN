import { useState } from "react";
import { skinUrl } from "@/lib/content";
import { cn } from "@/lib/utils";

export function PlayerSkin({
  ign,
  size = 32,
  className,
}: {
  ign: string;
  size?: number;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  const px = `${size}px`;

  return (
    <img
      src={failed ? "/logo.png" : skinUrl(ign, size * 2)}
      alt=""
      width={size}
      height={size}
      className={cn("rounded-sm image-render-pixel bg-elevated", className)}
      style={{ width: px, height: px, imageRendering: "pixelated" }}
      onError={() => setFailed(true)}
    />
  );
}
