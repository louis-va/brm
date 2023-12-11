import { Form } from "react-router-dom";
import { Typography } from "../design-system/Typography"
import { Input } from "../design-system/Input"
import { Button } from "../design-system/Button"

export default function SignForm() {
  return (
    <>
    <Form className="w-full flex flex-col gap-5">
        <div className="flex gap-5 justify-between">
          <Input 
            placeholder="johndoe@gmail.com"
            type="email"
            label="Adresse mail"
            variant="orange"
          />
          <Input
            placeholder="*********"
            type="password"
            label="Mot de passe"
            variant="orange"
            />
        </div>
        <Button variant="black" type="submit" className="self-end">
          <Typography fontSize="20" fontFamily="Franklin" textColor="orange">
            Se connecter
          </Typography>
        </Button>
      </Form>
    </>
  )
}


