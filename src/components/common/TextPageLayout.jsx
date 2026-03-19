import Header from "../layout/Header";
import Footer from "../layout/Footer";

function TextPageLayout({ title, children }) {
  return (
    <div className="min-h-screen bg-[#303030] text-white">
      <Header />

      <main className="mx-auto max-w-[1100px] px-6 py-12 md:px-10 lg:px-16">
        <h1 className="text-3xl font-bold text-[#ECD698] md:text-4xl">
          {title}
        </h1>

        <div className="mt-4 h-px w-full bg-white/20" />

        <div className="mt-8 space-y-8 text-base leading-relaxed text-white md:text-lg">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default TextPageLayout;