import { useState } from "react";
import { Layout } from "../ui/design-system/Layout";
import { Typography } from "../ui/design-system/Typography";
import { Tickets } from "../ui/features/Tickets";
import UserInfo from "../ui/features/UserInfo";
import UserNewPassword from "../ui/features/UserNewPassword";
import { estAnterieure } from "../ui/features/functions/isPast";

const tickets = [
  {
    title: "Monka",
    date: "05/12",
    hour: "22:00",
    img: "https://www.themoviedb.org/t/p/w440_and_h660_face/aKK2C3SErXIhNdT9gI93as2b8GV.jpg",
  },
  {
    title: "Monka",
    date: "12/12",
    hour: "22:00",
    img: "https://www.themoviedb.org/t/p/w440_and_h660_face/aKK2C3SErXIhNdT9gI93as2b8GV.jpg",
  },
  {
    title: "Monka",
    date: "12/12",
    hour: "22:00",
    img: "https://www.themoviedb.org/t/p/w440_and_h660_face/aKK2C3SErXIhNdT9gI93as2b8GV.jpg",
  },
  {
    title: "Monka",
    date: "12/12",
    hour: "22:00",
    img: "https://www.themoviedb.org/t/p/w440_and_h660_face/aKK2C3SErXIhNdT9gI93as2b8GV.jpg",
  },
  {
    title: "Oppenheimer",
    date: "11/01",
    hour: "17:00",
    img: "https://www.themoviedb.org/t/p/w440_and_h660_face/boAUuJBeID7VNp4L7LNMQs8mfQS.jpg",
  },
  {
    title: "Top Gun : Maverick",
    date: "08/12",
    hour: "17:00",
    img: "https://www.themoviedb.org/t/p/w440_and_h660_face/kTh1s6I6yUyk2OGiRoGkDTYTS6K.jpg",
  },
];

export default function UserProfile() {
  // État local pour suivre l'onglet actif
  const [ongletActif, setOngletActif] = useState<string>("ticketsActifs");

  // Fonction pour changer l'onglet actif
  const changerOnglet = (nouvelOnglet: string) => {
    setOngletActif(nouvelOnglet);
  };

  return (
    <Layout>
      {/* Feature Infos user + New password */}
      <div className="flex flex-col gap-30 w-3/5">
        <UserInfo />
        <UserNewPassword />
      </div>

      {/* Feature Tickets actif/historique */}
      <div className="flex flex-col gap-30 w-2/5 p-30 bg-whitePrimary rounded-40">
        <div className="flex justify-between">
          <Typography
            fontSize="64"
            fontFamily="FranklinBold"
            textColor="black"
            uppercase
            component="h2"
            className="leading-none"
          >
            Tickets
          </Typography>
          <div className="flex self-end divide-x-2 justify-center divide-orangePrimary leading-none gap-2">
            <button onClick={() => changerOnglet("ticketsActifs")}>
              <Typography
                fontSize="20"
                fontFamily="Franklin"
                textColor="orange"
                className="cursor-pointer"
                underline={ongletActif === "ticketsActifs" ? true : false}
              >
                Actifs
              </Typography>
            </button>
            <button onClick={() => changerOnglet("ticketsHistorique")}>
              <Typography
                fontSize="20"
                fontFamily="Franklin"
                textColor="orange"
                className="pl-2 cursor-pointer"
                underline={ongletActif === "ticketsHistorique" ? true : false}
              >
                Historique
              </Typography>
            </button>
          </div>
        </div>
        {ongletActif === "ticketsActifs" && (
          <>
            {tickets.map((item, index) => {
              const isPast = estAnterieure(item.date, item.hour);

              return !isPast ? null : (
                <Tickets
                  key={index}
                  actif={isPast}
                  title={item.title}
                  date={item.date}
                  hour={item.hour}
                  img={item.img}
                />
              );
            })}
          </>
        )}

        {ongletActif === "ticketsHistorique" && (
          <>
            {tickets.map((item, index) => {
              const isPast = estAnterieure(item.date, item.hour);

              return isPast ? null : (
                <Tickets
                  key={index}
                  actif={isPast}
                  title={item.title}
                  date={item.date}
                  hour={item.hour}
                  img={item.img}
                />
              );
            })}
          </>
        )}
      </div>
    </Layout>
  );
}
