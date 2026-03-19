import CatalogPageLayout from "../../components/catalog/CatalogPageLayout";

const sections = [
  {
    title: "Top 5 du mois",
    items: [
      { title: "Seul au monde", image: "/images/catalog/seul_au_monde.png" },
      { title: "Préjudice", image: "/images/catalog/prejudice.png" },
      { title: "The Devil Inside", image: "/images/catalog/the_devil_inside.png" },
      { title: "Vanilla Sky", image: "/images/catalog/vanilla_sky.png" },
      { title: "Préserver nos trésors", image: "/images/catalog/preserver_nos_tresors.png" },
    ],
  },
  {
    title: "Nouveautés",
    items: [
      { title: "Donjons & Dragons", image: "/images/catalog/donjons_dragons.png" },
      { title: "Shirley Valentine", image: "/images/catalog/shirley_valentine.png" },
      { title: "A Bigger Splash", image: "/images/catalog/a_bigger_splash.png" },
      { title: "L'appartement 7A", image: "/images/catalog/l_appartement_7a.png" },
      { title: "Préserver nos trésors", image: "/images/catalog/preserver_nos_tresors.png" },
    ],
  },
  {
    title: "Exclusivités",
    items: [
      { title: "Love Story", image: "/images/catalog/love_story.png" },
      { title: "Camille Claudel", image: "/images/catalog/camille_claudel.png" },
      { title: "Monster High 2", image: "/images/catalog/monster_high_2.png" },
      { title: "Jappeloup", image: "/images/catalog/jappeloup.png" },
      { title: "Transformers", image: "/images/catalog/transformers_rise_of_the_beasts.png" },
    ],
  },
];

function FilmsPage() {
  return (
    <CatalogPageLayout
      activePath="/films"
      sections={sections}
      watchTo="/film/donjons-dragons"
      inspirationText='En panne d’inspiration ? Essayez le bouton “J’ai de la chance !” pour que nous choisissions un film pour vous !'
    />
  );
}

export default FilmsPage;