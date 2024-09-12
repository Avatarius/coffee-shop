import { SyntheticEvent } from "react";

interface IImageProps {
  src: string;
  fallbackSrc: string;
  alt: string;
  className?: string;
}

function Image({ src, alt, fallbackSrc, className }: IImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      onError={(e: SyntheticEvent<HTMLImageElement, Event>) => {
        e.currentTarget.src = fallbackSrc;
      }}
      className={className}
    />
  );
}

export { Image };
