# Amélioration UX : Affichage/Masquage du Mot de Passe

## Résumé des modifications

Cette mise à jour améliore l'expérience utilisateur du formulaire de connexion en ajoutant une fonctionnalité permettant d'afficher ou de masquer le mot de passe.

## Fichiers créés

### 1. Composants Icon
- **`src/components/Icon/Icon.tsx`** : Composant de base pour afficher des icônes SVG
- **`src/components/Icon/IconEye.tsx`** : Icône "Œil" pour afficher le mot de passe
- **`src/components/Icon/IconEyeOff.tsx`** : Icône "Œil barré" pour masquer le mot de passe
- **`src/components/Icon/icon.css`** : Styles pour les icônes avec différentes tailles
- **`src/components/Icon/index.ts`** : Fichier d'export des composants Icon

Ces composants sont inspirés du Design System (`simple-design-system`) et utilisent les mêmes conventions.

## Fichiers modifiés

### 1. `src/components/Input/Input.tsx`
**Modifications :**
- Ajout de la prop `rightElement?: React.ReactNode` aux types `InputFieldProps` et `InputProps`
- Modification du composant `Input` pour accepter et afficher un élément à droite de l'input
- Ajout d'un wrapper `.input-wrapper` pour positionner l'élément à droite

**Utilisation :**
```typescript
<InputField
  label="Mot de passe"
  type="password"
  rightElement={<button>...</button>}
/>
```

### 2. `src/components/Input/input.css`
**Ajouts :**
- Styles pour `.input-wrapper` : conteneur positionné en relatif
- Styles pour `.input-right-element` : positionnement absolu à droite de l'input
- Styles pour les boutons dans `.input-right-element` : effets hover et active
- Ajustement du padding-right de l'input pour éviter le chevauchement avec l'élément à droite

### 3. `src/pages/LoginPage.tsx`
**Modifications :**
- Import des composants `IconEye` et `IconEyeOff`
- Ajout d'un état React `showPassword` pour gérer la visibilité du mot de passe
- Ajout de la fonction `togglePasswordVisibility()` pour basculer l'état
- Modification du champ "Mot de passe" :
  - Type dynamique : `type={showPassword ? "text" : "password"}`
  - Ajout de la prop `rightElement` avec un bouton interactif
  - Le bouton affiche `IconEye` quand masqué, `IconEyeOff` quand visible
  - Attribut `aria-label` pour l'accessibilité

## Fonctionnalité

L'utilisateur peut maintenant :
1. Cliquer sur l'icône d'œil à droite du champ "Mot de passe"
2. Le mot de passe s'affiche en clair (type="text") et l'icône devient un œil barré
3. Cliquer à nouveau pour masquer le mot de passe (type="password") et revenir à l'icône d'œil

## Avantages UX

✅ **Meilleure expérience utilisateur** : L'utilisateur peut vérifier son mot de passe avant de soumettre le formulaire  
✅ **Design cohérent** : Utilisation des icônes du Design System  
✅ **Accessibilité** : Labels ARIA pour les lecteurs d'écran  
✅ **Réutilisable** : La prop `rightElement` peut être utilisée pour d'autres cas d'usage (icônes, compteurs, etc.)

## Test

Le serveur de développement tourne sur `http://localhost:5173/`

Pour tester :
1. Ouvrir l'application dans le navigateur
2. Aller sur la page de connexion
3. Saisir un mot de passe dans le champ "Mot de passe"
4. Cliquer sur l'icône d'œil pour afficher/masquer le mot de passe
5. Vérifier que l'icône change et que le texte s'affiche/se masque correctement
