import { Button } from "../design-system/Button";
import { useModal } from "./functions/useModal";

interface VideoProps {
  title: string;
  backdrop: string;
  videoUrl: string;
}

export default function Video(data: VideoProps) {
  const { showModal, closeModal, openModal } = useModal();

  const displayPlayButton = data.videoUrl !== "";

  return (
    <>
      {showModal && (
        <div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-blackPrimary bg-opacity-90 z-[51]"
          onClick={closeModal}
        >
          <div className="video-container w-10/12 h-[80%]">
            <iframe
              src={data.videoUrl}
              title={data.title}
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      )}
      <div className="relative flex flex-col bg-whitePrimary overflow-clip rounded-40 w-full max-h-[400px] gap-5">
        {displayPlayButton && (
          <>
            <Button
              variant="orange"
              className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              onClick={openModal}
            >
              PLAY
            </Button>
            <div
              id="overlay"
              className="bg-blackPrimary absolute w-full h-full opacity-50 "
            ></div>
          </>
        )}

        <img
          src={data.backdrop}
          alt={data.title}
          className="w-full h-full object-cover "
        />
      </div>
    </>
  );
}
