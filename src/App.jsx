import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/auth/LoginPage";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import SignupStepsPage from "./pages/auth/SignupStepsPage";
import SignupFormPage from "./pages/auth/SignupFormPage";
import OfferSelectionPage from "./pages/subscription/OfferSelectionPage";
import PaymentPage from "./pages/subscription/PaymentPage";
import SeriesPage from "./pages/catalog/SeriesPage";
import FilmsPage from "./pages/catalog/FilmsPage";
import CollectionsPage from "./pages/catalog/CollectionsPage";
import LivesPage from "./pages/catalog/LivesPage";
import SeriesDetailPage from "./pages/media/SeriesDetailPage";
import FilmDetailPage from "./pages/media/FilmDetailPage";
import CollectionDetailPage from "./pages/media/CollectionDetailPage";
import LiveDetailPage from "./pages/media/LiveDetailPage";
import PrivacyPolicyPage from "./pages/info/PrivacyPolicyPage";
import SubscriptionTermsPage from "./pages/info/SubscriptionTermsPage";
import ChildrenPrivacyPage from "./pages/info/ChildrenPrivacyPage";
import CookiesPage from "./pages/info/CookiesPage";
import LegalNoticePage from "./pages/info/LegalNoticePage";
import FaqPage from "./pages/info/FaqPage";
import ContactPage from "./pages/info/ContactPage";
import AdminPage from "./pages/admin/AdminPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/connexion" element={<LoginPage />} />
      <Route path="/mot-de-passe-oublie" element={<ForgotPasswordPage />} />
      <Route path="/inscription/etapes" element={<SignupStepsPage />} />
      <Route path="/inscription/formulaire" element={<SignupFormPage />} />
      <Route path="/abonnement/offres" element={<OfferSelectionPage />} />
      <Route path="/abonnement/paiement" element={<PaymentPage />} />
      <Route path="/series" element={<SeriesPage />} />
      <Route path="/films" element={<FilmsPage />} />
      <Route path="/collections" element={<CollectionsPage />} />
      <Route path="/lives" element={<LivesPage />} />
      <Route path="/serie/breaking-bad" element={<SeriesDetailPage />} />
      <Route path="/film/donjons-dragons" element={<FilmDetailPage />} />
      <Route path="/collection/pulp-fiction" element={<CollectionDetailPage />} />
      <Route path="/live/jeux-olympiques" element={<LiveDetailPage />} />
      <Route path="/politique-confidentialite" element={<PrivacyPolicyPage />} />
      <Route path="/condition-abonnement" element={<SubscriptionTermsPage />} />
      <Route path="/politique-enfants" element={<ChildrenPrivacyPage />} />
      <Route path="/cookies" element={<CookiesPage />} />
      <Route path="/mentions-legales" element={<LegalNoticePage />} />
      <Route path="/faq" element={<FaqPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
}

export default App;