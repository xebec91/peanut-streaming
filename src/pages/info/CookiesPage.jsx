import TextPageLayout from "../../components/common/TextPageLayout";

function CookiesPage() {
  return (
    <TextPageLayout title="Gérer les cookies">
      <section>
        <h2 className="text-xl font-semibold text-[#ECD698]">1. Utilisation des cookies</h2>
        <p className="mt-3">
          Peanut utilise des cookies pour améliorer l’expérience utilisateur,
          analyser l’audience et mémoriser certaines préférences.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#ECD698]">2. Types de cookies</h2>
        <p className="mt-3">
          Certains cookies sont nécessaires au fonctionnement du service, tandis
          que d’autres servent à la mesure d’audience ou à la personnalisation.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#ECD698]">3. Paramétrage</h2>
        <p className="mt-3">
          Vous pouvez configurer vos préférences de cookies depuis les réglages
          de votre navigateur ou depuis les paramètres proposés par Peanut.
        </p>
      </section>
    </TextPageLayout>
  );
}

export default CookiesPage;