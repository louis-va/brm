interface ImageProps {
  src: string;
  alt: string;
  horizontal?: boolean;
  className?: string;
}

export const Image = ({
  src,
  alt,
  horizontal = true,
  className,
}: ImageProps) => {
  const orientationClasses = horizontal
    ? `${className} w-full h-auto object-cover`
    : "w-auto h-full object-cover";

  return <img src={src} alt={alt} className={orientationClasses} />;
};
