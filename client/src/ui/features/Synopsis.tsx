import { Tag } from "../design-system/Tag";
import { Typography } from "../design-system/Typography";

export default function Synopsis() {
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

  const titreFilm = filmData.titre;
  const producteur = filmData.producteur;
  const acteurs = filmData.acteurs;
  const genres = filmData.genre;
  const dateSceance = filmData.dateSceance;
  const heureSceance = filmData.heureSceance;
  const synopsis = filmData.synopsis;

  return (
    <>
      <div className="flex flex-col bg-whitePrimary p-30 rounded-40 w-3/4 gap-5">
        <div className="flex gap-5 w-full">
          <Tag bgColor="white">{heureSceance}</Tag>
          <Tag bgColor="black">{dateSceance}</Tag>
        </div>

        <div className="leading-none">
          <Typography
            fontSize="40"
            fontFamily="FranklinBold"
            textColor="black"
            uppercase
            className="text-center"
          >
            {titreFilm}
          </Typography>
          <Typography
            fontSize="20"
            fontFamily="FranklinBold"
            textColor="black"
            uppercase
            className="text-center"
          >
            by {producteur}
          </Typography>
        </div>

        <div className="flex flex-col gap-8">
          <Typography
            fontSize="32"
            fontFamily="FranklinBold"
            textColor="black"
            uppercase
          >
            Avec {acteurs}
          </Typography>
          <div className="flex gap-5">
            {genres.map((genre) => (
              <Tag bgColor="black" rounded={false}>
                {genre}
              </Tag>
            ))}
          </div>
          <Typography fontSize="20" fontFamily="Franklin" textColor="black">
            {synopsis}
          </Typography>
        </div>
      </div>
    </>
  );
}
