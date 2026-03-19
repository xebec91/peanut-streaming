import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import PlayerHero from "../../components/media/PlayerHero";
import PosterRow from "../../components/media/PosterRow";

const similarItems = [
  { title: "The Hateful Eight", image: "/images/catalog/the_hateful_eight.png" },
  { title: "Inglourious Basterds", image: "/images/catalog/inglourious_basterds.png" },
  { title: "Django Unchained", image: "/images/catalog/django_unchained.png" },
  { title: "Kill Bill", image: "/images/catalog/kill_bill_volume_1.png" },
  { title: "Once Upon a Time in Hollywood", image: "/images/catalog/once_upon_a_time_in_hollywood.png" },
];

const recommendationItems = [
  { title: "Freaking Fairy Tale", image: "/images/catalog/freaking_fairy_tale.png" },
  { title: "House of Lies", image: "/images/catalog/house_of_lies.png" },
  { title: "Family Legacy", image: "/images/catalog/family_legacy.png" },
  { title: "Escape at Dannemora", image: "/images/catalog/escape_at_dannemora.png" },
  { title: "Ray Donovan", image: "/images/catalog/ray_donovan.png" },
];

function CollectionDetailPage() {
  return (
    <div className="min-h-screen bg-[#303030] text-white">
      <Header activePath="/collections" />

      <main className="mx-auto max-w-[1440px] px-6 py-4 md:px-10 lg:px-16">
        <PlayerHero
          title="PULP FICTION"
          image="/images/catalog/pulp_fictionn.png"
        />

        <section className="mt-8">
          <h1 className="text-2xl font-bold text-[#ECD698] md:text-3xl lg:text-4xl">
            PULP FICTION (1994)
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#ECD698] md:text-xl lg:text-2xl">
            L'odyssée sanglante et burlesque de petits malfrats dans la jungle de
            Hollywood à travers trois histoires qui s'entremêlent. Dans un restaurant,
            un couple de jeunes braqueurs, Pumpkin et Yolanda, discutent des risques
            que comporte leur activité. Deux truands, Jules Winnfield et son ami Vincent
            Vega, qui reviennent d'Amsterdam, ont pour mission de récupérer une mallette
            au contenu mystérieux et de la rapporter à Marsellus Wallace.
          </p>
        </section>

        <PosterRow title="D’autres films de Quentin Tarantino" items={similarItems} />
        <PosterRow title="Recommandations" items={recommendationItems} />
      </main>

      <Footer />
    </div>
  );
}

export default CollectionDetailPage;