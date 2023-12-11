import { Form } from "react-router-dom";
import { Select } from "../design-system/Select";
import { Typography } from "../design-system/Typography";
import { Input } from "../design-system/Input";
import { Button } from "../design-system/Button";

export default function LogForm() {
  return (
    <>
      <Form className="w-full flex flex-col gap-5">
        <div className="flex gap-5 justify-between ">
          <div className="flex w-1/2 gap-5">
          <Select 
                label="Genre" 
                variant="orange" 
                className="w-[100px]"
                options={[
                    { value: "homme", label: "Mr" },
                    { value: "femme", label: "Mme" },
                    { value: "autre", label: "Autre" },
                ]}
              /> 
            <Input 
                placeholder="Doe" 
                type="text" 
                label="Nom" 
                variant="orange" 
            />
          </div>
          <div className="w-1/2">
          <Input
                placeholder="John"
                type="text"
                label="Prénom"
                variant="orange"
          />
          </div>
        </div>

        <div className="flex gap-5 justify-between ">
            <Input
                placeholder="DD/MM/YYYY"
                type="text"
                label="Date de naissance"
                variant="orange"
            />
            <Input
                  placeholder="johndoe@gmail.com"
                  type="text"
                  label="Adresse mail"
                  variant="orange"
            />           
        </div>

        <div className="flex gap-5 justify-between ">
            <Input
                placeholder="*********"
                type="password"
                label="Mot de passe"
                variant="orange"
            />
            <Input
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






