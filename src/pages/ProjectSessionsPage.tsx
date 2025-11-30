import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import type { Tables } from '../types/supabase';
import './ProjectSessionsPage.css';

type Session = Tables<'sessions'>;

interface SessionData {
  participant?: {
    name?: string;
  };
  tasks?: Array<{
    score?: number;
  }>;
}

export function ProjectSessionsPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const [sessions, setSessions] = useState<Session[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [projectName, setProjectName] = useState<string>('');

  useEffect(() => {
    if (projectId) {
      loadProjectAndSessions();
    }
  }, [projectId]);

  async function loadProjectAndSessions() {
    try {
      setLoading(true);
      setError(null);

      // Charger le projet pour obtenir son nom
      const { data: projectData, error: projectError } = await supabase
        .from('projects')
        .select('name')
        .eq('id', projectId)
        .single();

      if (projectError) {
        throw projectError;
      }

      setProjectName(projectData?.name || 'Projet');

      // Charger les sessions pour ce projet
      const { data: sessionsData, error: sessionsError } = await supabase
        .from('sessions')
        .select('*')
        .eq('project_id', projectId)
        .order('created_at', { ascending: false });

      if (sessionsError) {
        throw sessionsError;
      }

      setSessions(sessionsData || []);
    } catch (err) {
      console.error('Erreur lors du chargement des sessions:', err);
      setError(err instanceof Error ? err.message : 'Erreur inconnue');
    } finally {
      setLoading(false);
    }
  }

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  function getParticipantName(session: Session): string {
    try {
      const data = session.data as SessionData;
      return data?.participant?.name || 'Participant inconnu';
    } catch {
      return 'Participant inconnu';
    }
  }

  function getTaskInfo(session: Session): string {
    try {
      const data = session.data as SessionData;
      const tasks = data?.tasks;
      
      if (!tasks || !Array.isArray(tasks)) {
        return 'Aucune tâche';
      }

      // Essayer de récupérer les scores
      const scores = tasks
        .map(task => task.score)
        .filter(score => score !== undefined && score !== null);

      if (scores.length > 0) {
        const avgScore = scores.reduce((a, b) => a + b, 0) / scores.length;
        return `Score moyen: ${avgScore.toFixed(1)} (${tasks.length} tâches)`;
      }

      return `${tasks.length} tâche${tasks.length > 1 ? 's' : ''}`;
    } catch {
      return 'Aucune tâche';
    }
  }

  if (loading) {
    return (
      <div className="sessions-page">
        <div className="sessions-container">
          <div className="loading-state">
            <p>Chargement des sessions...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="sessions-page">
        <div className="sessions-container">
          <div className="error-state">
            <h2>Erreur</h2>
            <p>{error}</p>
            <button onClick={loadProjectAndSessions}>Réessayer</button>
            <button onClick={() => navigate('/dashboard')}>Retour au tableau de bord</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="sessions-page">
      <div className="sessions-container">
        <div className="sessions-header">
          <button onClick={() => navigate('/dashboard')} className="back-button">
            ← Retour
          </button>
          <h1>Tests Utilisateurs - {projectName}</h1>
        </div>

        {sessions.length === 0 ? (
          <div className="empty-state">
            <h2>Aucune session</h2>
            <p>Il n'y a pas encore de sessions de test pour ce projet.</p>
          </div>
        ) : (
          <div className="sessions-grid">
            {sessions.map((session) => (
              <div key={session.id} className="session-card">
                <div className="session-date">
                  {formatDate(session.created_at)}
                </div>
                <div className="session-participant">
                  <strong>Participant:</strong> {getParticipantName(session)}
                </div>
                <div className="session-tasks">
                  {getTaskInfo(session)}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
