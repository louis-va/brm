import { useState } from "react";
import { Auth } from "../features/Auth";

const AuthPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <button onClick={togglePopup}>Se connecter</button>
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="w-1/2">
            <Auth />
          </div>
        </div>
      )}
    </>
  );
};

export default AuthPopup;
