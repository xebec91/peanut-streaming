import CatalogPageLayout from "../../components/catalog/CatalogPageLayout";

const sections = [
  {
    title: "Sport",
    items: [
      { title: "Paris 2024", image: "/images/catalog/paris_2024.png" },
      { title: "Retour à la ligue", image: "/images/catalog/retour_a_la_ligue.png" },
      { title: "Golf Tournament", image: "/images/catalog/golf_tournament.png" },
      { title: "Monaco", image: "/images/catalog/monaco.png" },
      { title: "All Star", image: "/images/catalog/all_star.png" },
    ],
  },
  {
    title: "Mode",
    items: [
      { title: "New York Fashion Week", image: "/images/catalog/new_york_fashion_week.png" },
      { title: "Fashion Show 2023", image: "/images/catalog/fashion_show_2023.png" },
      { title: "Summer Fashion", image: "/images/catalog/summer_fashion.png" },
      { title: "Model Casting", image: "/images/catalog/model_casting.png" },
      { title: "Paris Fashion Week", image: "/images/catalog/paris_fashion_week.png" },
    ],
  },
  {
    title: "Salons",
    items: [
      { title: "E3", image: "/images/catalog/e3.png" },
      { title: "Mondial de l'auto", image: "/images/catalog/mondial_de_l_auto.png" },
      { title: "60 GO!", image: "/images/catalog/60_go.png" },
      { title: "Salon du chocolat", image: "/images/catalog/salon_du_chocolat.png" },
      { title: "Japan Expo", image: "/images/catalog/japan_expo.png" },
    ],
  },
  {
    title: "Conférences",
    items: [
      { title: "Annual Business Conference", image: "/images/catalog/annual_business_conference.png" },
      { title: "Leadership Conference", image: "/images/catalog/leadership_conference.png" },
      { title: "WWDC24", image: "/images/catalog/wwdc24.png" },
      { title: "Tech Conference", image: "/images/catalog/tech_conference.png" },
      { title: "2024 Business Conference", image: "/images/catalog/business_conference_2024.png" },
    ],
  },
  {
    title: "Concerts",
    items: [
      { title: "Evolution Live & Concert", image: "/images/catalog/evolution_live_concert.png" },
      { title: "Music Fest", image: "/images/catalog/music_fest.png" },
      { title: "Pink Floyd", image: "/images/catalog/pink_floyd.png" },
      { title: "Music Festival", image: "/images/catalog/music_festival.png" },
      { title: "Rock Fest", image: "/images/catalog/rock_fest.png" },
    ],
  },
];

function LivesPage() {
  return (
    <CatalogPageLayout
      activePath="/lives"
      sections={sections}
      watchTo="/live/jeux-olympiques"
      inspirationText='En panne d’inspiration ? Essayez le bouton “J’ai de la chance !” pour que nous choisissions un live pour vous !'
    />
  );
}

export default LivesPage;