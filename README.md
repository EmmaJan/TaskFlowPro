# Mon App SDS - Application avec authentification Supabase

Application React + TypeScript avec système de design et authentification Supabase.

## ⚠️ Configuration requise avant de démarrer

**Important :** L'application nécessite une configuration Supabase pour fonctionner.

### 🎯 État actuel
L'application affiche une **page d'aide interactive** avec les instructions de configuration.  
✅ Aucune erreur console - expérience utilisateur propre !

### 🚀 Démarrage rapide (5 minutes)

Consultez **[QUICKSTART.md](./QUICKSTART.md)** pour un guide pas-à-pas complet.

**En résumé :**
1. Créez un compte et un projet sur [supabase.com](https://supabase.com)
2. Copiez vos clés API dans le fichier `.env`
3. Relancez `npm run dev`

## 📦 Installation

```bash
npm install
```

## 🔧 Configuration

1. Copiez `.env.example` vers `.env` (si pas déjà fait)
2. Ajoutez vos clés Supabase dans `.env` :
   ```env
   VITE_SUPABASE_URL=https://votre-projet.supabase.co
   VITE_SUPABASE_ANON_KEY=votre-cle-publique
   ```

## 🏃 Lancement

```bash
npm run dev
```

L'application sera accessible sur [http://localhost:5173](http://localhost:5173)

## 🎯 Fonctionnalités

- ✅ Authentification Supabase (email/mot de passe)
- ✅ Routing avec React Router
- ✅ Système de design personnalisé
- ✅ Gestion des erreurs
- ✅ Page de configuration user-friendly

## 📚 Documentation

- **[QUICKSTART.md](./QUICKSTART.md)** ⭐ - Guide de démarrage rapide (commencez ici !)
- **[FIX_CONSOLE_ERRORS.md](./FIX_CONSOLE_ERRORS.md)** - Explication du lazy loading
- **[SOLUTION_ERREUR.md](./SOLUTION_ERREUR.md)** - Résolution de l'erreur "Invalid supabaseUrl"
- **[SETUP_AUTH.md](./SETUP_AUTH.md)** - Guide détaillé de l'authentification
- **[IMPLEMENTATION_SUMMARY.md](./IMPLEMENTATION_SUMMARY.md)** - Résumé technique
