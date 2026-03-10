import React, { useState } from 'react';
import styles from './AppLayout.module.css';
import Sidebar from '../Sidebar/Sidebar';
import ChatWindow from '../ChatWindow/ChatWindow';

const AppLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className={styles.layout}>
      <button 
        className={styles.burgerButton}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        ☰
      </button>
      
      <div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ''}`}>
        <Sidebar />
      </div>
      
      <div className={styles.mainContent}>
        <ChatWindow />
      </div>
    </div>
  );
};

export default AppLayout;