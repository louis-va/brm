import { Button } from "../design-system/Button";

interface VideoProps {
  title: string;
  backdrop: string;
}

export default function Video(data: VideoProps) {
  return (
    <>
      <div className="relative flex flex-col bg-whitePrimary overflow-clip rounded-40 w-full max-h-[400px] gap-5">
        <Button
          variant="orange"
          className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          PLAY
        </Button>
        <div
          id="overlay"
          className="bg-blackPrimary absolute w-full h-full opacity-50 "
        ></div>
        <img
          src={data.backdrop}
          alt={data.title}
          className="w-full h-full object-cover "
        />
      </div>
    </>
  );
}
