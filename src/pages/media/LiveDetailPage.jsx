import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import PlayerHero from "../../components/media/PlayerHero";

function LiveDetailPage() {
  return (
    <div className="min-h-screen bg-[#303030] text-white">
      <Header activePath="/lives" />

      <main className="mx-auto max-w-[1440px] px-6 py-4 md:px-10 lg:px-16">
        <PlayerHero
          title="JEUX OLYMPIQUES DE PARIS 2024 - TENNIS DE TABLE"
          image="/images/catalog/jeux_olympiques.png"
        />

        <section className="mt-10">
          <h1 className="text-3xl font-bold text-[#ECD698] md:text-5xl">
            JEUX OLYMPIQUES DE PARIS 2024 - Tennis de table
          </h1>

          <div className="mt-8 space-y-4 text-2xl font-semibold text-[#ECD698] md:text-4xl">
            <p>Simples HOMMES :</p>
            <p>Match du jour : Felix LEBRUN vs LIN Yun-ju</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default LiveDetailPage;