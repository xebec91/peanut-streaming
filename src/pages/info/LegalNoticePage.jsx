import TextPageLayout from "../../components/common/TextPageLayout";

function LegalNoticePage() {
  return (
    <TextPageLayout title="Mentions légales">
      <section>
        <h2 className="text-xl font-semibold text-[#ECD698]">Éditeur</h2>
        <p className="mt-3">
          Peanut<br />
          Plateforme de streaming fictive réalisée dans le cadre d’un projet
          personnel.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#ECD698]">Hébergement</h2>
        <p className="mt-3">
          Les informations relatives à l’hébergement pourront être précisées
          ultérieurement selon l’environnement technique choisi.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#ECD698]">Propriété intellectuelle</h2>
        <p className="mt-3">
          Les contenus, éléments visuels, textes et composants présents sur ce
          site ne peuvent être reproduits sans autorisation.
        </p>
      </section>
    </TextPageLayout>
  );
}

export default LegalNoticePage;