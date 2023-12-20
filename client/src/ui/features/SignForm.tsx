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

const SignForm = ({ closeModal }: { closeModal: () => void }) => {
  // États pour stocker les données du formulaire
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordValid: "",
    firstname: "",
    lastname: "",
    birthdate: "",
    gender: "M",
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

  const [lastnameError, setLastnameError] = useState<string | null>(null);
  const [firstnameError, setFirstnameError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [passwordMatchError, setPasswordMatchError] = useState<string | null>(
    null
  );
  const [emailError, setEmailError] = useState<string | null>(null);

  // Fonction pour envoyer les données du formulaire à l'API
  const handleSubmit = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Cookie",
      "brm-session=eyJ0b2tlbiI6ImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpwWkNJNklqWTFObVUwWVRNek5qYzBaR1psTW1ZM1lqVXdNamRsWVNJc0ltbGhkQ0k2TVRjd01qUTVNekE1TXl3aVpYaHdJam94TnpBeU5UYzVORGt6ZlEuVlR6MnFGNGxlMlVJV2ZrdW1tWFFmZ0JSR3F3ano2alI2VmVfV1VRV1hSOCJ9; brm-session.sig=8LWeDkPRWnzsg9qCoPbLum51tUo"
    );

    const raw = JSON.stringify({
      email: formData.email,
      password: formData.password,
      firstname: formData.firstname,
      lastname: formData.lastname,
      birthdate: formData.birthdate + "T00:00:00.000Z",
      gender: formData.gender,
    });

    const firstnameValid = firstnameValidation(formData.firstname);
    const lastnameValid = lastnameValidation(formData.lastname);
    const passwordValid = passwordValidation(formData.password);
    const passwordMatch = formData.password === formData.passwordValid;
    const emailValid = formData.email === "";

    if (!lastnameValid.isValid) {
      setLastnameError(lastnameValid.errorValidation ?? null);
    }

    if (!passwordValid.isValid) {
      setPasswordError(passwordValid.errorValidation ?? null);
    }

    if (!firstnameValid.isValid) {
      setFirstnameError(firstnameValid.errorValidation ?? null);
    }

    if (!passwordMatch) {
      setPasswordMatchError("*Vos mots de passes ne correspondent pas");
    } else {
      setPasswordMatchError(null);
    }

    if (emailValid) {
      setEmailError("*Veuillez entrer une adresse mail");
    } else {
      setEmailError(null);
    }

    const validationError: boolean =
      !passwordValid.isValid ||
      !firstnameValid.isValid ||
      !lastnameValid.isValid ||
      !passwordMatch ||
      emailValid;

    if (validationError) {
      console.log("Il y a une ou plusieurs erreurs dans le formulaire");
    } else {
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

            closeModal();
            console.log("Inscription réussie");
          } else if (response.status === 400) {
            // Gérer le cas où l'email est déjà utilisé
            setEmailError("*Email déjà utilisé");
          } else if (response.status === 500) {
            // Gérer les autres erreurs
            console.log("Erreur du serveur");
          } else {
            console.log("Autre Erreur");
          }
        })

        .catch((error) => console.log("ERREUR:", error));
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
              defaultValue="M"
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
        <div className="flex justify-between items-end pt-5">
          <div className="flex flex-col">
            <Typography
              fontSize="12"
              fontFamily="Franklin"
              textColor="black"
              className="leading-[16px]"
            >
              {lastnameError}
            </Typography>
            <Typography
              fontSize="12"
              fontFamily="Franklin"
              textColor="black"
              className="leading-[16px]"
            >
              {firstnameError}
            </Typography>
            <Typography
              fontSize="12"
              fontFamily="Franklin"
              textColor="black"
              className="leading-[16px]"
            >
              {passwordError}
            </Typography>
            <Typography
              fontSize="12"
              fontFamily="Franklin"
              textColor="black"
              className="leading-[16px]"
            >
              {passwordMatchError}
            </Typography>
            <Typography
              fontSize="12"
              fontFamily="Franklin"
              textColor="black"
              className="leading-[16px]"
            >
              {emailError}
            </Typography>
          </div>
          <Button variant="black" type="submit" className="self-end">
            <Typography fontSize="20" fontFamily="Franklin" textColor="orange">
              S'inscrire
            </Typography>
          </Button>
        </div>
      </Form>
    </>
  );
};

export default SignForm;
