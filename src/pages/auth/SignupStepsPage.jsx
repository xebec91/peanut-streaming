import { Link } from "react-router-dom";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

function StepItem({ title, description, last = false }) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-7xl font-bold leading-none text-white">✓</div>

      <h2 className="mt-4 text-center text-3xl font-semibold text-[#ECD698]">
        {title}
      </h2>

      {description ? (
        <p className="mt-4 max-w-[700px] text-center text-2xl leading-relaxed text-[#ECD698]">
          {description}
        </p>
      ) : null}

      {!last ? <div className="mt-14 h-px w-full bg-white/70" /> : null}
    </div>
  );
}

function SignupStepsPage() {
  return (
    <div className="min-h-screen bg-[#303030] text-white">
      <Header />

      <main className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 lg:px-20">
        <section className="mx-auto max-w-[760px] pt-8">
          <h1 className="text-center text-4xl font-semibold leading-snug text-[#ECD698] md:text-5xl">
            Il ne vous reste que quelques étapes
            <br />
            pour profiter de vos contenus !
          </h1>

          <div className="mt-16 space-y-14">
            <StepItem title="Créer un Compte" />
            <StepItem title="Sélectionner une Offre" />
            <StepItem
              title=""
              description="Confirmez votre abonnement. Regardez des blockbusters et des nouvelles séries inédites !"
              last
            />
          </div>

          <div className="mt-14 flex justify-center">
            <Link
              to="/inscription/formulaire"
              className="inline-flex h-14 min-w-[260px] items-center justify-center rounded-2xl border border-[#ECD698] px-8 text-2xl font-semibold text-[#ECD698] transition hover:bg-[#ECD698] hover:text-[#303030]"
            >
              Continuer
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default SignupStepsPage;