import TextPageLayout from "../../components/common/TextPageLayout";

function FaqPage() {
  return (
    <TextPageLayout title="FAQ - Questions fréquentes">
      <section>
        <h2 className="text-xl font-semibold text-[#ECD698]">
          Comment créer un compte ?
        </h2>
        <p className="mt-3">
          Vous pouvez créer un compte en passant par les pages d’inscription puis
          en sélectionnant une offre adaptée.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#ECD698]">
          Comment réinitialiser mon mot de passe ?
        </h2>
        <p className="mt-3">
          Utilisez la page “Mot de passe oublié” et entrez votre adresse e-mail
          pour recevoir un lien de réinitialisation.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#ECD698]">
          Puis-je résilier mon abonnement ?
        </h2>
        <p className="mt-3">
          Oui, vous pouvez résilier votre abonnement à tout moment depuis votre
          espace utilisateur.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#ECD698]">
          Peanut est-il disponible sur mobile ?
        </h2>
        <p className="mt-3">
          La plateforme est pensée pour être consultable sur plusieurs types
          d’écrans, selon les appareils compatibles.
        </p>
      </section>
    </TextPageLayout>
  );
}

export default FaqPage;