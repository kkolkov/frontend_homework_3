import React, { useState } from 'react';
import styles from './AuthForm.module.css';
import ErrorMessage from '../Error/ErrorMessage';
import { AuthCredentials } from '../../types';

interface AuthFormProps {
  onLogin: (credentials: AuthCredentials) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ onLogin }) => {
  const [credentials, setCredentials] = useState<AuthCredentials>({
    credentials: '',
    scope: 'GIGACHAT_API_PERS'
  });
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!credentials.credentials.trim()) {
      setError('Поле не может быть пустым');
      return;
    }

    setError('');
    onLogin(credentials);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Авторизация</h2>
        
        <div className={styles.field}>
          <label>Credentials (Base64)</label>
          <input
            type="password"
            value={credentials.credentials}
            onChange={(e) => setCredentials({...credentials, credentials: e.target.value})}
            placeholder="Введите Base64 строку"
          />
        </div>

        <div className={styles.field}>
          <label>Scope</label>
          <div className={styles.radioGroup}>
            <label>
              <input
                type="radio"
                value="GIGACHAT_API_PERS"
                checked={credentials.scope === 'GIGACHAT_API_PERS'}
                onChange={(e) => setCredentials({...credentials, scope: e.target.value as AuthCredentials['scope']})}
              />
              GIGACHAT_API_PERS
            </label>
            <label>
              <input
                type="radio"
                value="GIGACHAT_API_B2B"
                checked={credentials.scope === 'GIGACHAT_API_B2B'}
                onChange={(e) => setCredentials({...credentials, scope: e.target.value as AuthCredentials['scope']})}
              />
              GIGACHAT_API_B2B
            </label>
            <label>
              <input
                type="radio"
                value="GIGACHAT_API_CORP"
                checked={credentials.scope === 'GIGACHAT_API_CORP'}
                onChange={(e) => setCredentials({...credentials, scope: e.target.value as AuthCredentials['scope']})}
              />
              GIGACHAT_API_CORP
            </label>
          </div>
        </div>

        {error && <ErrorMessage message={error} />}

        <button type="submit" className={styles.submitButton}>
          Войти
        </button>
      </form>
    </div>
  );
};

export default AuthForm;