# 🎨 Design Tokens - Guide de référence complet

Ce document liste **toutes les variables CSS** disponibles dans le projet pour créer des interfaces cohérentes.

> ⚠️ **Important** : Ce fichier est une **référence**, ne jamais modifier `src/sds-globals.css` directement car il est généré automatiquement.

---

## 📏 Spacing (Espacement)

Utilisez ces variables pour les marges, paddings, gaps, etc.

| Variable SDS | Valeur | Pixels | Usage recommandé |
|--------------|--------|--------|------------------|
| `--sds-size-space-0` | 0rem | 0px | Aucun espacement |
| `--sds-size-space-050` | 0.125rem | 2px | Espacement minimal |
| `--sds-size-space-100` | 0.25rem | 4px | Très petit |
| `--sds-size-space-150` | 0.375rem | 6px | Petit+ |
| `--sds-size-space-200` | 0.5rem | 8px | Petit |
| `--sds-size-space-300` | 0.75rem | 12px | Moyen-petit |
| `--sds-size-space-400` | 1rem | 16px | Moyen (base) |
| `--sds-size-space-600` | 1.5rem | 24px | Grand |
| `--sds-size-space-800` | 2rem | 32px | Très grand |
| `--sds-size-space-1200` | 3rem | 48px | Extra large |
| `--sds-size-space-1600` | 4rem | 64px | XXL |
| `--sds-size-space-2400` | 6rem | 96px | Énorme |
| `--sds-size-space-4000` | 10rem | 160px | Gigantesque |

### Spacing négatifs (pour overlaps)

| Variable | Valeur | Usage |
|----------|--------|-------|
| `--sds-size-space-negative-100` | -0.25rem | -4px |
| `--sds-size-space-negative-200` | -0.5rem | -8px |
| `--sds-size-space-negative-300` | -0.75rem | -12px |
| `--sds-size-space-negative-400` | -1rem | -16px |
| `--sds-size-space-negative-600` | -1.5rem | -24px |

### 🎯 Alias Figma (raccourcis)

| Alias Figma | Équivalent SDS | Usage |
|-------------|----------------|-------|
| `--spacing-xxs` | `--sds-size-space-0` | 0px |
| `--spacing-xs` | `--sds-size-space-100` | 4px |
| `--spacing-s` | `--sds-size-space-200` | 8px |
| `--spacing-m` | `--sds-size-space-300` | 12px |
| `--spacing-l` | `--sds-size-space-400` | 16px |
| `--spacing-xl` | `--sds-size-space-600` | 24px |
| `--spacing-xxl` | `--sds-size-space-800` | 32px |

---

## 📐 Border Radius (Coins arrondis)

| Variable SDS | Valeur | Pixels | Usage |
|--------------|--------|--------|-------|
| `--sds-size-radius-100` | 0.25rem | 4px | Petit arrondi (boutons, inputs) |
| `--sds-size-radius-200` | 0.5rem | 8px | Arrondi moyen (cards) |
| `--sds-size-radius-400` | 1rem | 16px | Grand arrondi (modals) |
| `--sds-size-radius-full` | 624.9375rem | 9999px | Circulaire (avatars) |

### 🎯 Alias Figma

| Alias | Équivalent SDS |
|-------|----------------|
| `--xl` | `--sds-size-radius-400` |

---

## 🖌️ Bordures (Stroke)

| Variable | Valeur | Pixels | Usage |
|----------|--------|--------|-------|
| `--sds-size-stroke-border` | 0.0625rem | 1px | Bordure standard |
| `--sds-size-stroke-focus-ring` | 0.125rem | 2px | Anneau de focus |

---

## 🎨 Couleurs - Palette Terracotta (Thème personnalisé)

**Votre palette de marque basée sur #CB6441**

| Variable Terracotta | Hex | Usage |
|---------------------|-----|-------|
| `--color-brand-50` | #fdf4f1 | Arrière-plan très clair |
| `--color-brand-100` | #fbeae4 | Arrière-plan clair |
| `--color-brand-200` | #f5cfc3 | Surbrillance légère |
| `--color-brand-300` | #edb19e | Accent subtil |
| `--color-brand-400` | #dc8a6f | Accent moyen |
| `--color-brand-500` | #cb6441 | **Couleur principale** |
| `--color-brand-600` | #ad5235 | Hover state |
| `--color-brand-700` | #8e422a | Texte sur fond clair |
| `--color-brand-800` | #703320 | Texte foncé |
| `--color-brand-900` | #522516 | Texte très foncé |

