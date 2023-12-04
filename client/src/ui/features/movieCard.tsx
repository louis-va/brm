import Image from "../design-system/Image";

interface MovieCardProps {
  imageUrl: string;
  title: string;
  director: string;
}

export default function MovieCard({
  imageUrl,
  title,
  director,
}: MovieCardProps) {
  return (
    <div className="w-1/4 ">
      <div className="bg-white rounded-lg overflow-hidden relative pb-[150%]">
        <Image
          src={imageUrl}
          alt={title}
          className="absolute inset-0 w-full h-full"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <h4 className="text-lg font-semibold">{director}</h4>
        {/* Ajoutez d'autres détails du film ici */}
      </div>
    </div>
  );
}
