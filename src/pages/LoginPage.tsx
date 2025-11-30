import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from '../components/Input/Fieldset';
import { InputField } from '../components/Input/Input';
import { Button } from '../components/Button/Button';
import { IconEye, IconEyeOff } from '../components/Icon';
import { supabase } from '../lib/supabase';
import './LoginPage.css';
import avatarImage from '../img/avatar.png';

// Configuration des textes de l'interface
const TEXTS = {
  APP_NAME: 'TaskFlow Pro',
  APP_SUBTITLE: 'Accès réservé à l\'équipe Alivia',
  EMAIL_LABEL: 'Email',
  EMAIL_PLACEHOLDER: 'jean.dupont@alivia.fr',
  PASSWORD_LABEL: 'Mot de passe',
  PASSWORD_PLACEHOLDER: 'Saisissez votre mot de passe',
  SHOW_PASSWORD_ARIA: 'Afficher le mot de passe',
  HIDE_PASSWORD_ARIA: 'Masquer le mot de passe',
  GUEST_MODE_LABEL: 'Mode invité',
  LOGIN_BUTTON_LOADING: 'Connexion...',
  LOGIN_BUTTON: 'Se connecter',
  ERROR_GENERIC: 'Une erreur est survenue lors de la connexion',
} as const;

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) {
        setError(signInError.message);
        return;
      }

      if (data.user) {
        // Connexion réussie - redirection vers le dashboard
        navigate('/dashboard');
      }
    } catch (err) {
      setError(TEXTS.ERROR_GENERIC);
      console.error('Erreur de connexion:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleGuestMode = () => {
    // TODO: Implémenter le mode invité
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-avatar">
          <img src={avatarImage} alt="Avatar Alivia" />
        </div>

        <h3 className="login-title">{TEXTS.APP_NAME}</h3>
        <p className="login-subtitle">{TEXTS.APP_SUBTITLE}</p>

        {error && (
          <div className="login-error" role="alert">
            {error}
          </div>
        )}

        <Form onSubmit={handleSubmit} className="login-form">
          <InputField
            label={TEXTS.EMAIL_LABEL}
            type="email"
            placeholder={TEXTS.EMAIL_PLACEHOLDER}
            value={email}
            onChange={(value) => setEmail(value)}
            isRequired
          />

          <InputField
            label={TEXTS.PASSWORD_LABEL}
            type={showPassword ? "text" : "password"}
            placeholder={TEXTS.PASSWORD_PLACEHOLDER}
            value={password}
            onChange={(value) => setPassword(value)}
            isRequired
            rightElement={
              <button
                type="button"
                onClick={togglePasswordVisibility}
                aria-label={showPassword ? TEXTS.HIDE_PASSWORD_ARIA : TEXTS.SHOW_PASSWORD_ARIA}
              >
                {showPassword ? <IconEyeOff size="20" /> : <IconEye size="20" />}
              </button>
            }
          />

          <div className="login-actions">
            <button
              type="button"
              className="login-guest-link"
              onClick={handleGuestMode}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M10 10C12.0711 10 13.75 8.32107 13.75 6.25C13.75 4.17893 12.0711 2.5 10 2.5C7.92893 2.5 6.25 4.17893 6.25 6.25C6.25 8.32107 7.92893 10 10 10Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.0834 17.5C17.0834 14.2783 13.9518 11.6667 10.0001 11.6667C6.04841 11.6667 2.91675 14.2783 2.91675 17.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {TEXTS.GUEST_MODE_LABEL}
            </button>

            <Button variant="primary" type="submit" isDisabled={loading}>
              {loading ? TEXTS.LOGIN_BUTTON_LOADING : TEXTS.LOGIN_BUTTON}
              {!loading && (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M7.5 15L12.5 10L7.5 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
