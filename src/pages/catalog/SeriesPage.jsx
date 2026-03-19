import CatalogPageLayout from "../../components/catalog/CatalogPageLayout";

const sections = [
  {
    title: "Top 5 du mois",
    items: [
      { title: "George & Tammy", image: "/images/catalog/george_tammy.png" },
      { title: "Star Trek", image: "/images/catalog/star_trek_original_series.png" },
      { title: "90210", image: "/images/catalog/90210.png" },
      { title: "Breaking Bad", image: "/images/catalog/breaking_bad.png" },
      { title: "Landman", image: "/images/catalog/landman.png" },
    ],
  },
  {
    title: "Nouveautés",
    items: [
      { title: "Freaking Fairy Tale", image: "/images/catalog/freaking_fairy_tale.png" },
      { title: "House of Lies", image: "/images/catalog/house_of_lies.png" },
      { title: "Family Legacy", image: "/images/catalog/family_legacy.png" },
      { title: "Escape at Dannemora", image: "/images/catalog/escape_at_dannemora.png" },
      { title: "Ray Donovan", image: "/images/catalog/ray_donovan.png" },
    ],
  },
  {
    title: "Exclusivités",
    items: [
      { title: "Guerre du Pacifique", image: "/images/catalog/guerre_du_pacifique_en_couleurs.png" },
      { title: "Teen Mom OG", image: "/images/catalog/teen_mom_og.png" },
      { title: "1923", image: "/images/catalog/1923.png" },
      { title: "Star Trek Enterprise", image: "/images/catalog/star_trek_enterprise.png" },
      { title: "Waco l'après", image: "/images/catalog/waco_l_apres.png" },
    ],
  },
];

<CatalogPageLayout
  activePath="/series"
  sections={sections}
  watchTo="/serie/breaking-bad"
  inspirationText='En panne d’inspiration ? Essayez le bouton “J’ai de la chance !” pour que nous choisissions une série pour vous !'
/>


function SeriesPage() {
  return (

    <CatalogPageLayout
      activePath="/series"
      sections={sections}
      watchTo="/serie/breaking-bad"
      inspirationText='En panne d’inspiration ? Essayez le bouton “J’ai de la chance !” pour que nous choisissions une série pour vous !'
    />
  );
}

export default SeriesPage;