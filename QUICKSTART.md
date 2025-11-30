# 🚀 Démarrage rapide

## ⚠️ Erreur actuelle : Configuration Supabase manquante

L'application affiche maintenant une page d'erreur car les variables d'environnement Supabase ne sont pas configurées.

## Solution en 4 étapes

### Étape 1 : Créer un compte Supabase (si pas déjà fait)

1. Allez sur [https://supabase.com](https://supabase.com)
2. Cliquez sur "Start your project"
3. Créez un compte gratuit (avec GitHub, Google, etc.)

### Étape 2 : Créer un nouveau projet

1. Cliquez sur "New Project"
2. Donnez un nom à votre projet (ex: "mon-app-test")
3. Créez un mot de passe sécurisé pour la base de données
4. Choisissez une région (ex: "West EU - Ireland" pour l'Europe)
5. Cliquez sur "Create new project"
6. ⏰ Attendez 1-2 minutes que le projet se crée

### Étape 3 : Récupérer vos clés API

1. Une fois le projet créé, cliquez sur l'icône ⚙️ en bas à gauche
2. Allez dans **Settings** → **API**
3. Vous verrez deux informations importantes :

   **Project URL** (Project URL)
   ```
   https://xxxxxxxxx.supabase.co
   ```

   **anon / public key** (dans la section "Project API keys")
   ```
   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   ```

### Étape 4 : Configurer votre fichier .env

1. Ouvrez le fichier `.env` à la racine du projet
2. Remplacez les valeurs par vos vraies clés :

   ```env
   VITE_SUPABASE_URL=https://xxxxxxxxx.supabase.co
   VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   ```

3. **Sauvegardez le fichier**

4. **Redémarrez le serveur de développement** :
   ```bash
   # Arrêtez le serveur (Ctrl+C)
   # Puis relancez :
   npm run dev
   ```

### Étape 5 : Créer un utilisateur de test

1. Dans Supabase, allez dans **Authentication** (icône 🔐)
2. Cliquez sur **Users** dans le menu latéral
3. Cliquez sur **Add user** → **Create new user**
4. Remplissez :
   - Email : `test@example.com` (ou votre email)
   - Password : `Test1234!` (ou autre)
   - ✅ Cochez "Auto Confirm User"
5. Cliquez sur **Create user**

### Étape 6 : Tester la connexion

1. L'application devrait maintenant afficher la page de login
2. Connectez-vous avec :
   - Email : `test@example.com`
   - Mot de passe : `Test1234!`
3. Vous serez redirigé vers le dashboard !

---

## 🎯 Résultat attendu

Une fois configuré, vous devriez :
- ✅ Voir la page de login (pas la page d'erreur de configuration)
- ✅ Pouvoir vous connecter avec vos identifiants de test
- ✅ Être redirigé vers le dashboard après connexion

## ❓ Problèmes courants

### L'erreur "Invalid supabaseUrl" persiste
- ✅ Vérifiez que vous avez bien **sauvegardé** le fichier `.env`
- ✅ Vérifiez que vous avez **redémarré** le serveur (`npm run dev`)
- ✅ Les valeurs ne doivent PAS contenir d'espaces ou de guillemets

### "Invalid login credentials"
- ✅ Vérifiez que vous avez bien coché "Auto Confirm User" lors de la création
- ✅ Vérifiez que l'email et le mot de passe sont corrects

### Page blanche ou erreur 404
- ✅ Vérifiez que le serveur est bien lancé (`npm run dev`)
- ✅ Allez sur `http://localhost:5173`

---

## 📚 Autres ressources

- **[README.md](./README.md)** - Vue d'ensemble du projet
- **[CHANGELOG_PASSWORD_TOGGLE.md](./CHANGELOG_PASSWORD_TOGGLE.md)** - Fonctionnalité d'affichage/masquage du mot de passe
- **[FIGMA_VARIABLES.md](./FIGMA_VARIABLES.md)** - Variables du Design System
