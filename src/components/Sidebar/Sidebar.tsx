import React, { useState } from 'react';
import styles from './Sidebar.module.css';
import ChatList from './ChatList';
import SearchInput from './SearchInput';

const Sidebar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className={styles.sidebar}>
      <button className={styles.newChatButton}>
        <span className={styles.icon}>+</span>
        Новый чат
      </button>
      
      <SearchInput 
        value={searchQuery}
        onChange={setSearchQuery}
      />
      
      <ChatList searchQuery={searchQuery} />
    </div>
  );
};

export default Sidebar;