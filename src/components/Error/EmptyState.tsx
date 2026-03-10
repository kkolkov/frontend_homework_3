import React from 'react';
import styles from './Error.module.css';

interface EmptyStateProps {
  message: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ message }) => {
  return (
    <div className={styles.emptyState}>
      <div className={styles.icon}>💬</div>
      <p>{message}</p>
    </div>
  );
};

export default EmptyState;