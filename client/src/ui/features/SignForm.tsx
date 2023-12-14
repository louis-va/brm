import { useState } from "react";
import { ChangeEvent } from "react";
import { Form } from "react-router-dom";
import { Select } from "../design-system/Select";
import { Typography } from "../design-system/Typography";
import { Input } from "../design-system/Input";
import { Button } from "../design-system/Button";
import { lastnameValidation } from "./functions/lastnameValidation";
import { firstnameValidation } from "./functions/firstnameValidation";
import { passwordValidation } from "./functions/passwordValidation";

export default function LogForm() {
  // États pour stocker les données du formulaire
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordValid: "",
    firstname: "",
    lastname: "",
    birthdate: "",
    gender: {},
  });

  // Fonction pour mettre à jour les données du formulaire
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleGenderChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = e.target.value;

    setFormData({
      ...formData,
      gender: selectedOption,
    });
  };

  // Fonction pour envoyer les données du formulaire à l'API
  const handleSubmit = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Cookie",
      "brm-session=eyJ0b2tlbiI6ImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpwWkNJNklqWTFObVUwWVRNek5qYzBaR1psTW1ZM1lqVXdNamRsWVNJc0ltbGhkQ0k2TVRjd01qUTVNekE1TXl3aVpYaHdJam94TnpBeU5UYzVORGt6ZlEuVlR6MnFGNGxlMlVJV2ZrdW1tWFFmZ0JSR3F3ano2alI2VmVfV1VRV1hSOCJ9; brm-session.sig=8LWeDkPRWnzsg9qCoPbLum51tUo"
    );

    var raw = JSON.stringify({
      email: formData.email,
      password: formData.password,
      firstname: formData.firstname,
      lastname: formData.lastname,
      birthdate: formData.birthdate + "T00:00:00.000Z",
      gender: formData.gender,
    });

    const lastnameValid = lastnameValidation(formData.lastname);
    const firstnameValid = firstnameValidation(formData.firstname);
    const passwordValid = passwordValidation(formData.password);

    if (lastnameValid === true) {
    } else {
      console.log(lastnameValid[1]);
    }

    if (passwordValid === true) {
      console.log("Tout est bon");
    } else {
      console.log(passwordValid[1]);
    }

    if (firstnameValid === true) {
    } else {
      console.log(firstnameValid[1]);
    }

    if (formData.password === formData.passwordValid) {
      fetch("https://api.brm.lou-va.com/auth/signup", {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      })
        .then((response) => {
          if (response.ok) {
            // Réinitialiser les données du formulaire après inscription réussie
            setFormData({
              email: "",
              password: "",
              passwordValid: "",
              firstname: "",
              lastname: "",
              birthdate: "",
              gender: "",
            });
            console.log("Inscription réussie");
          } else if (response.status === 400) {
            // Gérer le cas où l'email est déjà utilisé
            console.log("Email déjà utilisé");
          } else if (response.status === 500) {
            // Gérer les autres erreurs
            console.log("Erreur du serveur");
          } else {
            console.log("Autre Erreur");
          }
        })

        .catch((error) => console.log("Big probleme", error));
    } else {
      console.log("Vos mot de passes sont différents");
    }
  };

  return (
    <>
      <Form className="w-full flex flex-col gap-5" onSubmit={handleSubmit}>
        <div className="flex gap-5 justify-between ">
          <div className="flex w-1/2 gap-5">
            <Select
              name="Gender"
              label="Genre"
              variant="orange"
              className="w-[100px]"
              onChange={handleGenderChange}
              options={[
                { value: "M", label: "Mr" },
                { value: "F", label: "Mrs" },
                { value: "X", label: "Autre" },
              ]}
            />
            <Input
              name="lastname"
              value={formData.lastname}
              onChange={handleInputChange}
              placeholder="Doe"
              type="text"
              label="Nom"
              variant="orange"
            />
          </div>
          <div className="w-1/2">
            <Input
              name="firstname"
              value={formData.firstname}
              onChange={handleInputChange}
              placeholder="John"
              type="text"
              label="Prénom"
              variant="orange"
            />
          </div>
        </div>

        <div className="flex gap-5 justify-between ">
          <Input
            name="birthdate"
            value={formData.birthdate}
            onChange={handleInputChange}
            placeholder="DD/MM/YYYY"
            type="date"
            label="Date de naissance"
            variant="orange"
          />
          <Input
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="johndoe@gmail.com"
            type="email"
            label="Adresse mail"
            variant="orange"
          />
        </div>

        <div className="flex gap-5 justify-between ">
          <Input
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="*********"
            type="password"
            label="Mot de passe"
            variant="orange"
          />
          <Input
            name="passwordValid"
            value={formData.passwordValid}
            onChange={handleInputChange}
            placeholder="*********"
            type="password"
            label="Resaisir mot de passe"
            variant="orange"
          />
        </div>

        <Button variant="black" type="submit" className="self-end">
          <Typography fontSize="20" fontFamily="Franklin" textColor="orange">
            S'inscrire
          </Typography>
        </Button>
      </Form>
    </>
  );
}
