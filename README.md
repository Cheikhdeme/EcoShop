
# 🌿 **EcoShop - E-commerce Écologique**

**EcoShop** est une application e-commerce moderne et rapide développée avec **React** et **Vite**. Elle permet aux utilisateurs de naviguer parmi des produits, de gérer un panier interactif, et de contacter l'équipe via un formulaire avec validation.

---

## 🛠️ **Fonctionnalités principales**
- Récupération dynamique des produits via l'API [FakeStoreAPI](https://fakestoreapi.com/).
- Ajout et suppression de produits dans le panier.
- Calcul automatique du total des articles dans le panier.
- Formulaire de contact avec validation en temps réel.
- Interface utilisateur responsive optimisée pour tous les écrans.

---

## 🚀 **Installation et démarrage**

### 1. Prérequis
Assurez-vous d'avoir les outils suivants installés :
- **Node.js** (v16 ou supérieur)
- **npm** ou **yarn**

### 2. Installation du projet
1. Clonez le dépôt GitHub :
   ```bash
   git clone https://github.com/Cheikhdeme/EcoShop.git
   cd EcoShop
   ```
2. Installez les dépendances :
   ```bash
   npm install
   ```
3. Lancez l'application en mode développement :
   ```bash
   npm run dev
   ```
   L'application sera accessible à l'adresse [http://localhost:5173](http://localhost:5173).

---

## 📂 **Structure du projet**

Voici une vue d'ensemble des fichiers principaux :

```plaintext
src/
├── components/        # Composants React (Header, Footer, etc.)
├── pages/             # Pages principales (Home, Product, Cart, Contact)
├── hooks/             # Hooks personnalisés (ex. : useCart)
├── styles/            # Fichiers CSS ou SCSS
├── utils/             # Fonctions utilitaires (ex. : formatPrice)
├── App.jsx            # Point d'entrée de l'application
├── main.jsx           # Rendu principal React
└── index.css          # Style global
```

---

## 📚 **Documentation de l'API (FakeStoreAPI)**

### Base URL
`https://fakestoreapi.com`

### Endpoints utilisés
1. **Récupérer tous les produits**
   - **Méthode** : `GET`
   - **Endpoint** : `/products`
   - **Exemple de réponse** :
     ```json
     [
       {
         "id": 1,
         "title": "Fjallraven Backpack",
         "price": 109.95,
         "description": "Sac à dos élégant...",
         "category": "men's clothing",
         "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
         "rating": {
           "rate": 4.9,
           "count": 120
         }
       }
     ]
     ```
2. **Récupérer un produit par ID**
   - **Méthode** : `GET`
   - **Endpoint** : `/products/:id`
3. **Récupérer les catégories**
   - **Méthode** : `GET`
   - **Endpoint** : `/products/categories`
   - **Exemple de réponse** :
     ```json
     ["electronics", "jewelery", "men's clothing", "women's clothing"]
     ```

---

## 📄 **Scripts disponibles**

Voici les scripts que vous pouvez utiliser :

- `npm run dev` : Démarre l'application en mode développement.
- `npm run build` : Génère les fichiers optimisés pour la production.
- `npm run preview` : Prévisualise le projet en mode production.

---

## 🚀 **Déploiement**

### Étapes pour déployer avec Netlify ou Vercel :
1. Générez les fichiers optimisés pour la production :
   ```bash
   npm run build
   ```
2. Téléchargez le contenu du dossier `dist` sur Netlify ou Vercel.
3. Configurez votre projet en ligne et vérifiez que tout fonctionne.

Lien vers la version déployée : [EcoShop en ligne](https://eco-shop-flame.vercel.app)

---

## 🧪 **Tests**

### Tests effectués :
- **Compatibilité des navigateurs** : Chrome, Firefox, Safari.
- **Accessibilité** : Validation des contrastes et navigation au clavier.
- **Responsivité** : Fonctionnalités testées sur mobile, tablette et desktop.

---

## 📜 **Licence**

Ce projet est sous licence MIT. Vous êtes libre de l'utiliser, de le modifier, et de le redistribuer avec mention de l'auteur.

---

## 🤝 **Contribuer**

Les contributions sont les bienvenues ! Voici comment procéder :
1. Forkez le dépôt.
2. Créez une branche pour vos modifications :
   ```bash
   git checkout -b feature/nom-de-la-fonctionnalite
   ```
3. Soumettez une pull request.

---

## 👨‍💻 **Auteur**
**Cheikh DEME**  
Créé avec passion pour le développement web et les initiatives écologiques.