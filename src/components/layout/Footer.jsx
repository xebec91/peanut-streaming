import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full bg-[#303030] px-8 pb-8 pt-16 text-white md:px-12 lg:px-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <img
              src="/images/logos/footer-peanut.png"
              alt="Peanut"
              className="mb-6 h-16 w-auto object-contain"
            />
          </div>

          <div>
            <h3 className="mb-5 text-2xl font-semibold text-white">Plan du site</h3>
            <ul className="space-y-3 text-lg text-white">
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/series">Séries</Link></li>
              <li><Link to="/films">Films</Link></li>
              <li><Link to="/collections">Collection</Link></li>
              <li><Link to="/lives">lives</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-2xl font-semibold text-white">
              Règles et conditions
            </h3>
            <ul className="space-y-3 text-lg text-white">
              <li><Link to="/politique-confidentialite">Politique de confidentialité</Link></li>
              <li><Link to="/condition-abonnement">Condition d’abonnement</Link></li>
              <li><Link to="/politique-enfants">Politique de confidentialité relative aux enfants</Link></li>
              <li><Link to="/cookies">Gérer les cookies</Link></li>
              <li><Link to="/mentions-legales">Mentions légales</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-2xl font-semibold text-white">
              Nous contacter
            </h3>
            <ul className="space-y-3 text-lg text-white">
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </div>
        </div>

        <p className="mt-12 max-w-[1100px] text-sm leading-relaxed text-white">
          Peanut est le service de streaming qui propose des blockbusters, de
          nouveaux programmes originaux et des séries à succès. C’est une
          montagne de divertissement.
        </p>

        <div className="mt-6 flex flex-col gap-3 text-sm text-white md:flex-row md:items-center md:gap-12">
          <span>Peanut 2026. Tous droits réservés</span>
          <span>Informations légales et support</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;