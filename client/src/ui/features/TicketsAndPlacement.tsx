import { FaXmark } from "react-icons/fa6";
import { MenuItem } from "../design-system/MenuItems";
import { Typography } from "../design-system/Typography";

const ticketsMenu = {
  titre: "Tarifs & Réservations",
  items: [
    {
      titre: "Adulte",
      prix: 8,
    },
    {
      titre: "Enfant",
      prix: 3,
    },
    {
      titre: "Etudiant",
      prix: 3,
    },
  ],
};

export default function TicketsAndPlacement() {
  return (
    <div className="flex">
      <div className="w-3/5 flex flex-col bg-whitePrimary p-30 rounded-40 gap-50 justify-between">
        <div>
          <Typography
            fontSize="32"
            fontFamily="FranklinBold"
            textColor="black"
            uppercase
            className="text-center"
          >
            {ticketsMenu.titre}
          </Typography>
          {ticketsMenu.items.map((item) => (
            <MenuItem title={item.titre} price={item.prix} />
          ))}
        </div>
        <div>
          <Typography
            fontSize="32"
            fontFamily="FranklinBold"
            textColor="black"
            uppercase
            className="text-center"
          >
            Formule 5 places
          </Typography>
          <MenuItem title="5 Places" price={35} />
        </div>
      </div>
      <div className="w-2/5 bg-whitePrimary p-30 rounded-40 flex flex-col justify-between">
        <Typography
          fontSize="32"
          fontFamily="FranklinBold"
          textColor="black"
          uppercase
          className="text-center"
        >
          Placement
        </Typography>

        {/* TODO: Placement component, depend of what return backend for seat available or not */}
        {/* https://chat.openai.com/share/3e3a6726-6901-4370-8c03-561e14899770 */}

        <div className="flex gap-5 justify-center">
          <div className="flex gap-2 items-center">
            <div className="w-5 h-5 bg-blackPrimary rounded-[5px]"></div>
            <Typography fontSize="15" fontFamily="Franklin" textColor="black">
              Libre
            </Typography>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-5 h-5 bg-orangePrimary rounded-[5px]"></div>
            <Typography fontSize="15" fontFamily="Franklin" textColor="black">
              Sélectionné
            </Typography>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-5 h-5 bg-blackPrimary rounded-[5px] flex justify-center items-center">
              <FaXmark className="fill-orangePrimary" />
            </div>
            <Typography fontSize="15" fontFamily="Franklin" textColor="black">
              Occupé
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
