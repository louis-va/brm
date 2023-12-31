import { MenuItem } from "../design-system/MenuItems";
import { Typography } from "../design-system/Typography";

const softMenu = {
  titre: "Soft",
  items: [
    {
      id: 1,
      titre: "Coca-Cola",
      prix: 3,
    },
    {
      id: 2,
      titre: "Limonade",
      prix: 3,
    },
    {
      id: 3,
      titre: "Sprite",
      prix: 3,
    },
  ],
};

const alcoolMenu = {
  titre: "Alcool",
  items: [
    {
      id: 1,
      titre: "Delta",
      prix: 4,
    },
    {
      id: 2,
      titre: "Orval",
      prix: 5,
    },
    {
      id: 3,
      titre: "Jupiler",
      prix: 3,
    },
  ],
};

const popcornMenu = {
  titre: "Popcorn",
  items: [
    {
      id: 1,
      titre: "Salé",
      prix: 4,
    },
    {
      id: 2,
      titre: "Sucré",
      prix: 4,
    },
    {
      id: 3,
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
            <MenuItem title={item.titre} price={item.prix} key={item.id} />
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
            <MenuItem title={item.titre} price={item.prix} key={item.id} />
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
          <MenuItem title={item.titre} price={item.prix} key={item.id} />
        ))}
      </div>
    </div>
  );
}
