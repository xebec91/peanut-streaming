import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

const stats = [
  { label: "Utilisateurs", value: "12 480" },
  { label: "Abonnements actifs", value: "8 932" },
  { label: "Contenus en ligne", value: "1 245" },
  { label: "Lives programmés", value: "18" },
];

const recentContent = [
  { title: "Breaking Bad", type: "Série", status: "Publié" },
  { title: "Donjons & Dragons", type: "Film", status: "Publié" },
  { title: "Pulp Fiction", type: "Collection", status: "Publié" },
  { title: "Jeux Olympiques 2024", type: "Live", status: "À venir" },
];

const users = [
  { name: "Jean Dupont", email: "jean@email.com", plan: "Standard" },
  { name: "Sarah Martin", email: "sarah@email.com", plan: "Premium" },
  { name: "Lucas Bernard", email: "lucas@email.com", plan: "Standard" },
];

function StatCard({ label, value }) {
  return (
    <div className="rounded-2xl border border-[#ECD698]/40 bg-[#2b2b2b] p-6">
      <p className="text-sm uppercase tracking-[0.2em] text-white/60">{label}</p>
      <p className="mt-4 text-3xl font-bold text-[#ECD698] md:text-4xl">{value}</p>
    </div>
  );
}

function AdminPage() {
  return (
    <div className="min-h-screen bg-[#303030] text-white">
      <Header />

      <main className="mx-auto max-w-[1440px] px-6 py-10 md:px-10 lg:px-16">
        <section className="rounded-[28px] border border-[#ECD698]/40 bg-[#2b2b2b] px-8 py-10 md:px-12">
          <p className="text-sm uppercase tracking-[0.25em] text-white/60">
            Administration
          </p>

          <h1 className="mt-4 text-3xl font-bold text-[#ECD698] md:text-5xl">
            Tableau de bord Peanut
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/85 md:text-lg">
            Gérez les utilisateurs, les abonnements, les contenus et les lives
            depuis une interface claire et centralisée.
          </p>
        </section>

        <section className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} label={stat.label} value={stat.value} />
          ))}
        </section>

        <section className="mt-12 grid grid-cols-1 gap-8 xl:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-[#2b2b2b] p-6">
            <div className="mb-6 flex items-center justify-between gap-4">
              <h2 className="text-2xl font-semibold text-[#ECD698]">
                Contenus récents
              </h2>

              <button
                type="button"
                className="rounded-xl border border-[#ECD698] px-4 py-2 text-sm font-semibold text-[#ECD698] transition hover:bg-[#ECD698] hover:text-[#303030]"
              >
                Ajouter un contenu
              </button>
            </div>

            <div className="space-y-4">
              {recentContent.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col gap-3 rounded-xl border border-white/10 bg-[#303030] p-4 md:flex-row md:items-center md:justify-between"
                >
                  <div>
                    <p className="text-lg font-semibold text-white">{item.title}</p>
                    <p className="text-sm text-white/70">{item.type}</p>
                  </div>

                  <span className="w-fit rounded-full border border-[#ECD698]/50 px-3 py-1 text-sm text-[#ECD698]">
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#2b2b2b] p-6">
            <div className="mb-6 flex items-center justify-between gap-4">
              <h2 className="text-2xl font-semibold text-[#ECD698]">
                Utilisateurs récents
              </h2>

              <button
                type="button"
                className="rounded-xl border border-[#ECD698] px-4 py-2 text-sm font-semibold text-[#ECD698] transition hover:bg-[#ECD698] hover:text-[#303030]"
              >
                Voir tous
              </button>
            </div>

            <div className="space-y-4">
              {users.map((user) => (
                <div
                  key={user.email}
                  className="rounded-xl border border-white/10 bg-[#303030] p-4"
                >
                  <p className="text-lg font-semibold text-white">{user.name}</p>
                  <p className="mt-1 text-sm text-white/70">{user.email}</p>
                  <p className="mt-2 text-sm text-[#ECD698]">
                    Offre : {user.plan}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-white/10 bg-[#2b2b2b] p-6">
          <h2 className="text-2xl font-semibold text-[#ECD698]">
            Actions rapides
          </h2>

          <div className="mt-6 flex flex-wrap gap-4">
            <button
              type="button"
              className="rounded-2xl bg-[#ECD698] px-6 py-3 text-sm font-semibold text-[#303030] transition hover:opacity-90"
            >
              Ajouter une série
            </button>

            <button
              type="button"
              className="rounded-2xl border border-[#ECD698] px-6 py-3 text-sm font-semibold text-[#ECD698] transition hover:bg-[#ECD698] hover:text-[#303030]"
            >
              Ajouter un film
            </button>

            <button
              type="button"
              className="rounded-2xl border border-[#ECD698] px-6 py-3 text-sm font-semibold text-[#ECD698] transition hover:bg-[#ECD698] hover:text-[#303030]"
            >
              Ajouter une collection
            </button>

            <button
              type="button"
              className="rounded-2xl border border-[#ECD698] px-6 py-3 text-sm font-semibold text-[#ECD698] transition hover:bg-[#ECD698] hover:text-[#303030]"
            >
              Programmer un live
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default AdminPage;