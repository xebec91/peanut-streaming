import CatalogPageLayout from "../../components/catalog/CatalogPageLayout";

const sections = [
  {
    title: "Cultissimes",
    items: [
      { title: "Le Flic de Beverly Hills", image: "/images/catalog/le_flic_de_beverly_hills.png" },
      { title: "Footlose", image: "/images/catalog/footlose.png" },
      { title: "Grease", image: "/images/catalog/grease.png" },
      { title: "Pulp Fiction", image: "/images/catalog/pulp_fiction.png" },
      { title: "Le Parrain", image: "/images/catalog/le_parrain.png" },
    ],
  },
  {
    title: "Blockbusters",
    items: [
      { title: "Mission Impossible Fallout", image: "/images/catalog/mission_impossible_fallout.png" },
      { title: "Le Roi David", image: "/images/catalog/le_roi_david.png" },
      { title: "Bumblebee", image: "/images/catalog/bumblebee.png" },
      { title: "Sous haute pression", image: "/images/catalog/sous_haute_pression.png" },
      { title: "Ninja Turtles 2", image: "/images/catalog/ninja_turtles_2.png" },
    ],
  },
  {
    title: "Indépendants",
    items: [
      { title: "Arizona Dream", image: "/images/catalog/arizona_dream.png" },
      { title: "L'odyssée", image: "/images/catalog/l_odyssee.png" },
      { title: "In & Out", image: "/images/catalog/in_and_out.png" },
      { title: "Quatre Frères", image: "/images/catalog/quatre_freres.png" },
      { title: "Ma saison préférée", image: "/images/catalog/ma_saison_preferee.png" },
    ],
  },
];

function CollectionsPage() {
  return (
    <CatalogPageLayout
      activePath="/collections"
      sections={sections}
      watchTo="/collection/pulp-fiction"
      inspirationText='En panne d’inspiration ? Essayez le bouton “J’ai de la chance !” pour que nous choisissions un film pour vous !'
    />
  );
}

export default CollectionsPage;