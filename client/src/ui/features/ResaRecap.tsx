import { Button } from "../design-system/Button";
import { Tag } from "../design-system/Tag";
import { Typography } from "../design-system/Typography";

const filmData = {
  titre: "Call Me By Your Name",
  producteur: "Luca Guadagnino",
  acteurs: "Timothée Chalamet, Armie Hammer, Michael Stuhlbarg",
  genre: ["Romance", "Drame"],
  dateSceance: "27/12",
  heureSceance: "21:15",
  synopsis:
    "Elio, 17 ans, fils d’un professeur d’université, musicien, sensible et cultivé, attend comme chaque année “l’invité de l’été”, un étudiant en provenance de New York qui doit venir pour travailler sur sa thèse. Celui-ci s’appelle Oliver, et sa beauté et sa désinvolture ne manquent pas de faire tourner bien des têtes. Elio aussi est subjugué : ils parlent de films, de livres, font de longues promenades, vont nager. Entre eux vont naître sans crier gare des désirs nouveaux, qu’ils vivront avec une grande intensité.",
};

export default function ResaRecap() {
  return (
    <div className="flex flex-col gap-20">
      <div>
        <Typography
          fontSize="32"
          fontFamily="FranklinBold"
          textColor="black"
          uppercase
          className="text-center"
        >
          {filmData.titre}
        </Typography>
        <div className="flex justify-around">
          <Tag bgColor="orange">{filmData.heureSceance}</Tag>
          <Tag bgColor="black">{filmData.dateSceance}</Tag>
        </div>
      </div>
      <Typography
        fontSize="20"
        fontFamily="Franklin"
        textColor="black"
        className="text-center"
      >
        Veuillez sélectionner votre place assise avant d'effectuer le paiement
      </Typography>
      <Button variant="black" className="flex justify-center">
        <Typography fontSize="20" fontFamily="Franklin" textColor="orange">
          Réserver
        </Typography>
      </Button>
    </div>
  );
}
