interface ImageProps {
  src: string;
  alt: string;
  horizontal?: boolean;
  className?: string;
}

export default function Image({
  src,
  alt,
  className,
  horizontal = true,
}: ImageProps) {
  const orientationClasses = horizontal
    ? `${className} w-full h-auto object-cover`
    : "w-auto h-full object-cover";

  return (
    <img
      src={src}
      alt={alt}
      className={`object-cover ${className} ${orientationClasses}`}
    />
  );
}
