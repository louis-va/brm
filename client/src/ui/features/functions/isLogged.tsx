import { useEffect, useState } from "react";

export const IsLogged = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  useEffect(() => {
    const requestOptions = {
      method: "POST",
      credentials: "include" as RequestCredentials,
      headers: headers,
      redirect: "follow" as RequestRedirect,
    };

    fetch("https://api.brm.lou-va.com/auth/refresh", requestOptions)
      .then((response) => {
        if (response.status === 200) {
          handleLogin();
          console.log("User is loggeddddddd");
        } else if (response.status === 401) {
          handleLogout();
          console.log(
            "Token is missing or token has expired (need to sign in)"
          );
        } else if (response.status === 500) {
          console.log("Server error");
        }

        response.json();
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  });

  return {
    isLoggedIn,
    handleLogin,
    handleLogout,
  };
};
