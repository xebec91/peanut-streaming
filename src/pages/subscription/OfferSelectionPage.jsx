import { Link } from "react-router-dom";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

function OfferCard({
  title,
  price,
  features,
  description,
  selected = false,
  buttonLabel,
  buttonTo,
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-[430px] border border-[#ECD698] bg-transparent p-6 text-[#ECD698]">
        <div className="flex items-start justify-between">
          <h2 className="text-3xl font-semibold">{title}</h2>
          <div
            className={`h-12 w-12 rounded-full border-2 ${
              selected ? "border-[#ECD698] bg-[#ECD698]" : "border-white bg-transparent"
            }`}
          />
        </div>

        <div className="mt-8">
          <div className="flex items-end gap-2">
            <span className="text-5xl font-semibold">{price}</span>
            <div className="leading-tight">
              <p className="text-2xl font-semibold">EUR</p>
              <p className="text-2xl font-semibold">/Mois</p>
            </div>
          </div>

          <p className="mt-5 text-2xl font-semibold">7 Jours GRATUITS</p>
          <p className="mt-2 text-xl">Renouvellement automatique sauf résiliation</p>
        </div>

        <div className="mt-8 h-px w-full bg-white/70" />

        <ul className="mt-6 space-y-3 text-xl">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <span className="mt-0.5 text-white">✔</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex justify-center">
          <Link
            to={buttonTo}
            className="inline-flex min-h-[58px] min-w-[280px] items-center justify-center rounded-2xl border border-[#ECD698] px-6 text-2xl font-semibold text-[#ECD698] transition hover:bg-[#ECD698] hover:text-[#303030]"
          >
            {buttonLabel}
          </Link>
        </div>
      </div>

      <p className="mt-5 max-w-[360px] text-center text-xs leading-relaxed text-white/80">
        {description}
      </p>
    </div>
  );
}

function OfferSelectionPage() {
  return (
    <div className="min-h-screen bg-[#303030] text-white">
      <Header />

      <main className="mx-auto max-w-[1440px] px-6 py-14 md:px-10 lg:px-16">
        <section>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-end">
            <h1 className="text-4xl font-semibold text-[#ECD698] md:text-5xl">
              Choisissez votre offre
            </h1>

            <h2 className="text-4xl font-semibold text-[#ECD698] md:text-5xl lg:text-right">
              Commencez avec 7 jours d'essai gratuit
            </h2>
          </div>

          <div className="mt-6 h-px w-full bg-white/70" />

          <div className="mt-16 grid grid-cols-1 gap-10 xl:grid-cols-2 xl:gap-12">
            <OfferCard
              title="Standard"
              price="€7,99"
              selected
              buttonLabel="Choisir Cette Offre"
              buttonTo="/abonnement/paiement"
              features={[
                "Expérience en Full HD",
                "Lecture sur 2 appareils à la fois",
                "Lecture sur TV, ordinateurs et appareils mobiles compatibles",
                "Téléchargement et lecture hors-ligne",
              ]}
              description="La HD est disponible sur une sélection de titres, sous réserve de votre connexion internet et des fonctionnalités de votre appareil. Tous les abonnements incluent des bandes-annonces avant/après les contenus et des parrainages (ou similaires). La TV en direct (si disponible) comprend des coupures publicitaires."
            />

            <OfferCard
              title="Premium"
              price="€10,99"
              buttonLabel="Choisir Cette Offre"
              buttonTo="/abonnement/paiement"
              features={[
                "Expérience en 4K UHD, HDR10, Dolby Vision et Dolby Atmos",
                "Lecture sur 4 appareils à la fois",
                "Lecture sur TV, ordinateurs et appareils mobiles compatibles",
                "Téléchargement et lecture hors-ligne",
              ]}
              description="Les formats 4K, HDR10, Dolby Vision et Dolby Atmos sont disponibles sur une sélection de titres, sous réserve de votre connexion internet et des fonctionnalités de votre appareil. Tous les abonnements incluent des bandes-annonces avant/après les contenus et des parrainages (ou similaires). La TV en direct (si disponible) comprend des coupures publicitaires."
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default OfferSelectionPage;