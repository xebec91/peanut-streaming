import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const featuredContent = {
  title: "Breaking Bad",
  subtitle: "Série mise en avant",
  description:
    "Découvrez les contenus les plus regardés du moment sur Peanut et accédez à une expérience de streaming élégante, immersive et moderne.",
  image: "/images/catalog/breaking_bad.png",
};

const seriesCards = [
  { title: "Breaking Bad", image: "/images/catalog/breaking_bad.png" },
  { title: "90210", image: "/images/catalog/90210.png" },
  { title: "George & Tammy", image: "/images/catalog/george_tammy.png" },
  { title: "Landman", image: "/images/catalog/landman.png" },
];

const filmsCards = [
  { title: "Seul au monde", image: "/images/catalog/seul_au_monde.png" },
  { title: "Préjudice", image: "/images/catalog/prejudice.png" },
  { title: "Vanilla Sky", image: "/images/catalog/vanilla_sky.png" },
  { title: "Jappeloup", image: "/images/catalog/jappeloup.png" },
];

const collectionsCards = [
  { title: "Pulp Fiction", image: "/images/catalog/pulp_fiction.png" },
  { title: "Le Parrain", image: "/images/catalog/le_parrain.png" },
  { title: "Footlose", image: "/images/catalog/footlose.png" },
  { title: "Grease", image: "/images/catalog/grease.png" },
];

const livesCards = [
  { title: "Paris 2024", image: "/images/catalog/paris_2024.png" },
  { title: "Golf Tournament", image: "/images/catalog/golf_tournament.png" },
  { title: "Monaco", image: "/images/catalog/monaco.png" },
  { title: "Music Festival", image: "/images/catalog/music_festival.png" },
];

function HomeHero() {
  return (
    <section className="rounded-[28px] border border-[#ECD698]/40 bg-[#2b2b2b] px-8 py-10 md:px-12 md:py-14">
      <p className="text-sm uppercase tracking-[0.28em] text-white/60">
        Bienvenue sur Peanut
      </p>

      <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-tight text-[#ECD698] md:text-5xl lg:text-6xl">
        Votre plateforme de streaming dédiée aux séries, films, collections et lives
      </h1>

      <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/85 md:text-lg">
        Retrouvez tous vos contenus préférés dans un univers sobre, moderne et fluide.
        Explorez les nouveautés, découvrez des exclusivités et accédez rapidement à
        votre future offre d’abonnement.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          to="/abonnement/offres"
          className="inline-flex h-12 min-w-[220px] items-center justify-center rounded-2xl bg-[#ECD698] px-6 text-base font-semibold text-[#303030] transition hover:opacity-90"
        >
          Sélectionner une offre
        </Link>

        <Link
          to="/series"
          className="inline-flex h-12 min-w-[220px] items-center justify-center rounded-2xl border border-[#ECD698] px-6 text-base font-semibold text-[#ECD698] transition hover:bg-[#ECD698] hover:text-[#303030]"
        >
          Explorer les contenus
        </Link>
      </div>
    </section>
  );
}

function FeaturedBlock() {
  return (
    <section className="mt-12 grid grid-cols-1 gap-8 rounded-[28px] border border-white/10 bg-[#2b2b2b] p-8 md:p-10 lg:grid-cols-[260px_1fr] lg:items-center">
      <div className="max-w-[260px]">
        <div className="aspect-[3/5] overflow-hidden rounded-xl bg-[#262626]">
          <img
            src={featuredContent.image}
            alt={featuredContent.title}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div>
        <p className="text-sm uppercase tracking-[0.24em] text-white/60">
          {featuredContent.subtitle}
        </p>

        <h2 className="mt-3 text-3xl font-bold text-[#ECD698] md:text-4xl">
          {featuredContent.title}
        </h2>

        <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/85 md:text-lg">
          {featuredContent.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            to="/series"
            className="inline-flex h-11 min-w-[180px] items-center justify-center rounded-2xl border border-[#ECD698] px-5 text-sm font-semibold text-[#ECD698] transition hover:bg-[#ECD698] hover:text-[#303030]"
          >
            Voir le catalogue
          </Link>

          <Link
            to="/connexion"
            className="inline-flex h-11 min-w-[180px] items-center justify-center rounded-2xl border border-white/20 px-5 text-sm font-semibold text-white transition hover:border-white hover:bg-white hover:text-[#303030]"
          >
            Se connecter
          </Link>
        </div>
      </div>
    </section>
  );
}

function MediaCard({ title, image }) {
  return (
    <div className="group">
      <div className="aspect-[3/5] overflow-hidden rounded-xl bg-[#262626] shadow-sm">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
        />
      </div>
      <h3 className="mt-3 text-sm font-medium text-white md:text-base">{title}</h3>
    </div>
  );
}

function HomeSection({ title, items, link }) {
  return (
    <section className="mt-14">
      <div className="mb-6 flex items-center justify-between gap-4">
        <h2 className="text-2xl font-semibold text-[#ECD698] md:text-3xl">{title}</h2>

        <Link
          to={link}
          className="text-sm font-medium text-white/80 transition hover:text-white"
        >
          Voir plus
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => (
          <MediaCard key={item.title} title={item.title} image={item.image} />
        ))}
      </div>
    </section>
  );
}

function OfferBlock() {
  return (
    <section className="mt-16 rounded-[28px] border border-[#ECD698]/40 bg-[#2b2b2b] px-8 py-10 text-center md:px-12 md:py-14">
      <p className="text-sm uppercase tracking-[0.24em] text-white/60">
        Abonnement
      </p>

      <h2 className="mt-4 text-3xl font-bold text-[#ECD698] md:text-5xl">
        Vous n’avez pas encore d’offre
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
        Choisissez votre abonnement Peanut pour débloquer tous les contenus de la
        plateforme et profiter pleinement de votre expérience de streaming.
      </p>

      <div className="mt-8">
        <Link
          to="/abonnement/offres"
          className="inline-flex h-12 min-w-[240px] items-center justify-center rounded-2xl bg-[#ECD698] px-6 text-base font-semibold text-[#303030] transition hover:opacity-90"
        >
          Sélectionner une offre
        </Link>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <div className="min-h-screen bg-[#303030] text-white">
      <Header />

      <main className="mx-auto max-w-[1440px] px-6 py-10 md:px-10 lg:px-16">
        <HomeHero />
        <FeaturedBlock />

        <HomeSection title="Séries" items={seriesCards} link="/series" />
        <HomeSection title="Films" items={filmsCards} link="/films" />
        <HomeSection title="Collections" items={collectionsCards} link="/collections" />
        <HomeSection title="Lives" items={livesCards} link="/lives" />

        <OfferBlock />
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;