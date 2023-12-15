import { useState, FormEvent, ChangeEvent } from "react";
import { Form } from "react-router-dom";
import { Typography } from "../design-system/Typography";
import { Input } from "../design-system/Input";
import { Button } from "../design-system/Button";

export const LogForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [errorMessage, setErrorMessage] = useState<any>("");

  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { email, password } = formData;

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      email,
      password,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow" as RequestRedirect,
    };

    fetch("https://api.brm.lou-va.com/auth/signin", requestOptions)
      .then((response) => {
        console.log("status:", response.status);
        // Handle different status codes
        if (response.status === 200) {
          // Handle successful login, maybe store the token or user info

          closeModal()
          console.log("Login successful");
          console.log(response.status); // Access user info
        } else if (response.status === 401) {
          setErrorMessage("*Mot de passe incorect");
        } else if (response.status === 404) {
          setErrorMessage("*Email ou mot de passe invalide");
        } else if (response.status === 500) {
          console.log("Server error");
        }

        return response.json();
      })
      .then((result) => {
        console.log("Resultttttt:", result); // Log de la réponse complète pour l'inspecter
      })
      .catch((error) => {
        console.error("Error:", error);
        console.error("API call failed:", error.message);
      });
  };

  return (
    <>
      <Form className="w-full flex flex-col gap-5" onSubmit={handleSubmit}>
        <div className="flex gap-5 justify-between">
          <Input
            placeholder="johndoe@gmail.com"
            type="email"
            label="Adresse mail"
            variant="orange"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <Input
            placeholder="*********"
            type="password"
            label="Mot de passe"
            variant="orange"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex justify-between items-end">
          <Typography
            fontSize="15"
            fontFamily="Franklin"
            textColor="black"
            className="leading-[16px]"
          >
            {errorMessage}
          </Typography>
          <Button variant="black" type="submit" className="self-end">
            <Typography fontSize="20" fontFamily="Franklin" textColor="orange">
              Se connecter
            </Typography>
          </Button>
        </div>
      </Form>
    </>
  );
}
