# Peanut

Peanut est une plateforme de streaming fictive réalisée dans le cadre d’un projet personnel pour ma recherche d’alternance.

L’objectif du projet est de concevoir une interface moderne et cohérente à partir d’une maquette Figma, en développant le frontend avec **React.js** et **Tailwind CSS**. Le backend n’est pas implémenté dans cette version ; l’architecture a simplement été pensée pour une future intégration en **Python**.

## Aperçu du projet

Peanut propose une expérience utilisateur inspirée des plateformes de streaming, avec :

- une page d’accueil
- un parcours d’authentification
- un parcours d’abonnement
- des catalogues de contenus
- des pages détail pour les séries, films, collections et lives
- des pages informatives et légales
- une page administrateur

## Technologies utilisées

- **React.js**
- **Vite**
- **Tailwind CSS**
- **React Router DOM**

## Fonctionnalités développées

### Authentification
- Se connecter
- Mot de passe oublié
- S’inscrire — pictogramme
- S’inscrire — formulaire

### Abonnement
- Sélectionner une offre
- Ajouter un mode de paiement

### Navigation principale
- Page d’accueil
- Catalogue Séries
- Catalogue Films
- Catalogue Collections
- Catalogue Lives

### Pages détail
- Page Série
- Page Film
- Page Collection
- Page Live

### Pages informatives
- FAQ
- Nous contacter
- Politique de confidentialité
- Conditions d’abonnement
- Politique de confidentialité relative aux enfants
- Gérer les cookies
- Mentions légales

### Administration
- Page administrateur

## Structure du projet

```bash
src/
  components/
    auth/
    catalog/
    common/
    layout/
    media/
  pages/
    admin/
    auth/
    catalog/
    info/
    media/
    subscription/
  App.jsx
  main.jsx
  index.css

public/
  images/
    logos/
    catalog/