> ✅ **Utilisation directe autorisée** : Vous pouvez utiliser `--color-brand-*` directement dans votre code.

---

## 🎨 Couleurs sémantiques (SDS)

### 📦 Background (Arrière-plans)

#### Default (Fonds neutres)
| Variable | Light mode | Dark mode | Usage |
|----------|------------|-----------|-------|
| `--sds-color-background-default-default` | Blanc | Gris 900 | Fond principal |
| `--sds-color-background-default-default-hover` | Gris 100 | Gris 700 | Hover sur fond |
| `--sds-color-background-default-secondary` | Gris 100 | Gris 800 | Fond secondaire |
| `--sds-color-background-default-secondary-hover` | Gris 200 | Gris 900 | Hover secondaire |
| `--sds-color-background-default-tertiary` | Gris 300 | Gris 600 | Fond tertiaire |
| `--sds-color-background-default-tertiary-hover` | Gris 400 | Gris 700 | Hover tertiaire |

#### Brand (Couleurs Terracotta)
| Variable | Light mode | Dark mode | Usage |
|----------|------------|-----------|-------|
| `--sds-color-background-brand-default` | **Terracotta 500** | **Terracotta 500** | Boutons primaires |
| `--sds-color-background-brand-hover` | **Terracotta 600** | **Terracotta 400** | Hover bouton |
| `--sds-color-background-brand-pressed` | **Terracotta 700** | **Terracotta 300** | Active state |
| `--sds-color-background-brand-secondary` | **Terracotta 100** | **Terracotta 800** | Fond secondaire |
| `--sds-color-background-brand-secondary-hover` | **Terracotta 200** | **Terracotta 700** | Hover secondaire |
| `--sds-color-background-brand-tertiary` | **Terracotta 50** | **Terracotta 900** | Fond subtil |
| `--sds-color-background-brand-tertiary-hover` | **Terracotta 100** | **Terracotta 800** | Hover subtil |

#### Neutral (Slate)
| Variable | Usage |
|----------|-------|
| `--sds-color-background-neutral-default` | Boutons neutres |
| `--sds-color-background-neutral-hover` | Hover neutre |
| `--sds-color-background-neutral-secondary` | Fond neutre secondaire |
| `--sds-color-background-neutral-secondary-hover` | Hover secondaire |
| `--sds-color-background-neutral-tertiary` | Fond neutre tertiaire |
| `--sds-color-background-neutral-tertiary-hover` | Hover tertiaire |

#### Positive (Vert - succès)
| Variable | Usage |
|----------|-------|
| `--sds-color-background-positive-default` | Boutons de succès |
| `--sds-color-background-positive-hover` | Hover succès |
| `--sds-color-background-positive-secondary` | Badge succès |
| `--sds-color-background-positive-secondary-hover` | Hover badge |
| `--sds-color-background-positive-tertiary` | Fond subtil succès |
| `--sds-color-background-positive-tertiary-hover` | Hover subtil |

#### Warning (Jaune - attention)
| Variable | Usage |
|----------|-------|
| `--sds-color-background-warning-default` | Boutons warning |
| `--sds-color-background-warning-hover` | Hover warning |
| `--sds-color-background-warning-secondary` | Badge warning |
| `--sds-color-background-warning-secondary-hover` | Hover badge |
| `--sds-color-background-warning-tertiary` | Fond subtil warning |
| `--sds-color-background-warning-tertiary-hover` | Hover subtil |

#### Danger (Rouge - erreur)
| Variable | Usage |
|----------|-------|
| `--sds-color-background-danger-default` | Boutons danger |
| `--sds-color-background-danger-hover` | Hover danger |
| `--sds-color-background-danger-secondary` | Badge erreur |
| `--sds-color-background-danger-secondary-hover` | Hover badge |
| `--sds-color-background-danger-tertiary` | Fond subtil erreur |
| `--sds-color-background-danger-tertiary-hover` | Hover subtil |

#### Disabled (États désactivés)
| Variable | Usage |
|----------|-------|
| `--sds-color-background-disabled-default` | Fond désactivé |

