import { MenuItem } from "../design-system/MenuItems";
import { Typography } from "../design-system/Typography";

const softMenu = {
  titre: "Soft",
  items: [
    {
      titre: "Coca-Cola",
      prix: 3,
    },
    {
      titre: "Limonade",
      prix: 3,
    },
    {
      titre: "Sprite",
      prix: 3,
    },
  ],
};

const alcoolMenu = {
  titre: "Alcool",
  items: [
    {
      titre: "Delta",
      prix: 4,
    },
    {
      titre: "Orval",
      prix: 5,
    },
    {
      titre: "Jupiler",
      prix: 3,
    },
  ],
};

const popcornMenu = {
  titre: "Popcorn",
  items: [
    {
      titre: "Salé",
      prix: 4,
    },
    {
      titre: "Sucré",
      prix: 4,
    },
    {
      titre: "Sucré/Salé",
      prix: 4,
    },
  ],
};

export default function FoodMenu() {
  return (
    <div className="flex">
      <div className="w-1/2 flex flex-col bg-whitePrimary p-30 rounded-40 gap-50 justify-between">
        <div>
          <Typography
            fontSize="32"
            fontFamily="FranklinBold"
            textColor="black"
            uppercase
            className="text-center"
          >
            {softMenu.titre}
          </Typography>
          {softMenu.items.map((item) => (
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
            {alcoolMenu.titre}
          </Typography>
          {alcoolMenu.items.map((item) => (
            <MenuItem title={item.titre} price={item.prix} />
          ))}
        </div>
      </div>

      <div className="w-1/2 flex flex-col bg-whitePrimary p-30 rounded-40 ">
        <Typography
          fontSize="32"
          fontFamily="FranklinBold"
          textColor="black"
          uppercase
          className="text-center"
        >
          {popcornMenu.titre}
        </Typography>
        {popcornMenu.items.map((item) => (
          <MenuItem title={item.titre} price={item.prix} />
        ))}
      </div>
    </div>
  );
}
