// components/SettingsPanel/SettingsPanel.tsx
import React, { useState } from 'react';
import styles from './SettingsPanel.module.css';
import { Settings } from '../../types';

interface SettingsPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (settings: Settings) => void;
  onReset: () => void;
}

const defaultSettings: Settings = {
  model: 'GigaChat',
  temperature: 0.7,
  topP: 0.9,
  maxTokens: 2048,
  systemPrompt: '',
  theme: 'light'
};

const SettingsPanel: React.FC<SettingsPanelProps> = ({
  isOpen,
  onClose,
  onSave,
  onReset
}) => {
  const [settings, setSettings] = useState<Settings>(defaultSettings);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(settings);
    onClose();
  };

  const handleReset = () => {
    setSettings(defaultSettings);
    onReset();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <div className={styles.header}>
          <h2>Настройки</h2>
          <button className={styles.closeButton} onClick={onClose}>✕</button>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label>Модель:</label>
            <select
              value={settings.model}
              onChange={(e) => setSettings({...settings, model: e.target.value as Settings['model']})}
            >
              <option value="GigaChat">GigaChat</option>
              <option value="GigaChat-Plus">GigaChat-Plus</option>
              <option value="GigaChat-Pro">GigaChat-Pro</option>
              <option value="GigaChat-Max">GigaChat-Max</option>
            </select>
          </div>

          <div className={styles.field}>
            <label>Temperature: {settings.temperature}</label>
            <input
              type="range"
              min="0"
              max="2"
              step="0.1"
              value={settings.temperature}
              onChange={(e) => setSettings({...settings, temperature: parseFloat(e.target.value)})}
            />
          </div>

          <div className={styles.field}>
            <label>Top-P: {settings.topP}</label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={settings.topP}
              onChange={(e) => setSettings({...settings, topP: parseFloat(e.target.value)})}
            />
          </div>

          <div className={styles.field}>
            <label>Max Tokens:</label>
            <input
              type="number"
              min="1"
              max="8192"
              value={settings.maxTokens}
              onChange={(e) => setSettings({...settings, maxTokens: parseInt(e.target.value)})}
            />
          </div>

          <div className={styles.field}>
            <label>System Prompt:</label>
            <textarea
              value={settings.systemPrompt}
              onChange={(e) => setSettings({...settings, systemPrompt: e.target.value})}
              rows={4}
            />
          </div>

          <div className={styles.field}>
            <label>Тема:</label>
            <div className={styles.toggle}>
              <button
                type="button"
                className={settings.theme === 'light' ? styles.active : ''}
                onClick={() => setSettings({...settings, theme: 'light'})}
              >
                Светлая
              </button>
              <button
                type="button"
                className={settings.theme === 'dark' ? styles.active : ''}
                onClick={() => setSettings({...settings, theme: 'dark'})}
              >
                Тёмная
              </button>
            </div>
          </div>

          <div className={styles.actions}>
            <button type="submit" className={styles.saveButton}>Сохранить</button>
            <button type="button" className={styles.resetButton} onClick={handleReset}>
              Сбросить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SettingsPanel;