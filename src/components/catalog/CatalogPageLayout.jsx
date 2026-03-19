import { Link } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import CatalogSection from "./CatalogSection";

function CatalogPageLayout({
  activePath,
  sections,
  inspirationText,
  watchTo,
}) {
  return (
    <div className="min-h-screen bg-[#303030] text-white">
      <Header activePath={activePath} />

      <main className="mx-auto max-w-[1440px] px-6 py-10 md:px-10 lg:px-16">
        {sections.map((section) => (
          <CatalogSection
            key={section.title}
            title={section.title}
            items={section.items}
          />
        ))}

        <section className="mt-14 text-center">
          {watchTo ? (
            <div className="mb-8">
              <Link
                to={watchTo}
                className="inline-flex h-12 min-w-[220px] items-center justify-center rounded-2xl border border-[#ECD698] px-6 text-base font-semibold text-[#ECD698] transition hover:bg-[#ECD698] hover:text-[#303030]"
              >
                Regarder
              </Link>
            </div>
          ) : null}

          <p className="text-lg font-medium text-white md:text-2xl">
            {inspirationText}
          </p>

          <button
            type="button"
            className="mt-8 inline-flex h-12 min-w-[220px] items-center justify-center rounded-2xl border border-[#ECD698] px-6 text-base font-semibold text-[#ECD698] transition hover:bg-[#ECD698] hover:text-[#303030]"
          >
            J’ai de la chance !
          </button>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default CatalogPageLayout;