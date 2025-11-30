import { createClient } from '@supabase/supabase-js';
import type { Database } from '../types/supabase';

// Récupération des variables d'environnement
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Validation des variables d'environnement
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Configuration Supabase manquante !');
  console.error('Veuillez configurer les variables d\'environnement dans le fichier .env :');
  console.error('  VITE_SUPABASE_URL=https://votre-projet.supabase.co');
  console.error('  VITE_SUPABASE_ANON_KEY=votre-cle-publique');
  console.error('\nCopiez .env.example en .env et ajoutez vos vraies clés Supabase.');
  
  // Utiliser des valeurs par défaut pour éviter le crash immédiat
  // mais l'authentification ne fonctionnera pas
  throw new Error(
    'Configuration Supabase manquante. Veuillez configurer VITE_SUPABASE_URL et VITE_SUPABASE_ANON_KEY dans votre fichier .env'
  );
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
