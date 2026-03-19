import TextPageLayout from "../../components/common/TextPageLayout";

function SubscriptionTermsPage() {
  return (
    <TextPageLayout title="Conditions d’abonnement">
      <section>
        <h2 className="text-xl font-semibold text-[#ECD698]">1. Abonnement</h2>
        <p className="mt-3">
          L’abonnement Peanut donne accès à un catalogue de contenus selon
          l’offre choisie par l’utilisateur.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#ECD698]">2. Paiement</h2>
        <p className="mt-3">
          Le paiement est effectué selon la périodicité indiquée au moment de la
          souscription. L’abonnement peut être renouvelé automatiquement sauf en
          cas de résiliation.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#ECD698]">3. Résiliation</h2>
        <p className="mt-3">
          Vous pouvez résilier votre abonnement à tout moment. La résiliation
          prend effet à la fin de la période de facturation en cours.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#ECD698]">4. Accès au service</h2>
        <p className="mt-3">
          Peanut s’efforce de garantir un accès continu au service, mais des
          interruptions temporaires peuvent survenir pour maintenance ou raisons
          techniques.
        </p>
      </section>
    </TextPageLayout>
  );
}

export default SubscriptionTermsPage;