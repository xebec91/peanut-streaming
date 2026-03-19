import TextPageLayout from "../../components/common/TextPageLayout";

function ChildrenPrivacyPage() {
  return (
    <TextPageLayout title="Politique de confidentialité relative aux enfants">
      <section>
        <h2 className="text-xl font-semibold text-[#ECD698]">1. Protection des mineurs</h2>
        <p className="mt-3">
          Peanut prend des mesures pour protéger les données personnelles des
          enfants et limiter toute collecte non nécessaire.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#ECD698]">2. Contrôle parental</h2>
        <p className="mt-3">
          Les parents ou responsables légaux sont invités à surveiller
          l’utilisation de la plateforme et à contacter Peanut pour toute
          question relative aux données d’un mineur.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#ECD698]">3. Suppression des données</h2>
        <p className="mt-3">
          Toute demande liée à la suppression ou à la gestion des données d’un
          enfant peut être adressée via notre page de contact.
        </p>
      </section>
    </TextPageLayout>
  );
}

export default ChildrenPrivacyPage;