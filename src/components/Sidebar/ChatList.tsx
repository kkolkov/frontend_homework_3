import React from 'react';
import styles from './Sidebar.module.css';
import ChatItem from './ChatItem';

interface ChatListProps {
  searchQuery: string;
}

const mockChats = [
  { id: '1', title: 'Обсуждение проекта', lastMessageDate: new Date('2024-01-15T10:30:00'), isActive: true },
  { id: '2', title: 'Помощь с кодом React', lastMessageDate: new Date('2024-01-14T15:45:00') },
  { id: '3', title: 'Длинное название чата, которое должно обрезаться с помощью text-overflow ellipsis', lastMessageDate: new Date('2024-01-13T09:20:00') },
  { id: '4', title: 'Вопросы по TypeScript', lastMessageDate: new Date('2024-01-12T18:10:00') },
  { id: '5', title: 'Техническая поддержка', lastMessageDate: new Date('2024-01-11T12:00:00') },
];

const ChatList: React.FC<ChatListProps> = ({ searchQuery }) => {
  const filteredChats = mockChats.filter(chat => 
    chat.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.chatList}>
      {filteredChats.map(chat => (
        <ChatItem key={chat.id} chat={chat} />
      ))}
    </div>
  );
};

export default ChatList;