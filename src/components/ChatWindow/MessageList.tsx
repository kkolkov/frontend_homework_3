import React from 'react';
import Message from '../Message/Message';
import { Message as MessageType } from '../../types';

const mockMessages: MessageType[] = [
  { id: '1', text: 'Привет! Как дела?', sender: 'user', timestamp: new Date(), senderName: 'Вы' },
  { id: '2', text: 'Здравствуйте! Я GigaChat. Чем могу помочь?', sender: 'assistant', timestamp: new Date(), senderName: 'GigaChat' },
  { id: '3', text: 'Расскажи, как работает **React** с *TypeScript*?', sender: 'user', timestamp: new Date(), senderName: 'Вы' },
  { id: '4', text: 'Это отличное сочетание! Вот пример кода:\n```tsx\nconst App: React.FC = () => {\n  return <div>Hello</div>;\n}\n```', sender: 'assistant', timestamp: new Date(), senderName: 'GigaChat' },
  { id: '5', text: 'А что насчет списков?', sender: 'user', timestamp: new Date(), senderName: 'Вы' },
  { id: '6', text: 'Можно создать список:\n- Пункт первый\n- Пункт второй', sender: 'assistant', timestamp: new Date(), senderName: 'GigaChat' },
];

const MessageList: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      {mockMessages.map(msg => (
        <Message key={msg.id} message={msg} />
      ))}
    </div>
  );
};

export default MessageList;