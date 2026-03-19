import { Link } from "react-router-dom";
import AuthTopBar from "../../components/auth/AuthTopBar";
import Footer from "../../components/layout/Footer";

function LoginPage() {
  return (
    <div className="min-h-screen bg-[#303030] text-white">
      <AuthTopBar rightLabel="S’INSCRIRE" rightTo="/inscription/etapes" />

      <main className="mx-auto flex min-h-[calc(100vh-112px)] max-w-[1440px] flex-col px-6 py-16 md:px-10 lg:px-20">
        <section className="mx-auto w-full max-w-[650px] pt-6">
          <h1 className="text-3xl font-semibold text-[#ECD698] md:text-4xl">
            S’identifier
          </h1>

          <div className="mt-6 h-px w-full bg-white/50" />

          <form className="mx-auto mt-16 flex max-w-[420px] flex-col items-center">
            <input
              type="email"
              placeholder="E-mail"
              className="h-16 w-full rounded-2xl border border-[#ECD698] bg-transparent px-5 text-[#ECD698] outline-none placeholder:text-[#ECD698] md:h-[60px]"
            />

            <input
              type="password"
              placeholder="Mot de passe"
              className="mt-6 h-16 w-full rounded-2xl border border-[#ECD698] bg-transparent px-5 text-[#ECD698] outline-none placeholder:text-[#ECD698] md:h-[60px]"
            />

            <button
              type="submit"
              className="mt-14 h-14 w-full max-w-[300px] rounded-2xl bg-[#ECD698] text-xl font-semibold text-black transition hover:opacity-90"
            >
              CONTINUER
            </button>

            <Link
              to="/mot-de-passe-oublie"
              className="mt-10 text-xl text-[#ECD698] transition hover:opacity-80"
            >
              Mot de passe oublié ?
            </Link>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default LoginPage;