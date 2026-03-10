import React, { useState } from 'react';
import AppLayout from './components/AppLayout/AppLayout';
import AuthForm from './components/AuthForm/AuthForm';
import SettingsPanel from './components/SettingsPanel/SettingsPanel';
import { AuthCredentials } from './types';
import './styles/globals.css';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const handleLogin = (credentials: AuthCredentials) => {
    console.log('Login with:', credentials);
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <AuthForm onLogin={handleLogin} />;
  }

  return (
    <>
      <AppLayout />
      <SettingsPanel
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        onSave={(settings) => console.log('Save settings:', settings)}
        onReset={() => console.log('Reset settings')}
      />
    </>
  );
};

export default App;