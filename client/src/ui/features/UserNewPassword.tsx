import { Form } from "react-router-dom";
import { Input } from "../design-system/Input";
import { Typography } from "../design-system/Typography";
import { Button } from "../design-system/Button";

export default function UserNewPassword() {
  return (
    <div className="bg-orangePrimary p-30 rounded-25">
      <Typography
        fontSize="40"
        fontFamily="FranklinBold"
        textColor="black"
        component="h1"
        uppercase
        className="text-center"
      >
        Nouveau mot de passe
      </Typography>
      <Form className="w-full flex flex-col gap-5">
        <Input
          placeholder="*********"
          type="password"
          label="Nouveau mot de passe"
          variant="orange"
        />
        <Input
          placeholder="*********"
          type="password"
          label="Resaisir votre nouveau mot de passe"
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
