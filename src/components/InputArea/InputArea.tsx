// components/InputArea/InputArea.tsx
import React, { useState, useRef, useEffect } from 'react';
import styles from './InputArea.module.css';

interface InputAreaProps {
  onSend: (message: string) => void;
  onStop: () => void;
}

const InputArea: React.FC<InputAreaProps> = ({ onSend, onStop }) => {
  const [message, setMessage] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(
        textareaRef.current.scrollHeight,
        200
      )}px`;
    }
  }, [message]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (message.trim()) {
        onSend(message);
        setMessage('');
      }
    }
  };

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };

  return (
    <div className={styles.inputArea}>
      <button className={styles.attachButton}>📎</button>
      
      <textarea
        ref={textareaRef}
        className={styles.textarea}
        placeholder="Введите сообщение..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        rows={1}
      />
      
      {message.trim() ? (
        <button 
          className={`${styles.sendButton} ${styles.active}`}
          onClick={handleSend}
        >
          📤 Отправить
        </button>
      ) : (
        <button className={styles.stopButton} onClick={onStop}>
          ⏹ Стоп
        </button>
      )}
    </div>
  );
};

export default InputArea;