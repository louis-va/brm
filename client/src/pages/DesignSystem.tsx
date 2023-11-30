import { Image } from "../ui/design-system/Image";
import { BtnPlusMinus } from "../ui/design-system/BtnPlusMinus";
import { Button } from "../ui/design-system/Button";
import { Input } from "../ui/design-system/Input";
import { Tag } from "../ui/design-system/Tag";
import { Typography } from "../ui/design-system/Typography";

export default function DesignSystem() {
  return (
    <div className="bg-blackPrimary w-screen h-full p-30 flex flex-col gap-50">
      <div className="p-30 bg-orangePrimary rounded-25">
        <Typography
          fontSize="96"
          textColor="black"
          fontFamily="FranklinBold"
          uppercase={true}
          hoverTextColor="white"
        >
          Title 1
        </Typography>
        <Typography
          fontSize="64"
          textColor="black"
          fontFamily="FranklinBold"
          uppercase={true}
        >
          Title 2
        </Typography>
        <Typography
          fontSize="40"
          textColor="black"
          fontFamily="FranklinBold"
          uppercase={true}
        >
          Title 3
        </Typography>
        <Typography fontSize="32" textColor="black" fontFamily="Franklin">
          Texte 1
        </Typography>
        <Typography fontSize="20" textColor="black" fontFamily="Franklin">
          Texte 2
        </Typography>
      </div>

      <div className="p-30 bg-orangePrimary rounded-25 flex gap-10">
        <Button variant="orange">
          <Typography fontSize="20" textColor="black" fontFamily="Franklin">
            Bouton 1
          </Typography>
        </Button>
        <Button variant="black">
          <Typography fontSize="20" textColor="orange" fontFamily="Franklin">
            Bouton 2
          </Typography>
        </Button>
        <Button variant="orange" icon>
          <Typography fontSize="20" textColor="black" fontFamily="Franklin">
            Bouton 3
          </Typography>
        </Button>
        <Button variant="black" icon>
          <Typography fontSize="20" textColor="orange" fontFamily="Franklin">
            Test
          </Typography>
        </Button>
        <BtnPlusMinus plus />
        <BtnPlusMinus />
      </div>

      <div className="p-30 bg-orangePrimary rounded-25 flex gap-10">
        <Input type="text" placeholder="John" label="Nom" />
        <Input type="text" placeholder="Doe" label="Prénom" />
        <Input
          type="email"
          placeholder="johndoe@gmail.com"
          label="Adresse mail"
          variant="black"
        />
        <Input
          type="password"
          placeholder="Password"
          label="Mot de passe"
          variant="black"
        />


      <div className="p-30 bg-orangePrimary rounded-25 flex gap-10">
        <Tag bgColor="black">Tag 1</Tag>
        <Tag bgColor="orange">Tag 2</Tag>
        <Tag bgColor="black" rounded={false}>
          Tag 4
        </Tag>
        <Tag bgColor="orange" rounded={false}>
          Tag 4
        </Tag>
        <Tag bgColor="white" rounded={false}>
          Tag 4
        </Tag>
      </div>
      <div className="p-30 bg-orangePrimary rounded-25 gap-10 w-full">
        <Image
          src="https://images.unsplash.com/photo-1682685794761-c8e7b2347702?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Image horizontale"
          horizontal={true}
        />
        <Image
          src="https://images.unsplash.com/photo-1699461840896-de3ae8c46de8?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image verticale"
        />
      </div>
    </div>
  );
}
