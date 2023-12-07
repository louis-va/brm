import { Form } from "react-router-dom";
import { Input } from "../design-system/Input";
import { Typography } from "../design-system/Typography";
import { Button } from "../design-system/Button";

export default function UserInfo() {
  return (
    <div className="bg-orangePrimary p-30 rounded-25 w-3/5">
      <Typography
        fontSize="40"
        fontFamily="FranklinBold"
        textColor="black"
        component="h1"
        uppercase
        className="text-center"
      >
        Informations personnelles
      </Typography>
      <Form className="w-full flex flex-col gap-5">
        <div className="flex gap-5 justify-between ">
          <Input placeholder="Doe" type="text" label="Nom" variant="orange" />
          <Input
            placeholder="John"
            type="text"
            label="Prénom"
            variant="orange"
          />
        </div>
        <Input
          placeholder="johndoe@gmail.com"
          type="email"
          label="Adresse mail"
          variant="orange"
        />
        <Button variant="black" type="submit" className="self-end">
          <Typography fontSize="20" fontFamily="Franklin" textColor="orange">
            Sauvegarder
          </Typography>
        </Button>
      </Form>
    </div>
  );
}
