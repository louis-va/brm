import { Button } from "../design-system/Button";

export default function Video() {
  const titre = "Call me by your name";
  const img =
    "https://www.france.tv/image/vignette_16x9/2500/1406/j/s/l/50debe8e-phpnnblsj.jpg";
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
        <img src={img} alt={titre} className="w-full h-full object-cover " />
      </div>
    </>
  );
}
