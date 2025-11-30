import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from '../components/Input/Fieldset';
import { InputField } from '../components/Input/Input';
import { Button } from '../components/Button/Button';
import { IconEye, IconEyeOff } from '../components/Icon';
import { supabase } from '../lib/supabase';
import './LoginPage.css';
import avatarImage from '../img/avatar.png';

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
      setError('Une erreur est survenue lors de la connexion');
      console.error('Erreur de connexion:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleGuestMode = () => {
    console.log('Mode invité activé');
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

        <h3 className="login-title">TaskFlow Pro</h3>
        <p className="login-subtitle">Accès réservé à l'équipe Alivia</p>

        {error && (
          <div className="login-error" role="alert">
            {error}
          </div>
        )}

        <Form onSubmit={handleSubmit} className="login-form">
          <InputField
            label="Email"
            type="email"
            placeholder="jean.dupont@alivia.fr"
            value={email}
            onChange={(value) => setEmail(value)}
            isRequired
          />

          <InputField
            label="Mot de passe"
            type={showPassword ? "text" : "password"}
            placeholder="Saisissez votre mot de passe"
            value={password}
            onChange={(value) => setPassword(value)}
            isRequired
            rightElement={
              <button
                type="button"
                onClick={togglePasswordVisibility}
                aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
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
              Mode invité
            </button>

            <Button variant="primary" type="submit" isDisabled={loading}>
              {loading ? 'Connexion...' : 'Se connecter'}
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
