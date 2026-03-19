import { Link } from "react-router-dom";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

function SignupFormPage() {
  return (
    <div className="min-h-screen bg-[#303030] text-white">
      <Header />

      <main className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 lg:px-20">
        <section className="mx-auto w-full max-w-[1100px] pt-4">
          <h1 className="text-4xl font-semibold text-[#ECD698] md:text-5xl">
            Créer un Compte
          </h1>

          <div className="mt-6 h-px w-full bg-white/70" />

          <form className="mt-10">
            <div className="space-y-12">
              <input
                type="text"
                placeholder="Prénom et Nom"
                className="h-20 w-full border border-[#ECD698] bg-transparent px-6 text-3xl font-semibold text-[#ECD698] outline-none placeholder:text-[#ECD698]"
              />

              <input
                type="email"
                placeholder="E-mail"
                className="h-20 w-full border border-[#ECD698] bg-transparent px-6 text-3xl font-semibold text-[#ECD698] outline-none placeholder:text-[#ECD698]"
              />

              <input
                type="password"
                placeholder="Mot de Passe"
                className="h-20 w-full border border-[#ECD698] bg-transparent px-6 text-3xl font-semibold text-[#ECD698] outline-none placeholder:text-[#ECD698]"
              />
            </div>

            <div className="mt-10 space-y-10 px-2 md:px-10">
              <label className="flex items-start gap-6">
                <input
                  type="checkbox"
                  className="mt-2 h-8 w-8 shrink-0 appearance-none border border-white bg-transparent checked:bg-[#ECD698]"
                />
                <span className="text-xl leading-relaxed text-white">
                  Oui, je souhaite recevoir des communications marketing, les
                  dernières nouveautés, des offres spéciales (y compris des offres
                  de partenaires) et d’autres informations de Peanut et des
                  sociétés du groupe Peanut. Je peux me désinscrire à tout moment.
                </span>
              </label>

              <label className="flex items-start gap-6">
                <input
                  type="checkbox"
                  className="mt-2 h-8 w-8 shrink-0 appearance-none border border-white bg-transparent checked:bg-[#ECD698]"
                />
                <span className="text-xl leading-relaxed text-white">
                  En cliquant sur « Accepter et continuer », vous confirmez que vous
                  avez lu et accepté les Conditions d'abonnement et que vous avez
                  pris connaissance de notre Politique de confidentialité.
                </span>
              </label>
            </div>

            <div className="mt-12 flex justify-center">
              <Link
                to="/abonnement/offres"
                className="inline-flex h-16 min-w-[360px] items-center justify-center rounded-2xl border border-[#ECD698] px-8 text-2xl font-semibold text-[#ECD698] transition hover:bg-[#ECD698] hover:text-[#303030]"
              >
                Accepter et Continuer
              </Link>
            </div>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default SignupFormPage;