#### 🎯 Alias Figma pour backgrounds

| Alias | Équivalent SDS |
|-------|----------------|
| `--background` | `--sds-color-background-brand-tertiary` |
| `--white-background` | `--sds-color-background-default-default` |

---

### ✏️ Text (Couleurs de texte)

#### Default
| Variable | Light mode | Dark mode | Usage |
|----------|------------|-----------|-------|
| `--sds-color-text-default-default` | Gris 900 | Blanc | Texte principal |
| `--sds-color-text-default-secondary` | Gris 500 | Blanc 500 | Texte secondaire |
| `--sds-color-text-default-tertiary` | Gris 400 | Blanc 400 | Texte tertiaire |

#### Brand (Terracotta)
| Variable | Usage |
|----------|-------|
| `--sds-color-text-brand-default` | Texte Terracotta principal |
| `--sds-color-text-brand-secondary` | Texte Terracotta secondaire |
| `--sds-color-text-brand-tertiary` | Texte Terracotta tertiaire |
| `--sds-color-text-brand-on-brand` | Texte sur fond Terracotta |
| `--sds-color-text-brand-on-brand-secondary` | Texte secondaire sur fond |
| `--sds-color-text-brand-on-brand-tertiary` | Texte tertiaire sur fond |

#### Neutral, Positive, Warning, Danger
| Variable | Usage |
|----------|-------|
| `--sds-color-text-neutral-default` | Texte neutre |
| `--sds-color-text-positive-default` | Texte succès |
| `--sds-color-text-warning-default` | Texte warning |
| `--sds-color-text-danger-default` | Texte erreur |

#### Disabled
| Variable | Usage |
|----------|-------|
| `--sds-color-text-disabled-default` | Texte désactivé |
| `--sds-color-text-disabled-on-disabled` | Texte sur fond désactivé |

#### 🎯 Alias Figma pour texte

| Alias | Équivalent SDS |
|-------|----------------|
| `--card-foreground` | `--sds-color-text-default-default` |
| `--secondary-foreground` | `--sds-color-text-default-secondary` |

---

### 🔲 Border (Couleurs de bordure)

#### Default
| Variable | Light mode | Dark mode | Usage |
|----------|------------|-----------|-------|
| `--sds-color-border-default-default` | Gris 300 | Gris 600 | Bordure standard |
| `--sds-color-border-default-secondary` | Gris 500 | Gris 500 | Bordure secondaire |
| `--sds-color-border-default-tertiary` | Gris 700 | Gris 400 | Bordure tertiaire |

#### Brand (Terracotta)
| Variable | Usage |
|----------|-------|
| `--sds-color-border-brand-default` | Bordure Terracotta |
| `--sds-color-border-brand-secondary` | Bordure Terracotta secondaire |
| `--sds-color-border-brand-tertiary` | Bordure Terracotta tertiaire |

#### Neutral, Positive, Warning, Danger
| Variable | Usage |
|----------|-------|
| `--sds-color-border-neutral-default` | Bordure neutre |
| `--sds-color-border-positive-default` | Bordure succès |
| `--sds-color-border-warning-default` | Bordure warning |
| `--sds-color-border-danger-default` | Bordure erreur |

#### 🎯 Alias Figma pour bordures

| Alias | Équivalent SDS |
|-------|----------------|
| `--sidebar-border` | `--sds-color-border-default-default` |

---

### 🎭 Icon (Couleurs d'icônes)

Les icônes suivent les mêmes patterns que le texte :
- `--sds-color-icon-default-*`
- `--sds-color-icon-brand-*`
- `--sds-color-icon-neutral-*`
- `--sds-color-icon-positive-*`
- `--sds-color-icon-warning-*`
- `--sds-color-icon-danger-*`
- `--sds-color-icon-disabled-*`

---

## 🔤 Typographie

### Familles de polices

| Variable | Valeur | Usage |
|----------|--------|-------|
| `--sds-typography-family-sans` | "inter", sans-serif | Police par défaut |
| `--sds-typography-family-serif` | "noto serif", serif | Titres élégants |
| `--sds-typography-family-mono` | "roboto mono", monospace | Code |

### Échelle typographique

