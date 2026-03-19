import TextPageLayout from "../../components/common/TextPageLayout";

function ContactPage() {
  return (
    <TextPageLayout title="Nous contacter">
      <section>
        <h2 className="text-xl font-semibold text-[#ECD698]">Support</h2>
        <p className="mt-3">
          Pour toute question liée à votre compte, votre abonnement ou votre
          utilisation de Peanut, vous pouvez contacter notre support.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#ECD698]">E-mail</h2>
        <p className="mt-3">support@peanut-streaming.com</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#ECD698]">Horaires</h2>
        <p className="mt-3">
          Notre équipe est disponible du lundi au vendredi, de 9h à 18h.
        </p>
      </section>
    </TextPageLayout>
  );
}

export default ContactPage;