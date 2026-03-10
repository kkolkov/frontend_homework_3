// components/Message/Message.tsx
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './Message.module.css';
import { Message as MessageType } from '../../types';

interface MessageProps {
  message: MessageType;
}

const Message: React.FC<MessageProps> = ({ message }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(message.text);
  };

  const isUser = message.sender === 'user';

  return (
    <div 
      className={`${styles.message} ${isUser ? styles.userMessage : styles.assistantMessage}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!isUser && (
        <div className={styles.avatar}>
          <img src="/gigachat-icon.png" alt="GigaChat" />
        </div>
      )}
      
      <div className={styles.messageContent}>
        <div className={styles.senderName}>
          {isUser ? 'Вы' : 'GigaChat'}
        </div>
        
        <div className={styles.messageText}>
          <ReactMarkdown>
            {message.text}
          </ReactMarkdown>
        </div>

        {isHovered && (
          <button className={styles.copyButton} onClick={handleCopy}>
            📋 Копировать
          </button>
        )}
      </div>
    </div>
  );
};

export default Message;