# Ruedi R. Renggli - Site Web

Site web personnel multilingue pour Ruedi R. Renggli, compositeur et musicien suisse.

## 🌍 Langues supportées

- 🇩🇪 Allemand (par défaut)
- 🇫🇷 Français
- 🇮🇹 Italien
- 🇬🇧 Anglais

## 📁 Structure du projet

```text
/
├── public/
│   ├── music/          # Fichiers audio des compositions
│   └── favicon.svg
├── src/
│   ├── components/     # Composants réutilisables
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── LanguageSwitcher.astro
│   ├── i18n/          # Configuration multilingue
│   │   ├── translations.ts
│   │   └── utils.ts
│   ├── layouts/       # Layouts de base
│   │   └── BaseLayout.astro
│   └── pages/         # Pages du site
│       ├── index.astro       # Accueil (DE)
│       ├── music.astro       # Musique (DE)
│       ├── contact.astro     # Contact (DE)
│       ├── fr/              # Pages en français
│       ├── it/              # Pages en italien
│       └── en/              # Pages en anglais
└── package.json
```

## 🚀 Commandes

| Commande | Action |
| :------- | :----- |
| `npm install` | Installe les dépendances |
| `npm run dev` | Lance le serveur de développement sur `localhost:4321` |
| `npm run build` | Build le site de production dans `./dist/` |
| `npm run preview` | Prévisualise le build localement |

## 📝 Pages

### Accueil
Présentation de Ruedi R. Renggli avec sa biographie et son parcours musical.

### Musique
Galerie audio avec les compositions de Ruedi. Les fichiers audio doivent être placés dans `/public/music/`.

### Contact
Formulaire de contact pour permettre aux visiteurs de communiquer avec Ruedi.

## 🔧 Configuration

### Ajouter des fichiers audio

1. Placez vos fichiers MP3 dans `/public/music/`
2. Mettez à jour la liste des morceaux dans chaque page `music.astro` :

```typescript
const tracks = [
  { title: 'Titre du morceau', file: '/music/votre-fichier.mp3' },
  // ...
];
```

### Modifier les traductions

Les traductions se trouvent dans [src/i18n/translations.ts](src/i18n/translations.ts). Ajoutez ou modifiez les clés de traduction selon vos besoins.

## 🌐 Déploiement

Ce site peut être déployé sur :
- **Netlify** (recommandé)
- **Vercel**
- **GitHub Pages**
- **Cloudflare Pages**

Pour le déploiement, lancez simplement `npm run build` et déployez le dossier `dist/`.

## 📧 Formulaire de contact

Le formulaire de contact est actuellement configuré en mode démo. Pour le rendre fonctionnel, vous devez :

1. Créer un endpoint API pour recevoir les messages
2. Configurer un service d'envoi d'emails (ex: SendGrid, AWS SES, ou un service de formulaire comme Formspree)
3. Mettre à jour le code dans les fichiers `contact.astro` pour pointer vers votre endpoint

## 🔐 Sécurité

Ce site statique offre une sécurité maximale car :
- Pas de base de données
- Pas de code serveur à exploiter
- Hébergement sur CDN
- HTTPS par défaut avec la plupart des plateformes d'hébergement

## 📚 Technologies utilisées

- **Astro** - Framework pour sites statiques
- **TypeScript** - Typage statique
- **CSS** - Styling moderne et responsive