| Variable | Valeur | Pixels | Usage |
|----------|--------|--------|-------|
| `--sds-typography-scale-01` | 0.75rem | 12px | Très petit |
| `--sds-typography-scale-02` | 0.875rem | 14px | Petit |
| `--sds-typography-scale-03` | 1rem | 16px | Base |
| `--sds-typography-scale-04` | 1.25rem | 20px | Moyen |
| `--sds-typography-scale-05` | 1.5rem | 24px | Grand |
| `--sds-typography-scale-06` | 2rem | 32px | Très grand |
| `--sds-typography-scale-07` | 2.5rem | 40px | Extra large |
| `--sds-typography-scale-08` | 3rem | 48px | Énorme |
| `--sds-typography-scale-09` | 4rem | 64px | Gigantesque |
| `--sds-typography-scale-10` | 4.5rem | 72px | Hero |

### Poids (Weights)

| Variable | Valeur |
|----------|--------|
| `--sds-typography-weight-regular` | 400 |
| `--sds-typography-weight-medium` | 500 |
| `--sds-typography-weight-semibold` | 600 |
| `--sds-typography-weight-bold` | 700 |
| `--sds-typography-weight-extra-bold` | 800 |

### Styles composés (prêts à l'emploi)

| Variable | Usage |
|----------|-------|
| `--sds-font-title-hero` | Titre hero (72px, bold) |
| `--sds-font-title-page` | Titre de page (48px, bold) |
| `--sds-font-subtitle` | Sous-titre (32px, regular) |
| `--sds-font-heading` | Titre de section (24px, semibold) |
| `--sds-font-subheading` | Sous-titre de section (20px, regular) |
| `--sds-font-body-base` | Texte normal (16px, regular) |
| `--sds-font-body-strong` | Texte gras (16px, semibold) |
| `--sds-font-body-emphasis` | Texte italique (16px, italic) |
| `--sds-font-body-small` | Petit texte (14px, regular) |
| `--sds-font-body-code` | Code (16px, mono) |

**Exemple d'utilisation :**
```css
.hero-title {
  font: var(--sds-font-title-hero);
}
```

---

## 🎭 Effets (Shadows & Blur)

### Drop Shadows (Ombres portées)

| Variable | Usage |
|----------|-------|
| `--sds-effects-shadows-drop-shadow-100` | Ombre très légère |
| `--sds-effects-shadows-drop-shadow-200` | Ombre légère |
| `--sds-effects-shadows-drop-shadow-300` | Ombre moyenne |
| `--sds-effects-shadows-drop-shadow-400` | Ombre forte |
| `--sds-effects-shadows-drop-shadow-500` | Ombre très forte |
| `--sds-effects-shadows-drop-shadow-600` | Ombre maximale |

**Exemple :**
```css
.card {
  box-shadow: var(--sds-effects-shadows-drop-shadow-200);
}
```

### Inner Shadows (Ombres internes)

| Variable | Usage |
|----------|-------|
| `--sds-effects-shadows-inner-shadow-100` | Légère |
| `--sds-effects-shadows-inner-shadow-200` | Moyenne |
| `--sds-effects-shadows-inner-shadow-300` | Forte |

### Blur (Flou)

| Variable | Usage |
|----------|-------|
| `--sds-effects-backdrop-filter-blur-overlay` | Flou d'arrière-plan (overlay) |
| `--sds-effects-filter-blur-layer` | Flou de calque |
| `--sds-effects-backdrop-filter-blur-glass` | Effet verre (glassmorphism) |

---

## 💡 Guidelines d'utilisation

### ✅ Bonnes pratiques

1. **Privilégier les variables sémantiques** :
   ```css
   /* ✅ Bon */
   background: var(--sds-color-background-brand-default);
   
   /* ⚠️ À éviter */
   background: var(--sds-color-brand-500);
   ```

2. **Exception : Palette Terracotta** :
   ```css
   /* ✅ Autorisé - C'est votre palette custom */
   background: var(--color-brand-500);
   ```

3. **Utiliser les alias Figma pour la rapidité** :
   ```css
   /* ✅ Bon pour prototypage rapide */
   padding: var(--spacing-xl);
   background: var(--background);
   
   /* ✅ Meilleur pour production (plus explicite) */
   padding: var(--sds-size-space-600);
   background: var(--sds-color-background-brand-tertiary);
   ```

