import { useState } from "react";
import { Typography } from "../design-system/Typography";
import SignForm from "../features/SignForm";
import LogForm from "../features/LogForm";

interface AuthPros {
  className?: string;
  children?: React.ReactNode;
}
export const Auth = ({ className, children }: AuthPros) => {
  const [showSignIn, setShowSignIn] = useState(false); 
  const [showLogIn, setShowLogIn] = useState(true);

  const handleSignInClick = () => {
    setShowSignIn(true);
    setShowLogIn(false);
  };

  const handleLogInClick = () => {
    setShowSignIn(false);
    setShowLogIn(true);
  };

  return (
    <div className={`${className} bg-orangePrimary p-30 rounded-25`}>
      <div className="flex justify-center">
        <button onClick={handleLogInClick} className={showLogIn ? "active" : ""}>
          <Typography
            fontSize="40"
            textColor="black"
            fontFamily="FranklinBold"
            component="h2"
            uppercase
            underline={showLogIn}
          >
            Se connecter 
          </Typography>
        </button>
        <Typography
          fontSize="40"
          textColor="black"
          fontFamily="FranklinBold"
          component="h2"
          uppercase
        >
          |
        </Typography>
        <button onClick={handleSignInClick} className={showSignIn ? "active" : ""}>
          <Typography
            fontSize="40"
            textColor="black"
            fontFamily="FranklinBold"
            component="h2"
            uppercase
            underline={showSignIn}
          >
            S'inscrire
          </Typography>
        </button>
      </div>
      {showSignIn && <SignForm />} 
      {showLogIn && <LogForm />} 
      {children}
    </div>
  );
};
