import type { ComponentProps } from "react";

import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { cn } from "@/lib/utils";

type Logo = {
  src?: string;
  alt: string;
  label?: string;
  toneClassName?: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = ComponentProps<"div"> & {
  logos: Logo[];
};

export function LogoCloud({ className, logos, ...props }: LogoCloudProps) {
  return (
    <div
      {...props}
      className={cn(
        "overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black,transparent)]",
        className
      )}
    >
      <InfiniteSlider gap={72} reverse speed={42} speedOnHover={18}>
        {logos.map((logo) => (
          <div className="helix-logo-cloud-item" key={`logo-${logo.alt}`}>
            {logo.src ? (
              <img
                alt={logo.alt}
                className="pointer-events-none select-none"
                height={logo.height || undefined}
                loading="lazy"
                src={logo.src}
                width={logo.width || undefined}
              />
            ) : (
              <span className={cn("helix-logo-cloud-wordmark", logo.toneClassName)}>{logo.label ?? logo.alt}</span>
            )}
          </div>
        ))}
      </InfiniteSlider>
    </div>
  );
}
