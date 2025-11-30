# Mapping des variables Figma → Simple Design System

Ce fichier documente le mapping entre les variables utilisées dans les designs Figma et les variables du Simple Design System (SDS) utilisées dans le code.

## 📏 Spacing

Les variables de spacing Figma sont mappées sur les variables SDS existantes :

| Variable Figma | Variable SDS | Valeur | Usage |
|----------------|--------------|--------|-------|
| `--spacing-xxs` | `--sds-size-space-0` | 0px | Pas d'espace |
| `--spacing-xs` | `--sds-size-space-100` | 4px | Très petit espacement |
| `--spacing-s` | `--sds-size-space-200` | 8px | Petit espacement |
| `--spacing-m` | `--sds-size-space-300` | 12px | Espacement moyen |
| `--spacing-l` | `--sds-size-space-400` | 16px | Grand espacement |
| `--spacing-xl` | `--sds-size-space-600` | 24px | Très grand espacement |
| `--spacing-xxl` | `--sds-size-space-800` | 32px | Espacement extra large |

## 🎨 Couleurs

### Fonds

| Variable Figma | Variable SDS | Description |
|----------------|--------------|-------------|
| `--background` | `--sds-color-background-brand-tertiary` | Fond de page (terracotta très clair) |
| `--white-background` | `--sds-color-background-default-default` | Fond blanc pour cartes/conteneurs |

### Texte

| Variable Figma | Variable SDS | Description |
|----------------|--------------|-------------|
| `--card-foreground` | `--sds-color-text-default-default` | Texte principal, titres |
| `--secondary-foreground` | `--sds-color-text-default-secondary` | Texte secondaire, descriptions |

### Bordures

| Variable Figma | Variable SDS | Description |
|----------------|--------------|-------------|
| `--sidebar-border` | `--sds-color-border-default-default` | Bordures par défaut |

## 📐 Border Radius

| Variable Figma | Variable SDS | Valeur | Usage |
|----------------|--------------|--------|-------|
| `--xl` | `--sds-size-radius-400` | 12px (1rem) | Coins arrondis pour cartes |

## 💡 Usage

Ces alias permettent d'utiliser directement le code exporté de Figma sans avoir à remplacer toutes les variables. Par exemple :

```css
/* Code Figma */
.card {
  padding: var(--spacing-xl);
  background: var(--white-background);
  border-radius: var(--xl);
}

/* Équivalent SDS (fonctionne aussi) */
.card {
  padding: var(--sds-size-space-600);
  background: var(--sds-color-background-default-default);
  border-radius: var(--sds-size-radius-400);
}
```

## 🔄 Où sont définis les alias ?

Les alias sont définis dans `src/sds-globals.css` à la fin du premier bloc `:root` (lignes 439-466).

## ⚡ Recommandations

- **Pour du nouveau code** : Utilisez directement les variables SDS (`--sds-*`) pour plus de clarté
- **Pour du code importé de Figma** : Les alias fonctionnent automatiquement
- **Pour la maintenance** : Les alias facilitent les mises à jour depuis Figma

## 🎨 Palette Terracotta

Le projet utilise une palette personnalisée basée sur #CB6441 (Terracotta). Voir `src/sds-globals.css` lignes 5-18 pour les primitives de couleur.
