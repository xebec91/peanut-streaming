import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

function PaymentInfoCard({ children }) {
  return (
    <div className="border border-[#ECD698] p-6 text-[#ECD698]">
      {children}
    </div>
  );
}

function PaymentPage() {
  return (
    <div className="min-h-screen bg-[#303030] text-white">
      <Header />

      <main className="mx-auto max-w-[1440px] px-6 py-14 md:px-10 lg:px-16">
        <section>
          <h1 className="mb-14 text-center text-4xl font-semibold text-[#ECD698] md:text-5xl">
            Ajouter un mode de paiement
          </h1>

          <div className="grid grid-cols-1 gap-12 xl:grid-cols-[1fr_1.05fr]">
            <div>
              <div className="mb-8 w-fit">
                <div className="flex items-center gap-4 text-4xl font-bold">
                  <span className="text-[#1A5FB4]">VISA</span>
                  <span className="h-10 w-10 rounded-full bg-red-600 opacity-95" />
                  <span className="-ml-5 h-10 w-10 rounded-full bg-orange-500 opacity-95" />
                </div>
                <div className="mt-5 h-px w-[310px] bg-white/70" />
              </div>

              <form className="space-y-5">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Prénom"
                    className="h-16 border border-[#ECD698] bg-transparent px-5 text-2xl font-semibold text-[#ECD698] outline-none placeholder:text-[#ECD698]"
                  />
                  <input
                    type="text"
                    placeholder="Nom"
                    className="h-16 border border-[#ECD698] bg-transparent px-5 text-2xl font-semibold text-[#ECD698] outline-none placeholder:text-[#ECD698]"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Adresse"
                  className="h-16 w-full border border-[#ECD698] bg-transparent px-5 text-2xl font-semibold text-[#ECD698] outline-none placeholder:text-[#ECD698]"
                />

                <input
                  type="text"
                  placeholder="Ville"
                  className="h-16 w-full border border-[#ECD698] bg-transparent px-5 text-2xl font-semibold text-[#ECD698] outline-none placeholder:text-[#ECD698]"
                />

                <input
                  type="text"
                  placeholder="Code Postal"
                  className="h-16 w-full border border-[#ECD698] bg-transparent px-5 text-2xl font-semibold text-[#ECD698] outline-none placeholder:text-[#ECD698]"
                />

                <input
                  type="text"
                  placeholder="Pays"
                  className="h-16 w-full border border-[#ECD698] bg-transparent px-5 text-2xl font-semibold text-[#ECD698] outline-none placeholder:text-[#ECD698]"
                />

                <div className="grid grid-cols-1 gap-4 md:grid-cols-[1.8fr_0.85fr_0.85fr]">
                  <input
                    type="text"
                    placeholder="Numéro de Carte"
                    className="h-16 border border-[#ECD698] bg-transparent px-5 text-2xl font-semibold text-[#ECD698] outline-none placeholder:text-[#ECD698]"
                  />
                  <input
                    type="text"
                    placeholder="MM/AN"
                    className="h-16 border border-[#ECD698] bg-transparent px-5 text-2xl font-semibold text-[#ECD698] outline-none placeholder:text-[#ECD698]"
                  />
                  <input
                    type="text"
                    placeholder="CCV"
                    className="h-16 border border-[#ECD698] bg-transparent px-5 text-2xl font-semibold text-[#ECD698] outline-none placeholder:text-[#ECD698]"
                  />
                </div>
              </form>
            </div>

            <div className="space-y-5">
              <PaymentInfoCard>
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-3xl font-semibold">Votre Abonnement</h2>
                  <button
                    type="button"
                    className="text-2xl font-semibold text-white transition hover:opacity-80"
                  >
                    Modifier
                  </button>
                </div>

                <div className="mt-5 flex items-center justify-between gap-4 text-2xl">
                  <span>Standard Mensuel</span>
                  <span className="font-semibold">€7,99 EUR / Mois</span>
                </div>

                <div className="mt-6 h-px w-full bg-white/70" />

                <div className="mt-5 flex items-center justify-between gap-4 text-2xl">
                  <span className="italic">Informations sur l’abonnement</span>
                  <button
                    type="button"
                    className="font-semibold text-white transition hover:opacity-80"
                  >
                    En savoir plus
                  </button>
                </div>
              </PaymentInfoCard>

              <PaymentInfoCard>
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-3xl font-semibold">Période d’Essai</h2>
                  <span className="text-3xl font-semibold">7 Jours GRATUITS</span>
                </div>

                <div className="mt-5 flex items-start justify-between gap-4 text-2xl">
                  <span>Période d’Engagement Minimum</span>
                  <span className="font-semibold">1 mois</span>
                </div>

                <p className="mt-6 text-lg italic leading-relaxed text-[#ECD698]">
                  à compter de la Date du Premier Paiement, réinitialisation à chaque
                  renouvellement. L’abonnement se renouvelle automatiquement sauf en
                  cas de résiliation.
                </p>

                <div className="mt-6 h-px w-full bg-white/70" />

                <p className="mt-6 text-2xl font-semibold italic text-white">
                  Avez-vous un code promotionnel ?
                </p>
              </PaymentInfoCard>

              <PaymentInfoCard>
                <h2 className="text-3xl font-semibold">Votre facture</h2>

                <div className="mt-6 space-y-4 text-2xl">
                  <div className="flex items-center justify-between gap-4">
                    <span>Date du Premier Paiement</span>
                    <span className="font-semibold">27/11/2024</span>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <span>Premier Paiement</span>
                    <span className="font-semibold">€7,99 EUR</span>
                  </div>
                </div>

                <div className="mt-6 h-px w-full bg-white/70" />

                <p className="mt-6 text-lg italic leading-relaxed text-[#ECD698]">
                  Vous serez automatiquement débité à la fréquence choisie avec le
                  mode de paiement enregistré à compter de la Date du Premier
                  Paiement, sauf en cas de résiliation. Vous pouvez résilier à tout
                  moment. La résiliation prendra effet à la fin de la période de
                  facturation.
                </p>
              </PaymentInfoCard>

              <div className="px-3">
                <p className="text-lg leading-relaxed text-[#ECD698]">
                  En cliquant sur ce bouton, vous confirmez avoir 18 ans ou plus et
                  avoir lu et accepté les Conditions d’abonnement et l’achat de votre
                  abonnement au prix et aux conditions indiqués ci-dessus. Vous
                  acceptez également de pouvoir accéder immédiatement à votre
                  abonnement et reconnaissez que vous perdrez votre droit de
                  rétractation du contrat une fois que vous accédez à Peanut.
                </p>

                <button
                  type="button"
                  className="mt-6 h-14 w-full rounded-2xl border border-[#ECD698] text-2xl font-semibold text-[#ECD698] transition hover:bg-[#ECD698] hover:text-[#303030]"
                >
                  Acheter Maintenant
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default PaymentPage;