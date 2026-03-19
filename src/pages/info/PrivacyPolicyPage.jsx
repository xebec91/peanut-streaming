import TextPageLayout from "../../components/common/TextPageLayout";

function PrivacyPolicyPage() {
  return (
    <TextPageLayout title="Politique de confidentialité">
      <section>
        <h2 className="text-xl font-semibold text-[#ECD698]">1. Introduction</h2>
        <p className="mt-3">
          Peanut attache une grande importance à la protection de vos données
          personnelles. Cette politique explique quelles données peuvent être
          collectées, comment elles sont utilisées et quels sont vos droits.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#ECD698]">2. Données collectées</h2>
        <p className="mt-3">
          Nous pouvons collecter votre nom, votre adresse e-mail, vos
          informations de connexion, vos préférences d’utilisation et certaines
          données techniques liées à la navigation sur la plateforme.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#ECD698]">3. Utilisation des données</h2>
        <p className="mt-3">
          Les données sont utilisées pour gérer votre compte, améliorer votre
          expérience, assurer la sécurité de la plateforme et vous informer sur
          nos services.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#ECD698]">4. Vos droits</h2>
        <p className="mt-3">
          Vous pouvez demander l’accès, la rectification ou la suppression de
          vos données personnelles conformément à la réglementation applicable.
        </p>
      </section>
    </TextPageLayout>
  );
}

export default PrivacyPolicyPage;