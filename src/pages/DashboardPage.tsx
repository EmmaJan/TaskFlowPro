import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import type { Tables } from '../types/supabase';
import './DashboardPage.css';

type Project = Tables<'projects'>;

export function DashboardPage() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadProjects();
  }, []);

  async function loadProjects() {
    try {
      setLoading(true);
      setError(null);

      const { data, error: fetchError } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });

      if (fetchError) {
        throw fetchError;
      }

      setProjects(data || []);
    } catch (err) {
      console.error('Erreur lors du chargement des projets:', err);
      setError(err instanceof Error ? err.message : 'Erreur inconnue');
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="dashboard-page">
        <div className="dashboard-container">
          <button onClick={() => navigate('/login')} className="back-button">
            ← Retour à la page de connexion
          </button>
          <div className="loading-state">
            <p>Chargement des projets...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="dashboard-page">
        <div className="dashboard-container">
          <button onClick={() => navigate('/login')} className="back-button">
            ← Retour à la page de connexion
          </button>
          <div className="error-state">
            <h2>Erreur</h2>
            <p>{error}</p>
            <button onClick={loadProjects}>Réessayer</button>
          </div>
        </div>
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div className="dashboard-page">
        <div className="dashboard-container">
          <button onClick={() => navigate('/login')} className="back-button">
            ← Retour à la page de connexion
          </button>
          <div className="empty-state">
            <h2>Aucun projet</h2>
            <p>Vous n'avez pas encore de projets.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-page">
      <div className="dashboard-container">
        <button onClick={() => navigate('/login')} className="back-button">
          ← Retour à la page de connexion
        </button>
        <h1>Mes Projets</h1>
        <div className="projects-grid">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="project-card"
              onClick={() => navigate(`/project/${project.id}`)}
            >
              <h3>{project.name || 'Sans nom'}</h3>
              <p className="project-date">
                Créé le {new Date(project.created_at).toLocaleDateString('fr-FR')}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
