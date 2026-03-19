import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import PlayerHero from "../../components/media/PlayerHero";
import PosterRow from "../../components/media/PosterRow";

const similarItems = [
  { title: "Warcraft", image: "/images/catalog/warcraft.png" },
  { title: "Game of Thrones", image: "/images/catalog/game_of_thrones.png" },
  { title: "Lord of the Rings", image: "/images/catalog/lord_of_the_rings.png" },
  { title: "House of the Dragon", image: "/images/catalog/house_of_the_dragon.png" },
  { title: "Kaamelott", image: "/images/catalog/kaamelott.png" },
];

const recommendationItems = [
  { title: "Freaking Fairy Tale", image: "/images/catalog/freaking_fairy_tale.png" },
  { title: "House of Lies", image: "/images/catalog/house_of_lies.png" },
  { title: "Family Legacy", image: "/images/catalog/family_legacy.png" },
  { title: "Escape at Dannemora", image: "/images/catalog/escape_at_dannemora.png" },
  { title: "Ray Donovan", image: "/images/catalog/ray_donovan.png" },
];

function FilmDetailPage() {
  return (
    <div className="min-h-screen bg-[#303030] text-white">
      <Header activePath="/films" />

      <main className="mx-auto max-w-[1440px] px-6 py-4 md:px-10 lg:px-16">
        <PlayerHero
          title="DONJONS & DRAGONS : L’HONNEUR DES VOLEURS"
          image="/images/catalog/donjons_dragonss.png"
        />

        <section className="mt-8">
          <h1 className="text-2xl font-bold text-[#ECD698] md:text-3xl lg:text-4xl">
            DONJONS & DRAGONS: L’honneur des voleurs (2023)
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#ECD698] md:text-xl lg:text-2xl">
            Un voleur attachant et un groupe d’aventuriers disparates entreprennent un
            raid risqué pour récupérer une relique perdue. Mais leur mission risque
            d'échouer lorsqu'ils s'attaquent aux mauvaises personnes en chemin.
          </p>
        </section>

        <PosterRow title="Similaires à Donjons & Dragons" items={similarItems} />
        <PosterRow title="Recommandations" items={recommendationItems} />
      </main>

      <Footer />
    </div>
  );
}

export default FilmDetailPage;