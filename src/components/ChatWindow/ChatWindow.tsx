import React, { useState } from 'react';
import styles from './ChatWindow.module.css';
import MessageList from './MessageList';
import InputArea from '../InputArea/InputArea';
import TypingIndicator from '../TypingIndicator/TypingIndicator';
import EmptyState from '../Error/EmptyState';

const ChatWindow: React.FC = () => {
  const [isTyping, setIsTyping] = useState(false);
  const [hasMessages, setHasMessages] = useState(true);

  return (
    <div className={styles.chatWindow}>
      <div className={styles.header}>
        <h2 className={styles.chatTitle}>Обсуждение проекта</h2>
        <button className={styles.settingsButton}>⚙️</button>
      </div>

      <div className={styles.messagesContainer}>
        {hasMessages ? (
          <>
            <MessageList />
            {isTyping && <TypingIndicator />}
          </>
        ) : (
          <EmptyState message="Начните новый диалог" />
        )}
      </div>

      <InputArea onSend={() => {}} onStop={() => {}} />
    </div>
  );
};

export default ChatWindow;