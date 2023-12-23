import { useEffect, useState } from "react";
import { Button } from "../design-system/Button";
import { Typography } from "../design-system/Typography";

export default function CookiesBanner() {
  const localStorageKey = "isCookiesBannerAccept";

  const [isCookiesBannerAccept, setIsCookiesBannerAccept] = useState(() => {
    const storedValue = localStorage.getItem(localStorageKey);
    return storedValue ? Boolean(storedValue) : false;
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, String(isCookiesBannerAccept));
  }, [isCookiesBannerAccept]);

  const setToTrue = () => {
    setIsCookiesBannerAccept(true);
  };

  return (
    <>
      {!isCookiesBannerAccept && (
        <div className="fixed z-[1000] bottom-0 left-0 bg-whitePrimary text-orangePrimary w-full flex justify-between items-center p-5">
          <Typography fontFamily="Franklin" fontSize="15" textColor="black">
            We use cookies to improve your experience on our site. By using our
            site, you agree to our use of cookies.
          </Typography>
          <Button
            variant="black"
            className="cookies-banner__button"
            onClick={setToTrue}
          >
            Accept
          </Button>
        </div>
      )}
    </>
  );
}
