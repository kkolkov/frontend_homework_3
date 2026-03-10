import React, { useState } from 'react';
import styles from './Sidebar.module.css';
import { Chat } from '../../types';

interface ChatItemProps {
  chat: Chat;
}

const ChatItem: React.FC<ChatItemProps> = ({ chat }) => {
  const [isHovered, setIsHovered] = useState(false);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log('Edit chat:', chat.id);
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log('Delete chat:', chat.id);
  };

  return (
    <div 
      className={`${styles.chatItem} ${chat.isActive ? styles.active : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.chatInfo}>
        <div className={styles.chatTitle}>{chat.title}</div>
        <div className={styles.chatDate}>{formatDate(chat.lastMessageDate)}</div>
      </div>
      
      {isHovered && (
        <div className={styles.chatActions}>
          <button className={styles.actionButton} onClick={handleEdit}>✎</button>
          <button className={styles.actionButton} onClick={handleDelete}>🗑</button>
        </div>
      )}
    </div>
  );
};

export default ChatItem;