4. **Utiliser les styles typographiques composés** :
   ```css
   /* ✅ Bon */
   font: var(--sds-font-heading);
   
   /* ❌ Éviter */
   font-size: 24px;
   font-weight: 600;
   font-family: Inter;
   ```

### 🎨 Quand utiliser quelle couleur ?

| Contexte | Variable à utiliser |
|----------|---------------------|
| Bouton principal | `--sds-color-background-brand-default` |
| Fond de page | `--background` ou `--sds-color-background-brand-tertiary` |
| Card/Container | `--white-background` ou `--sds-color-background-default-default` |
| Texte principal | `--card-foreground` ou `--sds-color-text-default-default` |
| Texte secondaire | `--secondary-foreground` ou `--sds-color-text-default-secondary` |
| Bordure standard | `--sidebar-border` ou `--sds-color-border-default-default` |
| Bouton de succès | `--sds-color-background-positive-default` |
| Badge d'erreur | `--sds-color-background-danger-secondary` |

### 📐 Quand utiliser quel spacing ?

| Contexte | Variable recommandée |
|----------|---------------------|
| Gap entre éléments proches | `--sds-size-space-100` (4px) |
| Padding de bouton | `--sds-size-space-200` ou `--sds-size-space-300` (8-12px) |
| Espacement entre sections | `--sds-size-space-600` (24px) |
| Padding de card | `--sds-size-space-400` ou `--sds-size-space-600` (16-24px) |
| Margin entre composants majeurs | `--sds-size-space-800` (32px) |

---

## 🚀 Exemples pratiques

### Exemple 1 : Card avec thème Terracotta

```css
.product-card {
  /* Fond et espacement */
  background: var(--sds-color-background-default-default);
  padding: var(--sds-size-space-600);
  border-radius: var(--sds-size-radius-400);
  
  /* Bordure subtile */
  border: var(--sds-size-stroke-border) solid var(--sds-color-border-default-default);
  
  /* Ombre */
  box-shadow: var(--sds-effects-shadows-drop-shadow-200);
}

.product-card:hover {
  background: var(--sds-color-background-default-default-hover);
  box-shadow: var(--sds-effects-shadows-drop-shadow-300);
}

.product-card__title {
  font: var(--sds-font-heading);
  color: var(--sds-color-text-default-default);
  margin-bottom: var(--sds-size-space-200);
}

.product-card__description {
  font: var(--sds-font-body-base);
  color: var(--sds-color-text-default-secondary);
}
```

### Exemple 2 : Bouton primaire Terracotta

```css
.btn-primary {
  /* Couleurs Terracotta */
  background: var(--sds-color-background-brand-default);
  color: var(--sds-color-text-brand-on-brand);
  border: none;
  
  /* Espacement et forme */
  padding: var(--sds-size-space-200) var(--sds-size-space-400);
  border-radius: var(--sds-size-radius-100);
  
  /* Typographie */
  font: var(--sds-font-body-strong);
  
  /* Transition */
  transition: background 0.2s ease;
}

.btn-primary:hover {
  background: var(--sds-color-background-brand-hover);
}

.btn-primary:active {
  background: var(--sds-color-background-brand-pressed);
}
```

### Exemple 3 : Badge de statut

```css
.badge--success {
  background: var(--sds-color-background-positive-secondary);
  color: var(--sds-color-text-positive-default);
  padding: var(--sds-size-space-050) var(--sds-size-space-200);
  border-radius: var(--sds-size-radius-full);
  font: var(--sds-font-body-small-strong);
}

.badge--warning {
  background: var(--sds-color-background-warning-secondary);
  color: var(--sds-color-text-warning-default);
}

.badge--error {
  background: var(--sds-color-background-danger-secondary);
  color: var(--sds-color-text-danger-default);
}
```

---

## 📚 Ressources

- **Fichier source** : `src/sds-globals.css` (généré automatiquement, ne pas modifier)
- **Simple Design System** : `/Users/polyconseil/Downloads/simple-design-system/`
- **Cursorrules** : `.cursorrules` (règles d'utilisation automatiques pour l'AI)

---

✨ **Dernière mise à jour** : 30 novembre 2024
🎯 **Document unique** : Ce fichier remplace l'ancien `FIGMA_VARIABLES.md` et contient toute la documentation des design tokens
