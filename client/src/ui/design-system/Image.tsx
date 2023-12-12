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
    ? `${className} w-full h-auto`
    : "w-auto h-full";

  return (
    <img src={src} alt={alt} className={`${className} ${orientationClasses}`} />
  );
}
