import { Link } from "react-router-dom";
import AuthTopBar from "../../components/auth/AuthTopBar";
import Footer from "../../components/layout/Footer";

function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-[#303030] text-white">
      <AuthTopBar rightLabel="SE CONNECTER" rightTo="/connexion" />

      <main className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 lg:px-20">
        <section className="mx-auto w-full max-w-[760px] pt-6">
          <h1 className="text-3xl font-semibold text-[#ECD698] md:text-4xl">
            Vous avez oublié votre mot de passe?
          </h1>

          <div className="mt-6 h-px w-full bg-white/50" />

          <p className="mt-12 max-w-[900px] text-2xl leading-relaxed text-[#ECD698]">
            Ça arrive! Entrez l’adresse e-mail associée à votre compte et nous
            vous enverrons un lien pour réinitialiser votre mot de passe.
          </p>

          <form className="mx-auto mt-14 flex max-w-[420px] flex-col items-center">
            <input
              type="email"
              placeholder="E-mail"
              className="h-16 w-full rounded-2xl border border-[#ECD698] bg-transparent px-5 text-[#ECD698] outline-none placeholder:text-[#ECD698]"
            />

            <button
              type="submit"
              className="mt-14 h-14 w-full max-w-[320px] rounded-2xl bg-[#ECD698] text-xl font-semibold text-black transition hover:opacity-90"
            >
              ENVOYER L’E-MAIL
            </button>

            <Link
              to="/connexion"
              className="mt-10 text-xl text-[#ECD698] transition hover:opacity-80"
            >
              Annuler
            </Link>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default ForgotPasswordPage;