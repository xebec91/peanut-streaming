import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import PlayerHero from "../../components/media/PlayerHero";
import PosterRow from "../../components/media/PosterRow";
import SeriesActions from "../../components/media/SeriesActions";

const similarItems = [
  { title: "El Camino", image: "/images/catalog/el_camino.png" },
  { title: "Narcos", image: "/images/catalog/narcos_rise_of_the_cartels.png" },
  { title: "La Casa de Papel", image: "/images/catalog/la_casa_de_papel.png" },
  { title: "Better Call Saul", image: "/images/catalog/better_call_saul.png" },
  { title: "Snowfall", image: "/images/catalog/snowfall.png" },
];

const recommendationItems = [
  { title: "Freaking Fairy Tale", image: "/images/catalog/freaking_fairy_tale.png" },
  { title: "House of Lies", image: "/images/catalog/house_of_lies.png" },
  { title: "Family Legacy", image: "/images/catalog/family_legacy.png" },
  { title: "Escape at Dannemora", image: "/images/catalog/escape_at_dannemora.png" },
  { title: "Ray Donovan", image: "/images/catalog/ray_donovan.png" },
];

function SeriesDetailPage() {
  return (
    <div className="min-h-screen bg-[#303030] text-white">
      <Header activePath="/series" />

      <main className="mx-auto max-w-[1440px] px-6 py-4 md:px-10 lg:px-16">
        <PlayerHero
          title="BREAKING BAD S5 E14"
          image="/images/catalog/breaking_badd.png"
        />

        <section className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_360px]">
          <div>
            <h1 className="text-2xl font-bold text-[#ECD698] md:text-3xl lg:text-4xl">
              Breaking Bad S5 E14: Seul au monde
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#ECD698] md:text-xl lg:text-2xl">
              Alors que la série touche à sa fin, chacun doit gérer la nouvelle donne.
            </p>
          </div>

          <SeriesActions />
        </section>

        <PosterRow title="Similaires à Breaking Bad" items={similarItems} />
        <PosterRow title="Recommandations" items={recommendationItems} />
      </main>

      <Footer />
    </div>
  );
}

export default SeriesDetailPage;